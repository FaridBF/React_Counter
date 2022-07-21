const Button = (props) => {
  console.log(props);
  return (
    <button
      onClick={() => {
        props.setCounter(props.counter + 1);
      }}
    >
      Plus
    </button>
  );
};

export default Button;
