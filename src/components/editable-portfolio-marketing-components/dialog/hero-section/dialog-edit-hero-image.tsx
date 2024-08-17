"use client";
import React, { useState, useEffect } from "react";
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
import { HeroSectionProps } from "@/lib/types";
import Typography from "@/components/general/typography";
import { Merriweather } from "next/font/google";
import CustomOutlineDiv from "@/components/general/custom-outline-div";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: "700",
});

const DialogEditHeroImage: React.FC<HeroSectionProps> = ({
  imageProps,
  informationProps,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(imageProps.imageUrl);
  const [tempImagePreviewUrl, setTempImagePreviewUrl] =
    useState(imagePreviewUrl);
  const [tempUserName, setTempUserName] = useState(
    informationProps.userName || ""
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setTempImagePreviewUrl(reader.result as unknown as StaticImageData);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    setImagePreviewUrl(tempImagePreviewUrl);
    if (informationProps.setUserName) {
      informationProps.setUserName(tempUserName);
    }
    setIsDialogOpen(false);
  };

  useEffect(() => {
    if (isDialogOpen) {
      setTempImagePreviewUrl(imagePreviewUrl);
      setTempUserName(informationProps.userName || "");
    }
  }, [imagePreviewUrl, informationProps.userName, isDialogOpen]);

  return (
    <div className="flex items-center justify-center gap-x-5">
      <div className="flex items-center justify-center">
        <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px] lg:h-[650px] lg:w-[650px]">
          <Image
            src={imagePreviewUrl}
            alt="User image hero section"
            width={0}
            height={0}
            className="absolute z-10 h-[280px] w-[240px] md:left-0 md:top-0 md:w-full md:h-full"
            style={{ objectFit: "cover" }}
          ></Image>
          <div className="absolute z-20 top-[5%] left-[5%] right-0">
            <Button
              variant={"ghost"}
              size={"icon"}
              className="rounded-full bg-white"
              onClick={() => setIsDialogOpen(true)}
            >
              <Pencil className="text-blue-700 -rotate-90" />
            </Button>
          </div>
          <div className="absolute max-md:-bottom-10 max-md:left-0 max-md:translate-x-[-10%] max-md:translate-y-[10%] md:top-0 md:right-0 md:translate-x-[70%] z-20">
            <div
              className={`${merriweather.className} text-white font-bold text-4xl md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px]`}
            >
              Bonjour, <br /> I’m{" "}
              <CustomOutlineDiv className="inline-block">
                {informationProps.userName}
              </CustomOutlineDiv>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Hero Image and Username</DialogTitle>
            <DialogDescription>
              Edit your hero image and username.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="hero_image">Hero image</Label>
              <Input id="hero_image" type="file" onChange={handleImageChange} />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="user_name">Username</Label>
              <Input
                id="user_name"
                type="text"
                value={tempUserName}
                onChange={(e) => setTempUserName(e.target.value)}
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
    </div>
  );
};

export default DialogEditHeroImage;
