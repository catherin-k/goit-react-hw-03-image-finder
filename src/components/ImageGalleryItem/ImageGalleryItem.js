import React from "react";
import "./ImageGalleryItem.css";

const ImageGalleryItem = ({ smallImage, type }) => {
  return (
    <li className="ImageGalleryItem">
      <img src={smallImage} alt={type} className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
