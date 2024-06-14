import classNames from "classnames";

const Button = ({
  children,
  onClick,
  fullWidth = false,
  variant = "primary",
}) => (
  <button
    className={classNames({
      fullWidth: fullWidth,
      "button-style": true,
      outline: variant === "outline",
    })}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
