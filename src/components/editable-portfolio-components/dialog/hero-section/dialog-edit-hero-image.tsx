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
import HeroSecionImage from "@/../public/hero-section/hero_section_image.png";

const DialogEditHeroImage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(HeroSecionImage);
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
        if (typeof reader.result === 'string') {
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
    <div className="flex items-center justify-center gap-x-5">
      <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
        <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
          <Image
            src={imagePreviewUrl}
            width={0}
            height={0}
            alt="User image hero section"
            className="absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
            style={{ objectFit: "cover" }}
          ></Image>
          <div className="absolute z-20 top-[5%] left-[70%] right-0">
            <Button
              variant={"ghost"}
              size={"icon"}
              className="rounded-full bg-white"
              onClick={() => setIsDialogOpen(true)}
            >
              <Pencil className="text-blue-700" />
            </Button>
          </div>
          <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
        </div>
      </div>
      {/* Dialog Edit image */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Hero Image</DialogTitle>
            <DialogDescription>
              Edit your hero image to introduce yourself to your visitors.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="hero_image">Hero image</Label>
              <Input id="hero_image" type="file" onChange={handleImageChange} />
            </div>
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

export default DialogEditHeroImage;
