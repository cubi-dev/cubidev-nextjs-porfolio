import React, { useState } from "react";
import Card from "@/components/general/card";
import ImageWrapper from "@/components/general/image-wrapper";
import Typography from "@/components/general/typography";
import { Button } from "@/components/ui/button";
import { ExperienceDetails } from "@/lib/types";
import { Pencil } from "lucide-react";
import { StaticImageData } from "next/image";
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
import { InputTags } from "@/components/ui/input-tags";
import { DateTimePicker } from "@/components/ui/date-time-picker";
import { Checkbox } from "@/components/ui/checkbox";

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
};

const ExperienceDetail = ({
  id,
  logo,
  darkModeLogo,
  logoAlt,
  position,
  currentlyWorkHere,
  startDate,
  endDate,
  summary,
  editExperience,
  deleteExperience,
}: ExperienceDetails & {
  editExperience: (updatedExperience: ExperienceDetails) => void;
  deleteExperience: (id: string) => void;
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [positionInput, setPositionInput] = useState(position);
  const [currentlyWorkHereInput, setCurrentlyWorkHereInput] = useState(currentlyWorkHere);
  const [summaryInput, setSummaryInput] = useState<string[]>(summary);
  const [startDateInput, setStartDateInput] = useState<Date | undefined>(startDate);
  const [endDateInput, setEndDateInput] = useState<Date | undefined>(endDate);
  const [logoInput, setLogoInput] = useState<string | StaticImageData>(logo);

  // Hàm xử lý khi file ảnh được chọn
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Kiểm tra và cập nhật URL ảnh để hiển thị
        if (typeof reader.result === "string") {
          setLogoInput(reader.result as unknown as StaticImageData);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Xử lý khi nhấn Save changes
  const handleSaveChanges = () => {
    const updatedExperience = {
      id: id,
      logo: logoInput,
      logoAlt: "Logo edit",
      position: positionInput,
      currentlyWorkHere: currentlyWorkHereInput,
      startDate: startDateInput === undefined ? new Date() : startDateInput,
      endDate: endDateInput === undefined ? new Date() : endDateInput,
      summary: summaryInput,
    };
    editExperience(updatedExperience);
    setIsDialogOpen(false);
  };

  // Xử lý khi nhấn Delete
  const handleDelete = () => {
    deleteExperience(id);
    setIsDialogOpen(false);
  };

  return (
    <>
      <Card className="mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8">
        <div className="max-md:order-1 md:w-1/4">
          <ImageWrapper
            src={logo}
            srcForDarkMode={darkModeLogo}
            alt={logoAlt}
            className="max-w-[120px]"
          />
        </div>
        <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4">
          <Typography
            variant="subtitle"
            className="font-semibold text-gray-900"
          >
            {position}
          </Typography>
          <ul className="flex list-disc flex-col gap-2 md:gap-1">
            {summary?.map((sentence, index) => (
              <Typography component="li" key={index}>
                {sentence}
              </Typography>
            ))}
          </ul>
        </div>
        <div className="max-md:order-2 md:w-1/4 flex">
          <Typography className="text-gray-700 md:text-right">
            {new Intl.DateTimeFormat("en-US", dateFormatOptions).format(
              startDate
            )}{" "}
            -{" "}
            {currentlyWorkHere
              ? "Present"
              : endDate
              ? new Intl.DateTimeFormat("en-US", dateFormatOptions).format(
                  endDate
                )
              : "NA"}
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
      </Card>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Experience</DialogTitle>
            <DialogDescription>
              Add your experience to impress your visitors.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="light_image">Logo image</Label>
              <Input
                id="light_image"
                type="file"
                onChange={handleImageChange}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="position_name">Position’s name</Label>
              <Input
                id="position_name"
                type="text"
                placeholder="Input your position name"
                value={positionInput}
                onChange={(e) => setPositionInput(e.target.value)}
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="summary">Summary</Label>
              <InputTags
                id="summary"
                placeholder="Input your summary"
                value={summaryInput}
                className="h-40 overflow-y-auto"
                onChange={setSummaryInput}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="start_date">Start Date</Label>
              <DateTimePicker
                key={"start_date"}
                granularity="day"
                value={startDateInput}
                onChange={setStartDateInput}
                placeholder="Select your start date"
              />
            </div>
            {currentlyWorkHereInput ? null : (
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="end_date">End Date</Label>
                <DateTimePicker
                  key={"end_date"}
                  granularity="day"
                  value={endDateInput}
                  onChange={setEndDateInput}
                  placeholder="Select your end date"
                />
              </div>
            )}
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <div className="items-top flex space-x-2">
                <Checkbox
                  id="currently_work"
                  checked={currentlyWorkHereInput}
                  onCheckedChange={() => {
                    setCurrentlyWorkHereInput(!currentlyWorkHereInput);
                  }}
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="currently_work"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Currently work here
                  </label>
                  <p className="text-sm text-muted-foreground">
                    If you are currently working here, please check this box to
                    hide end date field.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              variant={"destructive"}
              onClick={handleDelete}
            >
              Delete
            </Button>
            <Button type="submit" onClick={handleSaveChanges}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ExperienceDetail;
