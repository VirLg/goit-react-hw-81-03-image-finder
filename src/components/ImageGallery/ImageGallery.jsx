import React from 'react';
import PropTypes from 'prop-types';
import ImageItemGallery from './ImageItemGallery';

const ImageGallery = ({ value }) => {
  const handleItemClick = () => {};
  console.log(value);
  return (
    <ul>
      <ImageItemGallery value={value} />
    </ul>
  );
};

ImageGallery.propTypes = {};

export default ImageGallery;
