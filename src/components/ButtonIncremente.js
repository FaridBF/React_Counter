import image_more from '../assets/image_more.svg';

const Button = (props) => {
  console.log(props);
  return (
    <button
      disabled={props.counter >= 10 ? true : false}
      onClick={() => {
        props.setCounter(props.counter + 1);
      }}
    >
      <img src={image_more} alt='image_for_more'></img>
    </button>
  );
};

export default Button;
