"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomOutlineDiv from "@/components/general/custom-outline-div";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { DialogEditCVProps } from "@/lib/types";

const DialogEditCV: React.FC<DialogEditCVProps> = ({ onFileChange }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFileName(file.name);
      onFileChange(file);
    }
  };
  return (
    <div className="flex items-center justify-center gap-x-5">
      <CustomOutlineDiv>
        <Button className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800">
          Download CV
        </Button>
      </CustomOutlineDiv>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={() => setIsDialogOpen(true)}
        >
          <Pencil />
        </Button>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select CV / Resume</DialogTitle>
            <DialogDescription>
              Upload your CV / Resume to showcase your skills and experience.
            </DialogDescription>
          </DialogHeader>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="cv">CV</Label>
            <Input
              id="cv"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
            />
          </div>
          <DialogFooter>
            <Button type="submit" onClick={() => setIsDialogOpen(false)}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogEditCV;
