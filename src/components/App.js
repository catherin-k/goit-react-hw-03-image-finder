import React, { Component } from "react";
import axios from "axios";

import Searchbar from "./Searchbar";

import "./App.css";

// 19947023-b7017f4974f73f87e742a194c

class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onSubmitSearchbar = (query) => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      hits: [],
    });
  };

  fetchImages = () => {
    axios
      .get(
        `https://pixabay.com/api/?key=19947023-b7017f4974f73f87e742a194c&q=${this.state.searchQuery}&per_page=6&page=${this.state.currentPage}`
      )
      .then((response) => {
        this.setState((prevState) => ({
          hits: [...prevState.hits, ...response.data.hits],
          currentPage: prevState.currentPage + 1,
        }));
      });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmitSearchbar} />
        <ul>
          {this.state.hits.map((hit) => (
            <li key={hit.id}>
              <img src={hit.webformatURL} alt={hit.tags} width="40" />
            </li>
          ))}
        </ul>
        <button type="button" onClick={this.fetchImages}>
          Load More
        </button>
      </div>
    );
  }
}

export default App;
