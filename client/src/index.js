import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react';
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

ReactDOM.render(

    <BrowserRouter>
    <Auth0ProviderWithHistory>
        <App />
    </Auth0ProviderWithHistory>
    </BrowserRouter>, 
    document.querySelector('#root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
