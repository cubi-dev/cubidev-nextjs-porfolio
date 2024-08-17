"use client";

import Typography from "@/components/general/typography";
import React, { useEffect, useState } from "react";
import CustomOutlineDiv from "@/components/general/custom-outline-div";
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
import { DialogEditExperienceTitleProps } from "@/lib/types";

const DialogEditExperienceTitle: React.FC<DialogEditExperienceTitleProps> = ({
  title,
  setTitle,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // const [title, setTitle] = useState(`Here is a quick summary of my most recent experiences:`);
  const [tempTitle, setTempTitle] = useState(title);

  const handleSaveChanges = () => {
    if (setTitle) {
      setTitle(tempTitle); // Cập nhật title từ tempTitle
    }
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
            <DialogTitle>Edit Experience Title</DialogTitle>
            <DialogDescription>
              Edit your experience title to represent what your thought about
              your experiences to impress visitors.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="experience_title">Experience Title</Label>
              <Input
                type="text"
                id="experience_title"
                placeholder={"Input your title of experience section"}
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
};

export default DialogEditExperienceTitle;
