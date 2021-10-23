import { ButtonHTMLAttributes } from "react";
import classes from "./Button.module.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({ children, ...props }) => {
  return (
    <button className={classes.button} {...props}>
      {children}
    </button>
  );
};
