"use client";

import type { TechDetails } from "@/lib/types";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import ImageWrapper from "@/components/general/image-wrapper";
import CustomOutlineDiv from "@/components/general/custom-outline-div";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { StaticImageData } from "next/image";

const TechDetails = ({
  id,
  url,
  logo,
  darkModeLogo,
  label,
  editTechnology,
  deleteTechnology,
}: TechDetails & {
  editTechnology: (updatedTechnology: TechDetails) => void;
  deleteTechnology: (label: string) => void;
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [skillName, setSkillName] = useState(label);
  const [skillUrl, setSkillUrl] = useState(url);
  const [imageLightModePreviewUrl, setImageLightModePreviewUrl] = useState<
    string | StaticImageData
  >(logo);

  // Hàm xử lý khi file ảnh được chọn
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Kiểm tra và cập nhật URL ảnh để hiển thị
        if (typeof reader.result === "string") {
          setImageLightModePreviewUrl(
            reader.result as unknown as StaticImageData
          );
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Xử lý khi nhấn Save changes
  const handleSaveChanges = () => {
    const updatedTechnology = {
      id: id,
      url: skillUrl,
      logo: imageLightModePreviewUrl,
      darkModeLogo,
      label: skillName,
    };
    editTechnology(updatedTechnology);
    setIsDialogOpen(false);
  };

  // Xử lý khi nhấn Delete
  const handleDelete = () => {
    deleteTechnology(label);
    setIsDialogOpen(false);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <Button
          variant={"ghost"}
          size={"icon"}
          className="rounded-full p-0"
          onClick={() => setIsDialogOpen(true)}
        >
          <Pencil />
        </Button>
        <CustomOutlineDiv>
          <Link noCustomization href={url} externalLink>
            <ImageWrapper
              src={logo}
              srcForDarkMode={darkModeLogo}
              alt={label}
              className="transition-transform duration-300 md:hover:scale-110"
            />
          </Link>
          <Typography variant="body1">{label}</Typography>
        </CustomOutlineDiv>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Skill Information</DialogTitle>
            <DialogDescription>
              Edit your skill information to represent what you good at.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="skill_name">Skill’s name</Label>
              <Input
                id="skill_name"
                type="text"
                placeholder="Input your skill name"
                value={skillName}
                onChange={(e) => setSkillName(e.target.value)}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="skill_url">Skill’s link</Label>
              <Input
                id="skill_url"
                type="text"
                placeholder="Input your skill name"
                value={skillUrl}
                onChange={(e) => setSkillUrl(e.target.value)}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="light_image">Logo image</Label>
              <Input
                id="light_image"
                type="file"
                placeholder={imageLightModePreviewUrl as string}
                onChange={handleImageChange}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              variant={"destructive"}
              onClick={handleDelete}
            >
              Delete
            </Button>
            <Button type="submit" onClick={handleSaveChanges}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TechDetails;
