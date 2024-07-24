"use client";

import Typography from "@/components/general/typography";
import React, { useEffect, useState } from "react";
import CustomOutlineDiv from "@/components/editable-portfolio-components/ui/custom-outline-div";
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

function DialogEditTestimonialTitle() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [title, setTitle] = useState(`Nice things people have said about me:`);
  const [tempTitle, setTempTitle] = useState(title);

  const handleSaveChanges = () => {
    setTitle(tempTitle); // Cập nhật title từ tempTitle
    setIsDialogOpen(false); // Đóng dialog
  };

  useEffect(() => {
    if (isDialogOpen) {
      setTempTitle(title);
    }
  }, [isDialogOpen, title]);

  return (
    <>
      <CustomOutlineDiv>
        <div className="flex items-center gap-x-3">
        <Typography
          variant="subtitle"
          className="max-w-xl text-center break-words whitespace-pre-wrap"
        >
          {title}
        </Typography>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="rounded-full p-0"
            onClick={() => setIsDialogOpen(true)}
          >
            <Pencil />
          </Button>
        </div>
      </CustomOutlineDiv>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Testimonial Title</DialogTitle>
            <DialogDescription>
              Edit your testimonial title to represent what your client talking about you include your talent and skill.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="testimonial_title">Testimonial Title</Label>
              <Input
                type="text"
                id="testimonial_title"
                placeholder={"Input your title of testimonial section"}
                value={tempTitle}
                onChange={(e) => setTempTitle(e.target.value)}
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
}

export default DialogEditTestimonialTitle;
