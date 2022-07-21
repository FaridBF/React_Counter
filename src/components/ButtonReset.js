const Button = (props) => {
  console.log(props);
  return (
    <button
      onClick={() => {
        props.setCounter(props.counter);
      }}
    >
      Reset
    </button>
  );
};

export default Button;
