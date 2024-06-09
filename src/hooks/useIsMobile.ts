
import { useContext } from 'react';
import { IsMobileContext } from "../App"
// 从 IsMobileContext 中获取当前是否移动端状态的 hook
export const useIsMobile = () => {
    const isMobile = useContext(IsMobileContext)
    return isMobile
  }