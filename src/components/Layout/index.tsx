import classes from "./Layout.module.css";
import { FC, ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;

  return <div className={classes.container}>{children}</div>;
};
