import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {Provider} from "react-redux";
// import { App as AntdApp, ConfigProvider } from 'antd';
// import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";

export const theme = {
};
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        {/* <Provider> */}
            {/* <ConfigProvider theme={theme}> */}
                {/* <AntdApp> */}
              
                    <BrowserRouter>
                    {/* 当组件未加载完成时显示的组件 */}
                        <Suspense>
                            <App />
                        </Suspense>
                    </BrowserRouter>
                {/* </AntdApp> */}
            {/* </ConfigProvider> */}
        {/* </Provider> */}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
