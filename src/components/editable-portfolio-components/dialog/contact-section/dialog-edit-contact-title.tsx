"use client";

import Typography from "@/components/general/typography";
import React, { useEffect, useState } from "react";
import CustomOutlineDiv from "../../ui/custom-outline-div";
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

function DialogEditContactTitle() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [title, setTitle] = useState(
    `What’s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.`
  );
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
            <DialogTitle>Edit Contact Title</DialogTitle>
            <DialogDescription>
              Edit your contact title to get in touch with your visitors.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="contact_title">Contact Title</Label>
              <Input
                type="text"
                id="contact_title"
                placeholder={"Input your title of contact section"}
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

export default DialogEditContactTitle;
