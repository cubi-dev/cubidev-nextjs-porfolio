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

function DialogEditAboutTitle() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [title, setTitle] = useState(`Curious about me? Here you have it:`);
  //
  const [tempTitle, setTempTitle] = useState(title);
  //
  const handleSaveChanges = () => {
    setTitle(tempTitle);
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
          <Typography variant="h3">{title}</Typography>
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
            <DialogTitle>Edit About Title</DialogTitle>
            <DialogDescription>
              Edit your about title to represent your self.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="about_title">About Title</Label>
              <Input
                type="text"
                id="about_title"
                placeholder={"Input your title of about section"}
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

export default DialogEditAboutTitle;
