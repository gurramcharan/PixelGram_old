import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import {makeServer} from './server'
import {AuthProvider, AuthContext} from "./Contexts/AuthContext"
import {PostContext} from './Contexts/PostContext';
import Postprovider from './Contexts/PostContext';
import BookmarkProvider, {BookmarkContext} from './Contexts/BookmarkContext';
import UserProvider, {UserContext} from './Contexts/UserContext';
import {BrowserRouter} from 'react-router-dom';

// Call make Server
makeServer()

export {AuthContext, PostContext, BookmarkContext, UserContext};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <Postprovider>
                    <BookmarkProvider>
                        <UserProvider>
                            <App/>
                        </UserProvider>
                    </BookmarkProvider>
                </Postprovider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals reportWebVitals();