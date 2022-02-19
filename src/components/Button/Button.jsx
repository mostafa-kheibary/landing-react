import './Button.css';
const Button = ({ children, fill, width, height,arrow }) => {
  const buttonStyle = {
    width,
    height,
  };
  return (
    <button style={buttonStyle} className={`button ${fill === true && 'fill'}`}>
      {children}
      {arrow === true && <i className="fa-solid fa-arrow-right-long"></i>}
    </button>
  );
};
Button.defaultProps = {
  fill: false,
  arrow:false,
  width: 160,
  height: 40,
};
export default Button;
