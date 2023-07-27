import './button.styles.css';

const Button = ({ text, onClick = () => null }) => {
  return (
    <button className={`andy-button ubuntu`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
