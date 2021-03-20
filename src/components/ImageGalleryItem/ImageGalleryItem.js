import React from "react";
import PropTypes from "prop-types";

import "./ImageGalleryItem.css";

const ImageGalleryItem = ({ smallImage, type, modalImage, getImage }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={smallImage}
        alt={type}
        onClick={() => getImage(modalImage)}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  smallImage: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  modalImage: PropTypes.string.isRequired,
  getImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
