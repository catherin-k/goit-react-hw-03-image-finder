import React from "react";
// import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem";

import "./ImageGallery.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, type }) => (
        <ImageGalleryItem key={id} smallImage={webformatURL} type={type} />
      ))}
    </ul>
  );
};

export default ImageGallery;
