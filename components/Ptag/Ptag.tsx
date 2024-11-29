import { PtagProps } from "./Ptag.Props";
import styles from "./Ptag.module.css";
import cn from "classnames";

export const Ptag = ({ size = "s", children }: PtagProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, {
        [styles[size]]: size,
      })}
    >
      {children}
    </p>
  );
};
