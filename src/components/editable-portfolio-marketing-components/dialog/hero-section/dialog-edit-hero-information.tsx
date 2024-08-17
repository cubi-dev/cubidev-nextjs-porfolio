import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { DialogEditHeroInformationProps } from "@/lib/types";
import CustomOutlineDiv from "@/components/general/custom-outline-div";
import { Textarea } from "@/components/ui/textarea";
import { Pencil } from "lucide-react";
import { SOCIAL_LINKS_MARKETING } from "@/lib/data";

const DialogEditHeroInformation: React.FC<DialogEditHeroInformationProps> = ({
  description,
  setDescription,
  facebookLink,
  setFacebookLink,
  instagramLink,
  setInstagramLink,
  phoneLink,
  setPhoneLink,
  twitterLink,
  setTwitterLink,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [tempDescription, setTempDescription] = useState(description || "");
  const [tempFacebookLink, setTempFacebookLink] = useState(facebookLink || "");
  const [tempInstagramLink, setTempInstagramLink] = useState(
    instagramLink || ""
  );
  const [tempPhoneLink, setTempPhoneLink] = useState(phoneLink || "");
  const [tempTwitterLink, setTempTwitterLink] = useState(twitterLink || "");

  // Cập nhật SOCIAL_LINKS dựa trên state
  const updatedSocialLinks = SOCIAL_LINKS_MARKETING.map((link) => {
    switch (link.displayName) {
      case "Facebook":
        return { ...link, url: facebookLink };
      case "Instagram":
        return { ...link, url: instagramLink };
      case "Phone":
        return { ...link, url: phoneLink };
      case "Twitter":
        return { ...link, url: twitterLink };
      default:
        return link;
    }
  });

  const handleSaveChanges = () => {
    if (
      setDescription === undefined ||
      setFacebookLink === undefined ||
      setInstagramLink === undefined ||
      setPhoneLink === undefined ||
      setTwitterLink === undefined
    ) {
      return;
    }
    setDescription(tempDescription);
    setFacebookLink(tempFacebookLink);
    setInstagramLink(tempInstagramLink);
    setPhoneLink(tempPhoneLink);
    setTwitterLink(tempTwitterLink);
    setIsDialogOpen(false);
  };

  useEffect(() => {
    if (isDialogOpen) {
      setTempDescription(description || "");
      setTempFacebookLink(facebookLink || "");
      setTempInstagramLink(instagramLink || "");
      setTempPhoneLink(phoneLink || "");
      setTempTwitterLink(twitterLink || "");
    }
  }, [
    description,
    facebookLink,
    instagramLink,
    isDialogOpen,
    phoneLink,
    twitterLink,
  ]);

  return (
    <div className="flex flex-col md:self-end md:!mt-96">
      <CustomOutlineDiv>
        <Button
          variant={"default"}
          size={"icon"}
          className="rounded-full"
          onClick={() => setIsDialogOpen(true)}
        >
          <Pencil />
        </Button>
        <div className="text-white max-w-sm text-base md:text-lg">
          {description}
        </div>
        <div className="w-full flex items-center justify-between gap-1">
          {updatedSocialLinks.map((socialLink, index) => (
            <Button
              variant={"default"}
              size={"icon"}
              key={index}
              className="bg-transparent text-white"
              onClick={() => window.open(socialLink.url, "_blank")}
            >
              <socialLink.icon />
            </Button>
          ))}
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
              <Label htmlFor="hero_description">Description</Label>
              <Textarea
                id="hero_description"
                className="h-40"
                value={tempDescription}
                onChange={(e) => setTempDescription(e.target.value)}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="facebook_link">Facebook Link</Label>
              <Input
                id="facebook_link"
                type="text"
                value={tempFacebookLink}
                onChange={(e) => setTempFacebookLink(e.target.value)}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="instagram_link">Instagram Link</Label>
              <Input
                id="instagram_link"
                type="text"
                value={tempInstagramLink}
                onChange={(e) => setTempInstagramLink(e.target.value)}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="phone_link">Phone Link</Label>
              <Input
                id="phone_link"
                type="text"
                value={tempPhoneLink}
                onChange={(e) => setTempDescription(e.target.value)}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="twitter_link">Twitter Link</Label>
              <Input
                id="twitter_link"
                type="text"
                value={tempTwitterLink}
                onChange={(e) => setTempTwitterLink(e.target.value)}
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
    </div>
  );
};

export default DialogEditHeroInformation;
