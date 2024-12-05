import { HeaderProps } from "./Header.props";
// import styles from "./Header.module.css";

import React from "react";

export const Header = ({ ...props }: HeaderProps) => {
  return <div {...props}>Header</div>;
};
