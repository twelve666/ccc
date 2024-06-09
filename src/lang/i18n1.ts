import { createContext, useCallback, useContext, useMemo } from "react"
import en from './en';
import cn from './cn';
export type Locale = "cn" | "en"

export type ContextLocale = {
	locale: Locale
	setLocale(locale: Locale): Promise<void>
}

// A type define for the translator book
export type LangBook<T extends string> = Record<Locale, Record<T, string>>

export type UnionLangBook<
	T extends string,
	Books extends LangBook<T extends infer U ? U : never>[],
> = Books

let currentLocale: Locale = "en"

export const initialContextValue: ContextLocale = {
	locale: currentLocale,
	setLocale,
}

export const LocaleContext = createContext<ContextLocale>(initialContextValue)

type Deps = {
	storageKey: string
	defaultLocale: Locale
}

let deps: Deps
// A function that initializes the locale, and sets the default locale to "en"
export async function init(_deps: Deps) {
	deps = _deps
	const item = await localStorage.getItem(deps.storageKey)
	if (item) {
		currentLocale = item as Locale
	} else {
		currentLocale = deps.defaultLocale
	}
}
// A static function to set the locale
export async function setLocale(locale: Locale) {
	currentLocale = locale
	await localStorage.setItem(currentLocale, currentLocale)
}

// A static function to get the locale
export function getLocale(): Locale {
	return currentLocale
}
// A class that defines the translator
export class Translator<T extends string> {
	private constructor(private readonly book: LangBook<T>) { }

	static from<T extends string>(book: LangBook<T>) {
		return new Translator(book)
	}

	loadBy(locale: Locale) {
		return this.book[locale]
	}
}
// const book = defineLangBook({
// 	cn,
// 	en,
// });
// A Hook that uses the translator book: LangBook<T>
export function useLangBook<T extends string>(book: LangBook<T>) {


	const { locale: _currentLocale } = useContext(LocaleContext)
	const currentBook = useMemo(
		() => Translator.from(book).loadBy(_currentLocale),
		[book, _currentLocale],
	)
	const T = useCallback(
		(text: T) => {
			return currentBook?.[text] ?? text
		},
		[currentBook],
	)
	return {
		T,
		currentBook,
	}
}

// A function that defines the book, and return the book
export function defineLangBook<T extends string>(book: LangBook<T>) {
	return book
}

export default defineLangBook({
	cn,
	en,
})