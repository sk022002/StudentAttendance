import React, { Component } from "react";
import { Button, Form, Input } from "react-bootstrap";

class Home extends Component {
  state = {
    isPresent: false,
  };

  handleChange = (e) => {
    this.setState({
      isPresent: e.target.checked,
    });
  };

  render() {
    return (
      <div>
        <Form>
          <Input type="checkbox" checked={this.state.isPresent} onChange={this.handleChange} />
          <Button variant="primary">Mark Attendance</Button>
        </Form>
      </div>
    );
  }
}

export default Home;
