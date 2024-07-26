/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MapPin, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomOutlineDiv from "../../ui/custom-outline-div";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Typography from "@/components/general/typography";
import { SOCIAL_LINKS } from "@/lib/data";
import IconButton from "@/components/general/icon-button";
import { Textarea } from "@/components/ui/textarea";
import { DialogEditHeroInformationProps } from "@/lib/types";

const DialogEditHeroInformation: React.FC<DialogEditHeroInformationProps> = ({
  userName,
  setUserName,
  description,
  setDescription,
  country,
  setCountry,
  city,
  setCity,
  availableStatus,
  setAvailableStatus,
  githubLink,
  setGithubLink,
  twitterLink,
  setTwitterLink,
  figmaLink,
  setFigmaLink,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // const [userName, setUserName] = useState(`UserName`);
  // const [description, setDescription] = useState(
  //   `I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.`
  // );
  // const [country, setCountry] = useState(`VietNam`);
  // const [city, setCity] = useState(`Ho Chi Minh`);
  // const [availableStatus, setAvailableStatus] = useState(
  //   `Available for new projects`
  // );
  // const [githubLink, setGithubLink] = useState(
  //   SOCIAL_LINKS.find((link) => link.displayName === "Github")?.url || ""
  // );
  // const [twitterLink, setTwitterLink] = useState(
  //   SOCIAL_LINKS.find((link) => link.displayName === "Twitter")?.url || ""
  // );
  // const [figmaLink, setFigmaLink] = useState(
  //   SOCIAL_LINKS.find((link) => link.displayName === "Figma")?.url || ""
  // );
  // Cập nhật SOCIAL_LINKS dựa trên state
  const updatedSocialLinks = SOCIAL_LINKS.map((link) => {
    switch (link.displayName) {
      case "Github":
        return { ...link, url: githubLink };
      case "Twitter":
        return { ...link, url: twitterLink };
      case "Figma":
        return { ...link, url: figmaLink };
      default:
        return link;
    }
  });
  //
  const [tempUserName, setTempUserName] = useState(userName);
  const [tempDescription, setTempDescription] = useState(description);
  const [tempCountry, setTempCountry] = useState(country);
  const [tempCity, setTempCity] = useState(city);
  const [tempAvailableStatus, setTempAvailableStatus] =
    useState(availableStatus);
  const [tempGithubLink, setTempGithubLink] = useState(githubLink);
  const [tempTwitterLink, setTempTwitterLink] = useState(twitterLink);
  const [tempFigmaLink, setTempFigmaLink] = useState(figmaLink);
  //
  const handleSaveChanges = () => {
    if (
      setUserName === undefined ||
      setDescription === undefined ||
      setCountry === undefined ||
      setCity === undefined ||
      setAvailableStatus === undefined ||
      setGithubLink === undefined ||
      setTwitterLink === undefined ||
      setFigmaLink === undefined
    ) {
      return;
    }
    setUserName(tempUserName);
    setDescription(tempDescription);
    setCountry(tempCountry);
    setCity(tempCity);
    setAvailableStatus(tempAvailableStatus);
    setGithubLink(tempGithubLink);
    setTwitterLink(tempTwitterLink);
    setFigmaLink(tempFigmaLink);
    setIsDialogOpen(false); // Đóng dialog
  };

  useEffect(() => {
    if (isDialogOpen) {
      setTempUserName(userName);
      setTempDescription(description);
      setTempCountry(country);
      setTempCity(city);
      setTempAvailableStatus(availableStatus);
      setTempGithubLink(githubLink);
      setTempTwitterLink(twitterLink);
      setTempFigmaLink(figmaLink);
    }
  }, [
    availableStatus,
    city,
    country,
    description,
    figmaLink,
    githubLink,
    isDialogOpen,
    twitterLink,
    userName,
  ]);

  return (
    <>
      <CustomOutlineDiv>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <Button
            variant={"default"}
            size={"icon"}
            className="rounded-full"
            onClick={() => setIsDialogOpen(true)}
          >
            <Pencil />
          </Button>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Hero Section Information</DialogTitle>
              <DialogDescription>
                Edit your hero section information text to introduce your self.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {/* User name */}
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder={"Type your name"}
                  value={tempUserName}
                  onChange={(e) => setTempUserName(e.target.value)}
                />
              </div>
              {/* Description */}
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder={"Type your description"}
                  value={tempDescription}
                  onChange={(e) => setTempDescription(e.target.value)}
                />
              </div>
              {/* Available Status */}
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="available_status">Available Status</Label>
                <Input
                  type="text"
                  id="available_status"
                  placeholder={"Type your available status"}
                  value={tempAvailableStatus}
                  onChange={(e) => setTempAvailableStatus(e.target.value)}
                />
              </div>
              {/* City */}
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="city">City</Label>
                <Input
                  type="text"
                  id="city"
                  placeholder={"Input your city"}
                  value={tempCity}
                  onChange={(e) => setTempCity(e.target.value)}
                />
              </div>
              {/* Country/Region  */}
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="country">Country/Region</Label>
                <Input
                  type="text"
                  id="country"
                  placeholder={"Input your country/region"}
                  value={tempCity}
                  onChange={(e) => setTempCity(e.target.value)}
                />
              </div>
              {/* GitHub */}
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="github_link">GitHub</Label>
                <Input
                  type="text"
                  id="github_link"
                  placeholder="GitHub Link"
                  value={tempGithubLink}
                  onChange={(e) => setTempGithubLink(e.target.value)}
                />
              </div>
              {/* Twitter */}
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="twitter_link">Twitter</Label>
                <Input
                  type="text"
                  id="twitter_link"
                  placeholder="Twitter Link"
                  value={tempTwitterLink}
                  onChange={(e) => setTempTwitterLink(e.target.value)}
                />
              </div>
              {/* Figma */}
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="figma_link">Figma</Label>
                <Input
                  type="text"
                  id="figma_link"
                  placeholder="Figma Link"
                  value={tempFigmaLink}
                  onChange={(e) => setTempFigmaLink(e.target.value)}
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
        <div className="flex flex-col gap-2">
          <Typography variant="h1" className="break-words whitespace-pre-wrap">
            {"Hi, I'm " + userName}{" "}
            <span className="inline-block animate-waving-hand">👋</span>
          </Typography>
          <Typography className="max-w-xl break-words whitespace-pre-wrap">
            {description}
          </Typography>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <MapPin className="stroke-gray-600" />
            <Typography>
              {city}, {country}
            </Typography>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
              </span>
            </div>
            <Typography className="max-w-xl break-words whitespace-pre-wrap">
              {availableStatus}
            </Typography>
          </div>
        </div>
        <div className="flex gap-1">
          {updatedSocialLinks.map((socialLink, index) => (
            <IconButton
              key={index}
              onClick={() => window.open(socialLink.url, "_blank")}
            >
              <socialLink.icon />
            </IconButton>
          ))}
        </div>
      </CustomOutlineDiv>
    </>
  );
};

export default DialogEditHeroInformation;
