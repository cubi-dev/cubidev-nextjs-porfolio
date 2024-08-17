import React from "react";
import { StaticImageData } from "next/image";
import Link from "@/components/navigation/link";
import ImageWrapper from "@/components/general/image-wrapper";

interface LogoProps {
  text?: string;
  logoImage?: string | StaticImageData;
  logoImageDarkMode?: string | StaticImageData;
}

const Logo: React.FC<LogoProps> = ({
  logoImage,
  logoImageDarkMode,
}) => {
  return (
    <div className="flex items-center">
      {logoImage && (
        <Link
          noCustomization
          href={"#logo"}
          className="w-20 overflow-hidden mr-1"
        >
          <ImageWrapper
            src={logoImage}
            srcForDarkMode={logoImageDarkMode}
            alt={"logo image"}
            className="w-full h-full object-cover"
          />
        </Link>
      )}
    </div>
  );
};

export default Logo;
