import { ButtonHTMLAttributes } from "react";
import { AiOutlineSwap } from "react-icons/ai";
import classes from "./SwapIcon.module.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const SwapIcon: React.FC<Props> = (props) => {
  return (
    <button className={classes.wrapper} {...props}>
      <AiOutlineSwap className={classes.icon} />
    </button>
  );
};
