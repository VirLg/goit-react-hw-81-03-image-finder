import React from 'react';
import PropTypes from 'prop-types';
import ImageItemGallery from './ImageItemGallery';

const ImageGallery = ({ value }) => {
  const handleItemClick = () => {};
  console.log(value);
  value.map(el => {
    return (
      <>
        <ul>
          <ImageItemGallery
            handleItemClick={handleItemClick}
          />
        </ul>
      </>
    );
  });
};

ImageGallery.propTypes = {};

export default ImageGallery;
