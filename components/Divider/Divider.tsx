
import React from 'react';
import classNames from "classnames";

type DividerProps = {
  width?: string;
  height?: string;
  bgColor?: 'light' | 'dark' | 'black';
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const colorClassMap = {
  light: 'bg-light',
  dark: 'bg-dark',
  black: 'bg-black',
};

const Divider = ({ width, height, children, bgColor, ...rest }: DividerProps) => {
  return (
    <div>
      <div></div>
      {children && <div>{children}</div>}
      <div></div>
    </div>
  )
}

export default Divider;