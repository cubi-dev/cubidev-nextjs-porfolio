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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image, { StaticImageData } from "next/image";
import AboutSectionImage from "@/../public/about-section/about_section_image.png";

const DialogEditAboutImage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(AboutSectionImage);
  //
  const [tempImagePreviewUrl, setTempImagePreviewUrl] = useState(imagePreviewUrl);
  //

  // Hàm xử lý khi file ảnh được chọn
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Kiểm tra và cập nhật URL ảnh để hiển thị
        if (typeof reader.result === "string") {
          setTempImagePreviewUrl(reader.result as unknown as StaticImageData);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    setImagePreviewUrl(tempImagePreviewUrl); 
    setIsDialogOpen(false); // Đóng dialog
  };

  useEffect(() => {
    if (isDialogOpen) {
      setTempImagePreviewUrl(imagePreviewUrl);
    }
  }, [imagePreviewUrl, isDialogOpen]);

  return (
    <>
      <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
        <Image
          src={imagePreviewUrl}
          width={0}
          height={0}
          alt="Fullpose of Sagar"
          className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
          style={{ objectFit: "cover" }}
        ></Image>
        <div className="absolute z-40 top-[5%] left-[75%] md:left-[85%] right-0">
          <Button
            variant={"ghost"}
            size={"icon"}
            className="rounded-full bg-white"
            onClick={() => setIsDialogOpen(true)}
          >
            <Pencil className="text-blue-700" />
          </Button>
        </div>
        <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit About Image</DialogTitle>
            <DialogDescription>
              Edit your about image to introduce yourself to your visitors.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="about_image">About image</Label>
              <Input
                id="about_image"
                type="file"
                onChange={handleImageChange}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleSaveChanges}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogEditAboutImage;
