import React from 'react';
import Config from './CONFIG'
export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            result: ''
        }
    }
    onSubmit = (e) => {
        try {
            fetch('https://middle-ware-app.herokuapp.com/api/submitContact', {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email
                }),
                async: true
            })
                .then((response) => (response.json())
                    .then(json => {
                        if (json !== undefined) {
                            this.props.history.push('/');
                        }
                    }));
                    
        } 
        catch (error) {
            console.log(error);
        }
        
    }

    ontxtChange = () => {
        this.setState({
            name: document.getElementsByClassName("name")[0].value,
            email: document.getElementsByClassName("email")[0].value
        });
    }

    render() {
        return (
            <form>
                <h1>Contact</h1>
                <input placeholder="Enter Name" type="name" className="name" onChange={this.ontxtChange} /><br />
                <input placeholder="Enter EmailId" type="email" className="email" onChange={this.ontxtChange} /><br />
                <button onClick={this.onSubmit}>Submit</button>
                <p>{this.state.result}</p>
            </form>
        )
    }
}
