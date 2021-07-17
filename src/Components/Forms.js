import React, { Component } from "react";
import "./Login.css";
class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            subject: null
        }
    }
    handleFirstNameChange = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handleSubjectChange = (event) => {
        this.setState({
            subject:event.target.value
        })
    }

    handleSubmit = (event) => {

        // alert(`${this.state.firstName} and ${this.state.lastName}`)
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            subject: ''
        })
    }
    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>First Name</label>
                        <input required type="text" value={this.state.firstName} onChange={this.handleFirstNameChange}></input>
                        <br></br>
                        <label>Last Name</label>
                        <input required type="text" value={this.state.lastName} onChange={this.handleLastNameChange}></input>
                        <br></br>
                        <label>Email</label>
                        <input required type="email" value={this.state.email} onChange={this.handleEmailChange}></input>
                        <br></br>
                        <label for="subjects">Choose a subject: </label>
                        <select required name="subject" id="subject" value={this.state.subject} onChange={this.handleSubjectChange}>
                            <option >None</option>
                            <option value="react" >React</option>
                            <option value="angular">Angular</option>
                            <option value="django">Django</option>
                            <option value="flask">Flask</option>
                        </select>
                        <button class="button">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Forms;
