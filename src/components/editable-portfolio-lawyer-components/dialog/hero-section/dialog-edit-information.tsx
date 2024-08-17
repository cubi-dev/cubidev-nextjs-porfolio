"use client";
import CustomOutlineDiv from "@/components/general/custom-outline-div";
import Typography from "@/components/general/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DialogEditHeroInformationProps } from "@/lib/types";
import { Pencil } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import React, { useEffect, useState } from "react";

const playFairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
});

const DialogEditInformation: React.FC<DialogEditHeroInformationProps> = ({
  availableStatus,
  setAvailableStatus,
  message,
  setMessage,
  description,
  setDescription,
  emailLink,
  setEmailLink,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [tempAvailableStatus, setTempAvailableStatus] = useState(
    availableStatus || ""
  );
  const [tempMessage, setTempMessage] = useState(message || "");
  const [tempDescription, setTempDescription] = useState(description || "");
  const [tempEmailLink, setTempEmailLink] = useState(emailLink || "");

  const handleSaveChanges = () => {
    if (
      setDescription === undefined ||
      setAvailableStatus === undefined ||
      setMessage === undefined ||
      setEmailLink === undefined
    ) {
      return;
    }
    setDescription(tempDescription);
    setAvailableStatus(tempAvailableStatus);
    setMessage(tempMessage);
    setEmailLink(tempEmailLink);
    setIsDialogOpen(false);
  };

  useEffect(() => {
    if (isDialogOpen) {
      setTempAvailableStatus(availableStatus || "");
      setTempMessage(message || "");
      setTempDescription(description || "");
      setTempEmailLink(emailLink || "");
    }
  }, [availableStatus, description, emailLink, isDialogOpen, message]);

  return (
    <>
      <CustomOutlineDiv>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="rounded-full bg-white mb-3"
          onClick={() => setIsDialogOpen(true)}
        >
          <Pencil className="text-blue-700" />
        </Button>
        <div className="space-y-4 lg:space-y-6 z-10">
          <div className="inline-flex space-x-3 items-center bg-[#E7F6FF] p-2 rounded-full">
            <Badge
              className="px-4 py-2 text-sm font-medium bg-[#193E6C] text-white border-transparent hover:bg-[#193E6C]/80"
            >
              New
            </Badge>
            <p className="text-sm text-[#193E6C]">
              {availableStatus}
            </p>
          </div>
          <Typography
            variant={"h1"}
            className={`${playFairDisplay.className} text-[#094B72] dark:text-white`}
          >
            {message}
          </Typography>
          {/* description */}
          <p className="text-lg text-muted-foreground">
            {description}
          </p>
          <Button
            className="p-10 bg-[#094B72] text-white hover:bg-[#094B72]/90"
            onClick={() => window.open(`mailto:${emailLink}`, "_blank")}
          >
            GET STARTED
          </Button>
        </div>
      </CustomOutlineDiv>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Hero Section Information</DialogTitle>
            <DialogDescription>
              Edit your hero section information text to introduce your self.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="available_status">Available Status</Label>
              <Input
                id="available_status"
                type="text"
                value={tempAvailableStatus}
                onChange={(e) => setTempAvailableStatus(e.target.value)}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="instagram_link">Message</Label>
              <Input
                id="instagram_link"
                type="text"
                value={tempMessage}
                onChange={(e) => setTempMessage(e.target.value)}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="hero_description">Description</Label>
              <Textarea
                id="hero_description"
                className="h-40"
                value={tempDescription}
                onChange={(e) => setTempDescription(e.target.value)}
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="phone_link">Email Link Button</Label>
              <Input
                id="phone_link"
                type="text"
                value={tempEmailLink}
                onChange={(e) => setTempEmailLink(e.target.value)}
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

export default DialogEditInformation;
