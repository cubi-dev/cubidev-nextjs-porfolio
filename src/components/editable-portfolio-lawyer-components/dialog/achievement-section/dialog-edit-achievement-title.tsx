import CustomOutlineDiv from "@/components/general/custom-outline-div";
import Typography from "@/components/general/typography";
import React, { useState, useEffect } from "react";
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
import { Input } from "@/components/ui/input";
import { DialogEditAchievementTitleProps } from "@/lib/types";
import { Label } from "@/components/ui/label";

const DialogEditAchievementTitle: React.FC<DialogEditAchievementTitleProps> = ({
  message = "",
  setMessage,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [tempMessage, setTempMessage] = useState(message);

  const handleSaveChanges = () => {
    if (setMessage) {
      setMessage(tempMessage);
    }
    setIsDialogOpen(false);
  };

  useEffect(() => {
    if (isDialogOpen) {
      setTempMessage(message);
    }
  }, [isDialogOpen, message]);

  return (
    <>
      <CustomOutlineDiv className="outline-white flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-y-3">
          <Button
            variant={"ghost"}
            size={"icon"}
            className="rounded-full p-0 bg-white text-black"
            onClick={() => setIsDialogOpen(true)}
          >
            <Pencil />
          </Button>
          <Typography variant="body1" className="text-center text-white">
            {message}
          </Typography>
        </div>
      </CustomOutlineDiv>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Achievement Message</DialogTitle>
            <DialogDescription>
              Edit your achievement message.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="achievement_message">Achievement Message</Label>
              <Input
                type="text"
                id="achievement_message"
                placeholder={"Input your achievement message"}
                value={tempMessage}
                onChange={(e) => setTempMessage(e.target.value)}
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

export default DialogEditAchievementTitle;
