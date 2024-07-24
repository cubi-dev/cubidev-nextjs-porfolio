/* eslint-disable react/no-unescaped-entities */
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
import { Textarea } from "@/components/ui/textarea";

function DialogEditAboutInformation() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [infor, setInfor] = useState(
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  );
  //
  const [tempInfor, setTempInfor] = useState(infor);
  //

  const handleSaveChanges = () => {
    setInfor(tempInfor);
    setIsDialogOpen(false); // Đóng dialog
  };

  useEffect(() => {
    if (isDialogOpen) {
      setTempInfor(infor);
    }
  }, [infor, isDialogOpen]);

  const informationContentFormat = infor.replace(/(?:\r\n|\r|\n)/g, "<br>");

  return (
    <>
      <CustomOutlineDiv>
        <div className="flex items-center gap-x-3">
          {/* <Typography>
            {infor}
          </Typography> */}
          <p
            dangerouslySetInnerHTML={{ __html: informationContentFormat }}
            className="max-w-xl break-words whitespace-pre-wrap"
          ></p>
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
            <DialogTitle>Edit About Information</DialogTitle>
            <DialogDescription>
              Edit your about information to represent your self.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="about_infor">About Information</Label>
              <Textarea
                id="about_infor"
                placeholder={"Input your infor of about section"}
                className="min-h-96"
                value={tempInfor}
                onChange={(e) => setTempInfor(e.target.value)}
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

export default DialogEditAboutInformation;
