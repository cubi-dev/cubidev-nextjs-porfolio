"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomOutlineDiv from "@/components/general/custom-outline-div";
import Logo from "@/components/editable-portfolio-marketing-components/ui/logo";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { LogoPortfolio } from "@/lib/types";
import { StaticImageData } from "next/image";

interface DialogEditLogoProps {
  isDialogOpen: boolean;
  setIsDialogOpen: (isOpen: boolean) => void;
  logo: LogoPortfolio;
  setLogo: (image: LogoPortfolio) => void;
}

const DialogEditLogo: React.FC<DialogEditLogoProps> = ({
  isDialogOpen,
  logo,
  setIsDialogOpen,
  setLogo,
}) => {
  const [tempLogoImage, setTempLogoImage] = useState<string | StaticImageData>(
    logo.logoImage || ""
  );
  const handleSaveChanges = () => {
    const updatedLogo = {
      ...logo,
      logoImage: tempLogoImage,
      logoImageDarkMode: tempLogoImage,
    };
    setLogo(updatedLogo);
    setIsDialogOpen(false); // Đóng dialog
  };

  useEffect(() => {
    if (isDialogOpen) {
      setTempLogoImage(logo.logoImage || "");
    }
  }, [isDialogOpen, logo]);

  // Hàm xử lý khi file ảnh được chọn
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Kiểm tra và cập nhật URL ảnh để hiển thị
        if (typeof reader.result === "string") {
          setTempLogoImage(reader.result as unknown as StaticImageData);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center justify-center gap-x-5">
      <CustomOutlineDiv>
        <Logo
          text={logo.logoText || ""}
          logoImage={logo.logoImage}
          logoImageDarkMode={logo.logoImageDarkMode}
        />
      </CustomOutlineDiv>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={() => setIsDialogOpen(true)}
        >
          <Pencil />
        </Button>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Logo</DialogTitle>
            <DialogDescription>
              Edit your logo image to represent your self.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="light_image">Logo image</Label>
                <Input
                  id="light_image"
                  type="file"
                  onChange={handleImageChange}
                />
              </div>
            </>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleSaveChanges}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogEditLogo;
