import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem";

import "./ImageGallery.css";

const ImageGallery = ({ images, openModal, getImage }) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, type, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          modalImage={largeImageURL}
          smallImage={webformatURL}
          type={type}
          openModal={openModal}
          getImage={getImage}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  openModal: PropTypes.func.isRequired,
  getImage: PropTypes.func.isRequired,
};

export default ImageGallery;
