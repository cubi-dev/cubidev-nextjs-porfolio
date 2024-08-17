"use client";
import React, { useState } from "react";
import { ServiceDetails } from "@/lib/types";
import { Button } from "@/components/ui/button";
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
import { Plus } from "lucide-react";
import { StaticImageData } from "next/image";
import default_icon from "@/../public/portfolio-lawyer/services-section/service_section_icon_1.svg";

interface DialogAddServiceProps {
  addService: (newService: ServiceDetails) => void;
}

const DialogAddService: React.FC<DialogAddServiceProps> = ({ addService }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [iconPreviewUrl, setIconPreviewUrl] = useState<
    string | StaticImageData
  >(default_icon);
  const [tempIconPreviewUrl, setTempIconPreviewUrl] = useState(iconPreviewUrl);

  // Hàm xử lý khi file ảnh được chọn
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Kiểm tra và cập nhật URL ảnh để hiển thị
        if (typeof reader.result === "string") {
          setTempIconPreviewUrl(reader.result as unknown as StaticImageData);
          setIconPreviewUrl(reader.result as unknown as StaticImageData); // Cập nhật iconPreviewUrl ngay lập tức
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const newService: ServiceDetails = {
      id: Date.now().toString(),
      title,
      description,
      link,
      icon: iconPreviewUrl,
    };
    addService(newService);
    setIsDialogOpen(false);
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
            <DialogTitle>Add Service</DialogTitle>
            <DialogDescription>
              Add a new service to the list.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="service_icon">Icon</Label>
              <Input
                id="service_icon"
                type="file"
                onChange={handleImageChange}
              />
              <p className="text-sm text-muted-foreground">
                For the best interface you should choose 30x30 icon
              </p>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="service_title">Title</Label>
              <Input
                id="service_title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="service_description">Description</Label>
              <Input
                id="service_description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="service_link">Link</Label>
              <Input
                id="service_link"
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
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

export default DialogAddService;
