import React from 'react';
import PropTypes from 'prop-types';
import ImageItemGallery from './ImageItemGallery';

const ImageGallery = ({
  id,
  pageURL,
  previewURL,
  user,
}) => {
  console.log(id);
  const handleItemClick = () => {};

  return (
    <ul>
      <ImageItemGallery
        id={id}
        pageURL={pageURL}
        previewURL={previewURL}
        user={user}
      />
    </ul>
  );
};

ImageGallery.propTypes = {};

export default ImageGallery;
