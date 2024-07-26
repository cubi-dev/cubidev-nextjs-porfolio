import React, { useEffect, useState } from "react";
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
import CustomOutlineDiv from "@/components/editable-portfolio-components/ui/custom-outline-div";
import Logo from "@/components/editable-portfolio-components/ui/logo";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { LogoText } from "@/lib/types";

interface DialogEditLogoProps {
  isDialogOpen: boolean;
  setIsDialogOpen: (isOpen: boolean) => void;
  logoText: LogoText;
  setLogoText: (text: LogoText) => void;
}

const DialogEditLogo: React.FC<DialogEditLogoProps> = ({
  isDialogOpen,
  logoText,
  setIsDialogOpen,
  setLogoText,
}) => {
  const [tempLogoText, setTempLogoText] = useState<LogoText>(logoText);

  const handleSaveChanges = () => {
    setLogoText(tempLogoText);
    setIsDialogOpen(false); // Đóng dialog
  };

  useEffect(() => {
    if (isDialogOpen) {
      setTempLogoText(logoText);
    }
  }, [isDialogOpen, logoText]);

  return (
    <div className="flex items-center justify-center gap-x-5">
      <CustomOutlineDiv>
        <Logo text={logoText} />
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
            <DialogTitle>Edit Logo Text</DialogTitle>
            <DialogDescription>
              Edit your logo text to represent your self.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="logo_text">Logo text</Label>
              <Input
                type="text"
                id="logo_text"
                placeholder={"Input your logo text"}
                value={tempLogoText}
                onChange={(e) => setTempLogoText(e.target.value)}
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

export default DialogEditLogo;
