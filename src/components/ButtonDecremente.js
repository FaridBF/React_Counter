const Button = (props) => {
  console.log(props);
  return (
    <button
      onClick={() => {
        if (props.counter > 0) {
          props.setCounter(props.counter - 1);
        }
        // props.setCounter(props.counter - 1);
      }}
    >
      Moins
    </button>
  );
};

export default Button;
