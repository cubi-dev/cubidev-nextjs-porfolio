"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
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
import { DialogEditContactDetailProps } from "@/lib/types";

const DialogEditContactDetail: React.FC<DialogEditContactDetailProps> = ({
  email = "",
  setEmail,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [tempEmail, setTempEmail] = useState(email);

  const handleSaveChanges = () => {
    if (setEmail) setEmail(tempEmail);
    setIsDialogOpen(false);
  };

  useEffect(() => {
    if (isDialogOpen) {
      setTempEmail(email);
    }
  }, [isDialogOpen, email]);

  return (
    <>
      <Button
        variant={"default"}
        size={"icon"}
        className="rounded-full"
        onClick={() => setIsDialogOpen(true)}
      >
        <Pencil />
      </Button>
      <Typography variant="body1" className="text-white font-bold">
        {email}
      </Typography>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Contact Detail</DialogTitle>
            <DialogDescription>
              Edit your contact detail to get in touch with your visitors.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="text"
                id="email"
                placeholder={"Input your email of contact section"}
                value={tempEmail}
                onChange={(e) => setTempEmail(e.target.value)}
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

export default DialogEditContactDetail;
