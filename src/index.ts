/*
 * Copyright (c) 2022 Alexandr <re-knownout> knownout@hotmail.com
 * Licensed under the GNU Affero General Public License v3.0 License (AGPL-3.0)
 * https://github.com/re-knownout/lib
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import App from "./App";

const root = ReactDOM.createRoot(document.querySelector("main#app-root")!);

root.render(
    React.createElement(
        BrowserRouter, null, React.createElement(
            RecoilRoot, null, React.createElement(App)
        )
    )
);
