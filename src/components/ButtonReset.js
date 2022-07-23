const Button = (props) => {
  console.log(props);
  return (
    <button
      className='buttonReset'
      onClick={() => {
        props.setCounter(props.counter);
      }}
    >
      Reset
    </button>
  );
};

export default Button;
