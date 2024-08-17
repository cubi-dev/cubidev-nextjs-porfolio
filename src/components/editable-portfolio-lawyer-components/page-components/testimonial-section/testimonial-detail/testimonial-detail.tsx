/* eslint-disable react/no-unescaped-entities */
import Typography from "@/components/general/typography";
import { Card, CardContent } from "@/components/ui/card";
import { TestimonialDetails } from "@/lib/types";
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
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

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
      <div className="flex flex-col items-center justify-center space-y-10">
        <Card className="p-8 shadow-lg rounded-lg bg-white relative max-w-lg mx-auto h-full group flex flex-col items-center justify-center">
          <Button
            variant={"ghost"}
            size={"icon"}
            className="rounded-full p-0"
            onClick={() => setIsDialogOpen(true)}
          >
            <Pencil />
          </Button>
          <CardContent className="text-center text-gray-700 h-full overflow-hidden">
            <div className="relative">
              <p className="text-black overflow-hidden transition-all duration-5000 ease-in-out group-hover:max-h-screen opacity-50 group-hover:opacity-100 max-w-lg">
                &quot;{testimonial}&quot;
              </p>
              <div
                className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none
            group-hover:opacity-100 group-hover:hidden
            "
              ></div>
            </div>
          </CardContent>
          {/* Tail */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-6 w-6 bg-white rotate-45 shadow-lg"
            style={{ marginBottom: "-12px" }}
          />
        </Card>
        <div className="flex w-full items-center flex-row justify-center gap-1">
          <div>
            <Image
              src={personAvatar!}
              width={0}
              height={0}
              alt={`avatar`}
              className="w-10 h-10 rounded-full "
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
