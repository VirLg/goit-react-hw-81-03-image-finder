const ImageItemGallery = ({ value }) => {
  console.log(value);
  return value.map(({ id, pageURL, previewURL, user }) => {
    return (
      <li key={id}>
        <img src={previewURL} alt={user} />
      </li>
    );
  });
};
export default ImageItemGallery;
