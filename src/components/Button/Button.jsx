const Button = props => {
  console.log(props);
  const change = () => {
    console.log(555);
  };
  return (
    <>
      <button onClick={change}>
        Load More!!!!!!!!!!!!
      </button>
    </>
  );
};
export default Button;
