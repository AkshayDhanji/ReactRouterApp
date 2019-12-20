import React from 'react';
import { Route, NavLink } from 'react-router-dom';

const User = ({ match }) => (
    <div>
        This is User {match.params.id}
    </div>
)
export default class Users extends React.Component {
    render() {
        console.log(this.props.match.params.id)//get the value of the querystring sent in the URL
        return (
            <div>
                <h1>Users</h1>
                <ul>
                    <li>
                        <NavLink activeClassName="active" to="/Users/1">User 1</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/Users/2">User 2</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/Users/3">User 3</NavLink>
                    </li>
                </ul>
                <Route path="/Users/:id" component={User} />
            </div>
        )
    }
}