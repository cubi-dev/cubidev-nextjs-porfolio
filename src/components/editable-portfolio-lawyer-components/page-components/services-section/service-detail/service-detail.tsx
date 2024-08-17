"use client";
import Card from "@/components/general/card";
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
import { ServiceDetails } from "@/lib/types";
import { MoveRight, Pencil } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

const playFairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
});

const ServiceDetail = ({
  id,
  title,
  description,
  icon = "",
  link,
  editService,
  deleteService,
}: ServiceDetails & {
  editService: (updatedService: ServiceDetails) => void;
  deleteService: (id: string) => void;
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [titleInput, setTitleInput] = useState(title);
  const [descriptionInput, setDescriptionInput] = useState(description);
  const [linkInput, setLinkInput] = useState(link);
  const [iconPreviewUrl, setIconPreviewUrl] = useState(icon);
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
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    setIconPreviewUrl(tempIconPreviewUrl);
    const updatedService: ServiceDetails = {
      id,
      title: titleInput,
      description: descriptionInput,
      link: linkInput,
      icon: tempIconPreviewUrl,
    };
    editService(updatedService);
    setIsDialogOpen(false);
  };

  const handleDelete = () => {
    deleteService(id);
  };

  return (
    <>
      <Card className="rounded-none mx-auto flex flex-col items-center p-8 group w-full">
        <Button
          variant={"ghost"}
          size={"icon"}
          className="rounded-full p-0"
          onClick={() => setIsDialogOpen(true)}
        >
          <Pencil />
        </Button>
        <div className="flex flex-col space-y-5 w-full">
          <Image src={iconPreviewUrl} alt={title} width={30} height={30} className="w-30 h-30" style={{ width: '30px', height: '30px' }}/>
          <Typography
            variant="h3"
            className={`${playFairDisplay.className} leading-relaxed md:text-2xl`}
          >
            {title}
          </Typography>
          <div className="relative overflow-hidden max-h-14 transition-all duration-5000 ease-in-out group-hover:max-h-screen opacity-50 group-hover:opacity-100">
            <Typography className="leading-relaxed">{description}</Typography>
          </div>
        </div>
      </Card>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Service</DialogTitle>
            <DialogDescription>
              Edit the details of the service.
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
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="service_description">Description</Label>
              <Input
                id="service_description"
                type="text"
                value={descriptionInput}
                onChange={(e) => setDescriptionInput(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="destructive" onClick={handleDelete}>
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

export default ServiceDetail;
