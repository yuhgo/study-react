import { FC, ReactNode } from "react";
import { Header } from "./Header";

type AppLayoutProps = {
  children: ReactNode;
};

export const AppLayout: FC<AppLayoutProps> = (props) => {
  const { children } = props;

  return (
    <>
      <div className="flex flex-col mx-auto max-w-2xl items-center px-2 min-h-screen">
        <Header />
        {children}
      </div>
    </>
  );
};
