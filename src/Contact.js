import React from 'react';

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
        fetch('/submitContact', {
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
                        this.setState({
                            result : 'Contact saved successfully'
                        })
                    }
                }));
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