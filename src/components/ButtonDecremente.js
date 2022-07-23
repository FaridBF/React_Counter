import image_less from '../assets/image_less.svg';

const Button = (props) => {
  console.log(props);
  return (
    <button
      disabled={props.counter <= 0 ? true : false}
      onClick={() => {
        if (props.counter > 0) {
          props.setCounter(props.counter - 1);
        }
      }}
    >
      <img src={image_less} alt='image_for_less'></img>
    </button>
  );
};

export default Button;
