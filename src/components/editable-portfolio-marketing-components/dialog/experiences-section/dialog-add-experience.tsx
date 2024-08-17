"use client";
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
import { Plus } from "lucide-react";
import { StaticImageData } from "next/image";
import React, { useState } from "react";
import image_placeholder from "@/../public/placeholder_img.svg";
import { ExperienceDetails } from "@/lib/types";
import { InputTags } from "@/components/ui/input-tags";
import { Checkbox } from "@/components/ui/checkbox";
import { DateTimePicker } from "@/components/ui/date-time-picker";

interface DialogAddExperienceProps {
  addExperience: (newExperience: ExperienceDetails) => void;
}

const DialogAddExperience: React.FC<DialogAddExperienceProps> = ({
  addExperience,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [position, setPosition] = useState("");
  const [currentlyWorkHere, setCurrentlyWorkHere] = useState(false);
  const [summary, setSummary] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [logo, setLogo] = useState<string | StaticImageData>(image_placeholder);

  // Hàm xử lý khi file ảnh được chọn
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Kiểm tra và cập nhật URL ảnh để hiển thị
        if (typeof reader.result === "string") {
          setLogo(reader.result as unknown as StaticImageData);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const newExperience: ExperienceDetails = {
      id: Math.random().toString(36).substr(2, 9),
      logo: logo, // Giả sử logo là ảnh ở chế độ sáng
      logoAlt: "Logo add",
      position: position,
      currentlyWorkHere: currentlyWorkHere,
      startDate: startDate === undefined ? new Date() : startDate,
      endDate: endDate === undefined ? new Date() : endDate,
      summary: summary,
    };
    addExperience(newExperience);
    setIsDialogOpen(false); // Đóng dialog sau khi thêm
  };

  return (
    <div>
      <Button
        variant={"secondary"}
        size={"icon"}
        onClick={() => setIsDialogOpen(true)}
      >
        <Plus />
      </Button>
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
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="summary">Summary</Label>
              <InputTags
                id="summary"
                placeholder="Input your summary"
                value={summary}
                onChange={setSummary}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="start_date">Start Date</Label>
              <DateTimePicker
                key={"start_date"}
                granularity="day"
                value={startDate}
                onChange={setStartDate}
                placeholder="Select your start date"
              />
            </div>
            {currentlyWorkHere ? null : (
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="end_date">End Date</Label>
                <DateTimePicker
                  key={"end_date"}
                  granularity="day"
                  value={endDate}
                  onChange={setEndDate}
                  placeholder="Select your end date"
                />
              </div>
            )}
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <div className="items-top flex space-x-2">
                <Checkbox
                  id="currently_work"
                  checked={currentlyWorkHere}
                  onCheckedChange={(checked) => {
                    // Convert 'checked' to boolean if it's 'indeterminate'
                    const isChecked =
                      checked === "indeterminate" ? false : checked;
                    setCurrentlyWorkHere(isChecked);
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
            <Button type="submit" onClick={handleSubmit}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogAddExperience;
