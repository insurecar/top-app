import { PtagProps } from "./Ptag.Props";
import styles from "./Ptag.module.css";
import cn from "classnames";

export const Ptag = ({ size, children }: PtagProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.l]: size === "l",
      })}
    >
      {children}
    </p>
  );
};
