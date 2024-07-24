"use client";

import Typography from "@/components/general/typography";
import React, { useEffect, useState } from "react";
import CustomOutlineDiv from "../../ui/custom-outline-div";
import { Button } from "@/components/ui/button";
import { Copyright, Pencil } from "lucide-react";
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

function DialogEditFooterName() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [title, setTitle] = useState(`name`);
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
        <div className="flex items-center justify-center gap-1">
          <Typography variant="body3" className="flex items-center">
            <Copyright className="mr-1 inline-block h-4 w-4" />
            {new Date().getFullYear()} |&nbsp; {title}
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
            <DialogTitle>Edit Footer Name</DialogTitle>
            <DialogDescription>
              Edit your footer name to represent creator.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                placeholder={"Input your footer creator name"}
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

export default DialogEditFooterName;
