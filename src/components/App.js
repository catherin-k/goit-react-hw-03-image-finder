import React, { Component } from "react";

import imagesApi from "../services/imagesApi";

import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Modal from "./Modal";
import Loader from "react-loader-spinner";

import "./App.css";

class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: "",
    showModal: false,
    modalImage: null,
    isLoading: false,
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

    this.setState({ isLoading: true });

    imagesApi
      .fetchImages(options)
      .then((images) => {
        this.setState((prevState) => ({
          hits: [...prevState.hits, ...images],
          currentPage: prevState.currentPage + 1,
        }));
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      })
      .catch((error) => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  getImage = (modalImage) => {
    this.toggleModal();
    this.setState({ modalImage });
  };

  render() {
    const { hits, showModal, modalImage, isLoading } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmitSearchbar} />

        <ImageGallery
          images={hits}
          openModal={this.toggleModal}
          getImage={this.getImage}
        />

        {isLoading && (
          <Loader
            className="Loader"
            type="Oval"
            color="#00BFFF"
            height={80}
            width={80}
          />
        )}

        {hits.length > 0 && !isLoading && (
          <Button onClick={this.fetchImages} text="Load More" />
        )}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={modalImage} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
