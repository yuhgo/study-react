import { FC, ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <div className="flex flex-col mx-auto max-w-2xl items-center px-2 min-h-screen">
      {children}
    </div>
  );
};
