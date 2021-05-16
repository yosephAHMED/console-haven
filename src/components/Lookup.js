import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import axios from "axios";
import "./Consoles.css";

export default class Lookup extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", consoles: null, console: null };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();

    var consoleFound = false;
    var j = 0;

    for (j = 0; consoleFound === false && j < this.state.consoles.length; j++) {
      if (this.state.value === this.state.consoles[j].name) {
        consoleFound = true;
      }
    }
    return consoleFound ? this.getConsole(j + 1) : <h1>Console Not Found</h1>;
  }

  getConsole(id) {
    axios.get(`http://csc225.mockable.io/consoles/${id}`).then(({ data }) => {
      this.setState({ console: data });
    });
    return (
      <div className="container-sm">
        <div className="card bg-primary my-5">
          <img
            src={this.state.console.image}
            className="card-img-top"
            alt={this.state.console.name}
          />
          <div className="card-body">
            <h1 className="card-title display-3">{this.state.console.name}</h1>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item font-weight-bold">
              Price: ${this.state.console.price}
            </li>
            <li className="list-group-item">
              Country: {this.state.console.country}
            </li>
            <li className="list-group-item">
              Release Year: {this.state.console.releaseYear}
            </li>
          </ul>
          <div className="card-body row d-flex justify-content-center">
            <Link to="#">
              <button type="button" className="btn btn-success mr-2">
                Bookmark
              </button>
            </Link>
            <Link to="#">
              <button type="button" className="btn btn-danger ml-2">
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // on mount obtain all consoles from the api
  componentDidMount() {
    axios.get("http://csc225.mockable.io/consoles").then(({ data }) => {
      this.setState({ consoles: data });
    });
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
      <div className="container d-flex justify-content-center align-items-center">
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
    );
  }
}
