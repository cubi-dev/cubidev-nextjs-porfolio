import React from "react";
import Typography from "@/components/general/typography";

interface LogoProps {
  text?: string; // Thêm prop text với kiểu dữ liệu là string và là optional
}

const Logo: React.FC<LogoProps> = ({ text = "<LOGO />" }) => {
  return (
    <Typography variant="h3" className="font-bold">
      {text}
    </Typography>
  );
};

export default Logo;