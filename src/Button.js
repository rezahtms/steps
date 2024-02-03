const Button = ({ bg, textColor, children, onClick }) => {
  return (
    <button style={{ backgroundColor: bg, color: textColor }} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
