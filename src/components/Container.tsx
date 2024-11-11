import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = (props: Readonly<ContainerProps>) => {
  return (
    <div
      className={`container p-4 mx-auto ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
};
