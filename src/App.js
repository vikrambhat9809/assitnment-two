import React, { Component } from "react";
import Forms from "./Components/Forms.js";

class App extends Component {
  state = {
    fields: {
      firstName: '',
      lastName: '',
      email: '',
      subject: ''
    }
  }
  onSubmit = (fields) => {
    this.setState({ fields });

  }
  render() {
    const { data } = this.state.fields;
    return (
      <div className="App">
        <Forms onSubmit={fields => this.onSubmit(fields)} />
        <p class="format-me">
          First Name: {this.state.fields.firstName}<br></br>
          Last Name: {this.state.fields.lastName}<br></br>
          email: {this.state.fields.email}<br></br>
          subject: {this.state.fields.subject}
        </p>
      </div>

    )
  }
}

export default App;
