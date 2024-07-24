import React from 'react';

interface CustomOutlineDivProps {
  children?: React.ReactNode;
}

const CustomOutlineDiv: React.FC<CustomOutlineDivProps> = ({ children }) => {
  return (
    <div className="outline-dashed outline-2 outline-offset-2">
      {children}
    </div>
  );
};

export default CustomOutlineDiv;