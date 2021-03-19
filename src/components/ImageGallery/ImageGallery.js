import React from "react";
// import PropTypes from "prop-types";

import "./ImageGallery.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      {images.map((image) => (
        <li key={image.id}>
          <img src={image.webformatURL} alt={image.tags} width="40" />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
