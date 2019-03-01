import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'
import './Resources/css/app.css'
import './firebase'

import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(<BrowserRouter>
                    <Routes />
                </BrowserRouter>, document.getElementById('root'));

