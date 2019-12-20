import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Users from './Users';
import Contact from './Contact';
import AboutUs from './AboutUs'
import { Route, BrowserRouter as Router, HashRouter, Switch, NavLink, Redirect } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import NotFound from './NotFound';

const browserrouting = (
    <Router>
        <div>
            <ul>
                <li>
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
                </li>
                <li>
                <NavLink activeClassName="active" to="/Users">Users</NavLink>
                </li>
                <li>
                <NavLink activeClassName="active" to="/Contact">Contact</NavLink>
                </li>
                <li>
                <NavLink activeClassName="active" to="/AboutUs">About Us</NavLink>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/Users" component={Users}/>
                <Route path="/Contact" component={Contact}/>
                <Route path="/AboutUs" component={AboutUs}/>
                <Route component={NotFound} />
            </Switch>
            <Redirect to="/"/>
        </div>
    </Router>
)

// const hashrouting = (
//     <HashRouter>
//         <div>
//             <h1>Hash Router</h1>
//         </div>
//     </HashRouter>
// )

ReactDOM.render(browserrouting, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
