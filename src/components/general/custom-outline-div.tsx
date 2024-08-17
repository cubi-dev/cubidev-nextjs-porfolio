import React from "react";
import { mergeClasses } from '@/lib/utils';

interface CustomOutlineDivProps {
  children?: React.ReactNode;
  className?: string;
}

const CustomOutlineDiv: React.FC<CustomOutlineDivProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={mergeClasses("outline-dashed outline-2 outline-offset-2", className)} {...props}>
      {children}
    </div>
  );
};

export default CustomOutlineDiv;