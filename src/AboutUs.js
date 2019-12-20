import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import NotFound from './NotFound';

export default class About extends React.Component {

    render() {
        const { match } = this.props;
        console.log(match);
        return (
            <div>
                <h1>About Us</h1>
                <ul>
                    <li>
                        <NavLink to={`${match.url}/Company`}>Company</NavLink>
                    </li>
                    <li>
                        <NavLink to={`${match.url}/PersonalInfo`}>Personal Info</NavLink>
                    </li>
                </ul>

                <Switch>
                    <Route path={`${match.url}/Company`} component={Company} />
                    <Route path={`${match.url}/PersonalInfo`} component={PersonalInfo} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        )
    }
}

const Company = () => (
    <div>
        <h1>Company</h1>
    </div>
)

const PersonalInfo = () => (
    <div>
        <h1>Personal Info</h1>
    </div>
)