import React, { Component } from "react";
import "./App.css";
import Form from "./components/form";
import Repositories from "./components/repositories";
import ErrorBoundary from "./components/ErrorBoundaries";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }

  getProfile = async e => {
    if (e.target.elements.profileName.value != null) {
      const profileName = e.target.elements.profileName.value;
      e.preventDefault();
      const api_call = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.github.com/users/${profileName}/repos`
      );
      const data = await api_call.json();
      this.setState({ repos: data });
    } else {
      e.preventDefault();
    }
  };

  componentDidMount = () => {
    // Do this to remember the searched profile and it's repos when coming back from another view.
    const json = localStorage.getItem("repos");
    const repositories = JSON.parse(json);
    this.setState({ repos: repositories });
  };

  componentDidUpdate = () => {
    const repositories = JSON.stringify(this.state.repos);
    localStorage.setItem("repos", repositories);
  };

  render() {
    return (
      <ErrorBoundary>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Github Profile Search</h1>
          </header>
          <Form getProfile={this.getProfile} />
          {console.log("abc " + this.state.repos.length)}
          {this.state.repos.length === undefined ? (
            <h1>No repositories or profile found</h1>
          ) : (
            <Repositories repos={this.state.repos} />
          )}
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
