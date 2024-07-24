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
import { ProjectDetails } from "@/lib/types";
import { InputTags } from "@/components/ui/input-tags";
import { Textarea } from "@/components/ui/textarea";

interface DialogAddProjectProps {
  addProject: (newProject: ProjectDetails) => void;
}

const DialogAddProject: React.FC<DialogAddProjectProps> = ({
  addProject,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [previewImage, setPreviewImage] = useState<string | StaticImageData>(image_placeholder);

  // Hàm xử lý khi file ảnh được chọn
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Kiểm tra và cập nhật URL ảnh để hiển thị
        if (typeof reader.result === "string") {
          setPreviewImage(reader.result as unknown as StaticImageData);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const newProject: ProjectDetails = {
      id: Math.random().toString(36).substr(2, 9),
      name: name,
      url: url,
      description: description,
      previewImage: previewImage, // Giả sử previewImage là ảnh ở chế độ sáng
      technologies: technologies,
    };
    addProject(newProject);
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
            <DialogTitle>Add Experience</DialogTitle>
            <DialogDescription>
              Add your experience to impress your visitors.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="light_image">Logo image</Label>
              <Input
                id="light_image"
                type="file"
                onChange={handleImageChange}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="project_name">Project’s name</Label>
              <Input
                id="project_name"
                type="text"
                placeholder="Input your project name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="project_url">Project link</Label>
              <Input
                id="project_url"
                type="text"
                placeholder="Input your project link"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="project_description">Project’s description</Label>
              <Textarea
                id="project_description"
                placeholder="Input your project description"
                value={description}
                className="h-40"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="technologies">Technology using</Label>
              <InputTags
                id="technologies"
                placeholder="Input your technologies"
                value={technologies}
                onChange={setTechnologies}
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

export default DialogAddProject;
