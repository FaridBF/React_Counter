const Button = (props) => {
  console.log(props);
  return (
    <button
      disabled={props.counter >= 10 ? true : false}
      onClick={() => {
        props.setCounter(props.counter + 1);
      }}
    >
      Plus
    </button>
  );
};

export default Button;
