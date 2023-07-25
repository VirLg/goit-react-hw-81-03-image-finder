const ImageItemGallery = ({
  id,
  pageURL,
  previewURL,
  user,
}) => {
  return (
    <li key={id} onClick={() => console.log(id)}>
      <img src={previewURL} alt={user} />
    </li>
  );
};
export default ImageItemGallery;
