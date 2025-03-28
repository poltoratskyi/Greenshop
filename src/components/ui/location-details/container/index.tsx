import React from "react";
import Style from "./container.module.scss";

interface Props {
  children: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, Props>(
  ({ children }, ref) => {
    return (
      <div ref={ref} className={Style.container}>
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export default Container;
