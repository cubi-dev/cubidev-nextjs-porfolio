/* eslint-disable react/no-unescaped-entities */
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
import { DialogEditContactTitleProps } from "@/lib/types";
import { Textarea } from "@/components/ui/textarea";

const DialogEditContactTitle: React.FC<DialogEditContactTitleProps> = ({ title = "", setTitle }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [tempTitle, setTempTitle] = useState(title);

  const handleSaveChanges = () => {
    if (setTitle) {
      setTitle(tempTitle);
    }
    setIsDialogOpen(false);
  };

  useEffect(() => {
    if (isDialogOpen) {
      setTempTitle(title);
    }
  }, [isDialogOpen, title]);

  return (
    <>
      <CustomOutlineDiv>
        <div className="flex flex-col gap-y-3">
        <Button
            variant={"default"}
            size={"icon"}
            className="rounded-full"
            onClick={() => setIsDialogOpen(true)}
          >
            <Pencil />
          </Button>
        <Typography variant="body1" className="text-white leading-relaxed">
          {title}
        </Typography>
         
        </div>
      </CustomOutlineDiv>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Contact Title</DialogTitle>
            <DialogDescription>
              Edit your contact title to get in touch with your visitors.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="contact_title">Contact Title</Label>
              <Textarea
                id="contact_title"
                placeholder={"Input your title of contact section"}
                value={tempTitle}
                onChange={(e) => setTempTitle(e.target.value)}
                className="h-40"
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

export default DialogEditContactTitle;