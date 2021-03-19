import React, { Component } from "react";

import imagesApi from "../services/imagesApi";

import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";

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
    const { searchQuery, currentPage } = this.state;

    const options = {
      searchQuery,
      currentPage,
    };

    imagesApi
      .fetchImages(options)
      .then((images) => {
        this.setState((prevState) => ({
          hits: [...prevState.hits, ...images],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { hits } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmitSearchbar} />
        <ImageGallery images={hits} />

        <button type="button" onClick={this.fetchImages}>
          Load More
        </button>
      </div>
    );
  }
}

export default App;
