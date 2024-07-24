"use client";
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
import { Plus } from "lucide-react";
import { StaticImageData } from "next/image";
import React, { useState } from "react";
import image_placeholder from "@/../public/placeholder_img.svg";
import { TechDetails } from "@/lib/types";

interface DialogAddSkillProps {
  addTechnology: (newTechnology: TechDetails) => void;
}

const DialogAddSkill: React.FC<DialogAddSkillProps> = ({ addTechnology }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [skillName, setSkillName] = useState("");
  const [skillUrl, setSkillUrl] = useState("");
  const [imageLightModePreviewUrl, setImageLightModePreviewUrl] = useState<string | StaticImageData>(image_placeholder);

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

  const handleSubmit = () => {
    const newTechnology: TechDetails = {
      id: Math.random().toString(36).substr(2, 9),
      logo: imageLightModePreviewUrl, // Giả sử logo là ảnh ở chế độ sáng
      label: skillName,
      url: skillUrl,
    };
    addTechnology(newTechnology);
    setIsDialogOpen(false); // Đóng dialog sau khi thêm
  };


  return (
    <div>
      <Button
        variant={"secondary"}
        size={"icon"}
        onClick={() => setIsDialogOpen(true)}
      >
        <Plus />
      </Button>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Skill</DialogTitle>
            <DialogDescription>
              Add your skill to impress your visitors.
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
                onChange={handleImageChange}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleSubmit}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogAddSkill;
