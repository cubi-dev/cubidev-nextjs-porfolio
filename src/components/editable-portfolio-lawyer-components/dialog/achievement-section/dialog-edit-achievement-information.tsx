"use client";
import CustomOutlineDiv from "@/components/general/custom-outline-div";
import Typography from "@/components/general/typography";
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
import { Separator } from "@/components/ui/separator";
import { DialogEditAchievementInformationProps } from "@/lib/types";
import { Pencil } from "lucide-react";
import React, { useEffect, useState } from "react";

const DialogEditAchievementInformation: React.FC<
  DialogEditAchievementInformationProps
> = ({
  clients = "",
  businessLegalities = "",
  yearOfJourney = "",
  setClients,
  setBusinessLegalities,
  setYearOfJourney,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [tempClients, setTempClients] = useState(clients);
  const [tempBusinessLegalities, setTempBusinessLegalities] =
    useState(businessLegalities);
  const [tempYearOfJourney, setTempYearOfJourney] = useState(yearOfJourney);

  const handleSaveChanges = () => {
    if (setClients) {
      setClients(tempClients);
    }
    if (setBusinessLegalities) {
      setBusinessLegalities(tempBusinessLegalities);
    }
    if (setYearOfJourney) {
      setYearOfJourney(tempYearOfJourney);
    }
    setIsDialogOpen(false);
  };

  useEffect(() => {
    if (isDialogOpen) {
      setTempClients(clients);
      setTempBusinessLegalities(businessLegalities);
      setTempYearOfJourney(yearOfJourney);
    }
  }, [isDialogOpen, clients, businessLegalities, yearOfJourney]);
  return (
    <>
      <CustomOutlineDiv className="outline-white flex flex-col justify-center">
        <Button
          variant={"ghost"}
          size={"icon"}
          className="rounded-full p-0 bg-white text-black self-center"
          onClick={() => setIsDialogOpen(true)}
        >
          <Pencil />
        </Button>
        <div className="flex flex-col items-center justify-center space-y-10 md:space-y-0 md:space-x-4 md:flex-row md:justify-around">
          <div className="flex flex-col items-center">
            {/* clients */}
            <Typography variant="h1" className="text-white">
              {clients}
            </Typography>
            <Typography variant="body1" className="text-white">
              client
            </Typography>
          </div>
          <Separator
            orientation="vertical"
            className="h-20 hidden md:block dark:bg-white"
          />
          <div className="flex flex-col items-center">
            {/* business legalities */}
            <Typography variant="h1" className="text-white">
              {businessLegalities}
            </Typography>
            <Typography variant="body1" className="text-white">
              Taken business legalities
            </Typography>
          </div>
          <Separator
            orientation="vertical"
            className="h-20 hidden md:block dark:bg-white"
          />
          <div className="flex flex-col items-center">
            {/* years of journey */}
            <Typography variant="h1" className="text-white">
              {yearOfJourney}
            </Typography>
            <Typography variant="body1" className="text-white">
              Years of Journey
            </Typography>
          </div>
        </div>
      </CustomOutlineDiv>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Achievement Information</DialogTitle>
            <DialogDescription>
              Edit your achievement information.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="clients">Number of clients</Label>
              <Input
                type="text"
                id="clients"
                placeholder={"Input number of clients"}
                value={tempClients}
                onChange={(e) => setTempClients(e.target.value)}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="businessLegalities">
                Number of business legalities
              </Label>
              <Input
                type="text"
                id="businessLegalities"
                placeholder={"Input number of business legalities"}
                value={tempBusinessLegalities}
                onChange={(e) => setTempBusinessLegalities(e.target.value)}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="yearOfJourney">Year of journey</Label>
              <Input
                type="text"
                id="yearOfJourney"
                placeholder={"Input number of years of journey"}
                value={tempYearOfJourney}
                onChange={(e) => setTempYearOfJourney(e.target.value)}
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

export default DialogEditAchievementInformation;
