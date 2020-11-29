import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from './components/MainPage';
import 'antd/dist/antd.css';
import 'rc-texty/assets/index.css';
import * as serviceWorker from './serviceWorker';
import About from "./components/about/About";
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Home2 from "./components/Home2/Home2";



ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/home' component={MainPage}  />
            <Route path='/about' component={About} />
            {/*<Route path='/xxx' component={Home} />*/}


        </Switch>
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
