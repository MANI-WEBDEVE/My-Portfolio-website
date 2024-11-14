import React from "react";
import clsx from "clsx";
interface BoundedProp {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

const Bounded = React.forwardRef<HTMLDivElement, BoundedProp>(
  ({ as: Comp = "section", className, children, ...restProps }, ref) => {
    return (
      <Comp
        ref={ref}
        className={clsx("px-12 py-10 md:px-16 md:py-14 lg:py-16")}
        {...restProps}
      >
        <div className="mx-auto w-full max-w-7xl">{children} </div>
      </Comp>
    );
  }
);

Bounded.displayName = "Bounded";
export default Bounded;
