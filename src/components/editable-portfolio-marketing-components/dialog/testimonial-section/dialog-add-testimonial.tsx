/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
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
import image_placeholder from "@/../public/portfolio-dev/testimonial-section/avatar-dummy.svg";
import { TestimonialDetails } from "@/lib/types";
import { Textarea } from "@/components/ui/textarea";

interface DialogAddTestimonialProps {
  addTestimonial: (newTestimonial: TestimonialDetails) => void;
}

const DialogAddTestimonial: React.FC<DialogAddTestimonialProps> = ({
  addTestimonial,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [personName, setPersonName] = useState("");
  const [personAvatar, setPersonAvatar] = useState<string | StaticImageData>(image_placeholder);
  const [title, setTitle] = useState("");
  const [testimonial, setTestimonial] = useState("");

  // Hàm xử lý khi file ảnh được chọn
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Kiểm tra và cập nhật URL ảnh để hiển thị
        if (typeof reader.result === "string") {
          setPersonAvatar(reader.result as unknown as StaticImageData);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const newTestimonial: TestimonialDetails = {
      id: Math.random().toString(36).substr(2, 9),
      personAvatar: personAvatar, // Giả sử personAvatar là ảnh ở chế độ sáng
      personName: personName,
      testimonial: testimonial,
      title: title,
    };
    addTestimonial(newTestimonial);
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
            <DialogTitle>Add Testimonial</DialogTitle>
            <DialogDescription>
              Add your testimonial to impress your visitors.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="avatar_image">Avatar image</Label>
              <Input
                id="avatar_image"
                type="file"
                onChange={handleImageChange}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="person_name">Person's name</Label>
              <Input
                id="person_name"
                type="text"
                placeholder="Input your person name"
                value={personName}
                onChange={(e) => setPersonName(e.target.value)}
                className="z-50"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="person_major">Person's major / position</Label>
              <Input
                id="person_major"
                type="text"
                placeholder="Input your person major or position"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="person_major">Testimonial</Label>
              <Textarea
                id="person_major"
                placeholder="Input your person's testimonial about your work"
                value={testimonial}
                className="h-40"
                onChange={(e) => setTestimonial(e.target.value)}
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

export default DialogAddTestimonial;
