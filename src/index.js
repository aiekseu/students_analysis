import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();

ReactDOM.render(
    <React.StrictMode>
        <HashRouter history={history}>
            <App/>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
