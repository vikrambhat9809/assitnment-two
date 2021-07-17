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
          {this.state.fields.firstName}<br></br>
          {this.state.fields.lastName}<br></br>
          {this.state.fields.email}<br></br>
          {this.state.fields.subject}
        </p>
      </div>

    )
  }
}

export default App;
