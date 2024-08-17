"use client";
import CustomOutlineDiv from "@/components/general/custom-outline-div";
import Typography from "@/components/general/typography";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HeroSectionProps } from "@/lib/types";
import { Pencil } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";

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
  const [tempMajor, setTempMajor] = useState(informationProps.major || "");

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
    if (informationProps.setMajor) {
      informationProps.setMajor(tempMajor);
    }
    setIsDialogOpen(false);
  };

  useEffect(() => {
    if (isDialogOpen) {
      setTempImagePreviewUrl(imagePreviewUrl);
      setTempUserName(informationProps.userName || "");
      setTempMajor(informationProps.major || "");
    }
  }, [
    imagePreviewUrl,
    informationProps.major,
    informationProps.userName,
    isDialogOpen,
  ]);

  return (
    <>
      <CustomOutlineDiv className="relative">
        <Image
          src={imagePreviewUrl}
          alt="Tiara Andini"
          width={0}
          height={0}
          className="relative z-10 w-full h-full mx-auto max-h-screen"
          style={{
            aspectRatio: "300/400",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div className="relative flex flex-col items-center justify-center z-10 px-4 py-8 bg-white rounded-lg shadow-lg">
          <Typography variant={"h3"} className="dark:text-black">
            {informationProps.userName}
          </Typography>
          <Typography variant={"body1"} className="dark:text-black">
            - {informationProps.major}
          </Typography>
        </div>
        <div className="absolute z-20 top-0 right-0">
          <Button
            variant={"ghost"}
            size={"icon"}
            className="rounded-full bg-white"
            onClick={() => setIsDialogOpen(true)}
          >
            <Pencil className="text-blue-700" />
          </Button>
        </div>
      </CustomOutlineDiv>
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
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="major">Major</Label>
              <Input
                id="major"
                type="text"
                value={tempMajor}
                onChange={(e) => setTempMajor(e.target.value)}
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

export default DialogEditHeroImage;
