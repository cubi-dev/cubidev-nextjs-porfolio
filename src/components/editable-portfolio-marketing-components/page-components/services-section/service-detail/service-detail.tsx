"use client";
import React, { useState } from "react";
import { ServiceDetails } from "@/lib/types";
import IconButton from "@/components/general/icon-button";
import { MoveRight, Pencil } from "lucide-react";
import Card from "@/components/general/card";
import { Button } from "@/components/ui/button";
import Typography from "@/components/general/typography";
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

const ServiceDetail = ({
  id,
  title,
  description,
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

  const handleSaveChanges = () => {
    const updatedService: ServiceDetails = {
      id,
      title: titleInput,
      description: descriptionInput,
      link: linkInput,
    };
    editService(updatedService);
    setIsDialogOpen(false);
  };

  const handleDelete = () => {
    deleteService(id);
  };

  return (
    <>
      <Card className="rounded-none mx-auto flex flex-col items-center p-8 group">
        <Button
          variant={"ghost"}
          size={"icon"}
          className="rounded-full p-0"
          onClick={() => setIsDialogOpen(true)}
        >
          <Pencil />
        </Button>
        <div className="flex flex-col space-y-10">
          <Typography variant="h3" className="leading-relaxed md:text-2xl">
            {title}
          </Typography>
          <div className="relative overflow-hidden max-h-14 transition-all duration-5000 ease-in-out group-hover:max-h-screen opacity-50 group-hover:opacity-100">
            <Typography className="leading-relaxed">{description}</Typography>
          </div>
          <div
            className="flex items-center justify-between cursor-pointer group"
            onClick={() => window.open(link, "_blank")}
          >
            <Typography
              variant="body1"
              className="font-bold cursor-pointer group"
            >
              Read more
            </Typography>
            <IconButton className="transform transition-transform duration-300 group-hover:translate-x-2">
              <MoveRight />
            </IconButton>
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
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="service_link">Link</Label>
              <Input
                id="service_link"
                type="text"
                value={linkInput}
                onChange={(e) => setLinkInput(e.target.value)}
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
