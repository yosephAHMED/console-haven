import React, { Component } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";
import "./Consoles.css";
import Console from "./Console";

export default class Lookup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      consoles: null,
      console: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // on mount obtain all consoles from the api
  componentDidMount() {
    axios.get("http://csc225.mockable.io/consoles").then(({ data }) => {
      this.setState({ consoles: data });
    });
  }

  handleChange(event) {
    // when user types in search bar, the state of value is updated to the text inside of it
    // whenever user updates their search, the console displayed on screen is reset to null
    // user is able to search for multiple consoles without the app breaking
    this.setState({ value: event.target.value, console: null });
  }

  handleSubmit(event) {
    alert("Submitted: " + this.state.value);
    event.preventDefault();

    var j = 0;
    var consoleFound = false;

    // loop through consoles data and compare search value with consoles.name
    for (j = 0; consoleFound === false && j < this.state.consoles.length; j++) {
      if (this.state.value === this.state.consoles[j].name) {
        // break loop
        consoleFound = true;
      }
    }
    if (consoleFound) {
      // pass id to Console component to retrieve more information
      this.setState({
        console: <Console selectedConsole={j} />,
      });
    } else {
      this.setState({
        console: <h1>Console not found!</h1>,
      });
    }
  }

  render() {
    // loading state while fetching consoles
    if (this.state.consoles === null) {
      return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        </div>
      );
    }

    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group mt-5">
              <label htmlFor="text">Search</label>
              <input
                type="text"
                className="form-control"
                value={this.state.value}
                onChange={this.handleChange}
                aria-describedby="searchBar"
              />
              <small id="searchBar" className="form-text text-muted">
                Enter the name of the console.
              </small>
            </div>
            <button type="submit" className="btn btn-primary" value="Submit">
              Submit
            </button>
          </form>
        </div>
        <div className="row">{this.state.console}</div>
      </div>
    );
  }
}
