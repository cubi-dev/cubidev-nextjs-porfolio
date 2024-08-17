/* eslint-disable react/no-unescaped-entities */
import Card from "@/components/general/card";
import Typography from "@/components/general/typography";
import { Button } from "@/components/ui/button";
import { TestimonialDetails } from "@/lib/types";
import { Pencil } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import image_placeholder from "@/../public/portfolio-dev/testimonial-section/avatar-dummy.svg";
import React, { useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { SliderMainItem } from "@/components/ui/carousel-extend";

const TestimonialDetail = ({
  id,
  personName,
  personAvatar,
  testimonial,
  title,
  editTestimonial,
  deleteTestimonial,
}: TestimonialDetails & {
  editTestimonial: (updatedTestimonial: TestimonialDetails) => void;
  deleteTestimonial: (id: string) => void;
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [personNameInput, setPersonNameInput] = useState(personName);
  const [personAvatarInput, setPersonAvatarInput] = useState<
    string | StaticImageData
  >(personAvatar || image_placeholder);
  const [titleInput, setTitleInput] = useState(title);
  const [testimonialInput, setTestimonialInput] = useState(testimonial);

  // Hàm xử lý khi file ảnh được chọn
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Kiểm tra và cập nhật URL ảnh để hiển thị
        if (typeof reader.result === "string") {
          setPersonAvatarInput(reader.result as unknown as StaticImageData);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Xử lý khi nhấn Save changes
  const handleSaveChanges = () => {
    const updatedTestimonial = {
      id: id,
      personAvatar: personAvatarInput, // Giả sử personAvatar là ảnh ở chế độ sáng
      personName: personNameInput,
      testimonial: testimonialInput,
      title: titleInput,
    };
    editTestimonial(updatedTestimonial);
    setIsDialogOpen(false);
  };

  // Xử lý khi nhấn Delete
  const handleDelete = () => {
    deleteTestimonial(id);
    setIsDialogOpen(false);
  };

  return (
    <>
      <SliderMainItem className="bg-transparent">
        <div className="flex flex-col items-center justify-center">
          <Button
            variant={"ghost"}
            size={"icon"}
            className="rounded-full p-0"
            onClick={() => setIsDialogOpen(true)}
          >
            <Pencil />
          </Button>
          <div className="space-y-10">
            <Typography className="text-center">
              &quot;{testimonial}&quot;
            </Typography>
            <div className="flex w-full items-center flex-row justify-center gap-1">
              <div>
                <Image
                  src={personAvatar!}
                  width={0}
                  height={0}
                  alt={`${personName} avatar`}
                  className="w-10 h-10 md:w-20 md:h-20 rounded-full "
                ></Image>
              </div>
              <div>
                <Typography
                  variant="subtitle"
                  className="w-full text-center font-semibold text-gray-900"
                >
                  {personName}
                </Typography>
                <Typography variant="body3" className="w-full text-center">
                  {title}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </SliderMainItem>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Testimonial</DialogTitle>
            <DialogDescription>
              Edit your testimonial to impress your visitors.
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
                value={personNameInput}
                onChange={(e) => setPersonNameInput(e.target.value)}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="person_major">Person's major / position</Label>
              <Input
                id="person_major"
                type="text"
                placeholder="Input your person major or position"
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="person_major">Testimonial</Label>
              <Textarea
                id="person_major"
                placeholder="Input your person's testimonial about your work"
                value={testimonialInput}
                className="h-40"
                onChange={(e) => setTestimonialInput(e.target.value)}
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

export default TestimonialDetail;
