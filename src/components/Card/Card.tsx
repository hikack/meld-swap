import clsx from "clsx";
import classes from "./Card.module.scss";

interface Props {
  className?: string;
}

export const Card: React.FC<Props> = ({ children, className }) => {
  return <div className={clsx(classes.wrapper, className)}>{children}</div>;
};
