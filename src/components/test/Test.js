import React, { Component } from "react";

// React Component Lifecycles
// jsonplaceholder => fake rest api website
class Test extends Component {
  state = {
    id: "",
    name: "",
    username: "",
    email: ""
  };

  componentDidMount() {
    console.log("componentDidMount...");
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          id: data.id,
          name: data.name,
          username: data.username,
          email: data.email
        })
      );
  }

  // UNSAFE_componentWillMount() {
  //   console.log("componentWillMount...");
  // }

  // UNSAFE_componentDidUpdate() {
  //   console.log("componentDidUpdate...");
  // }

  // UNSAFE_componentWillUpdate() {
  //   console.log("componentWillUpdate...");
  // }

  // UNSAFE_componentWillReceiveProps() {
  //   console.log("componentWillReceiveProps...");
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return { test: "something" };
  // }
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("getSnapshotBeforeUpdate...");
  // }

  render() {
    const { id, name, username, email } = this.state;
    return (
      <div>
        <h1>Test Component</h1>
        <ul>
          <li>{id}</li>
          <li>{name}</li>
          <li>{username}</li>
          <li>{email}</li>
        </ul>
      </div>
    );
  }
}
export default Test;
