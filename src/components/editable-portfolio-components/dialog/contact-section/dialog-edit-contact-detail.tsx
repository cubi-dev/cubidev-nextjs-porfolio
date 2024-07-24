"use client";

import Typography from "@/components/general/typography";
import React, { useEffect, useState } from "react";
import CustomOutlineDiv from "../../ui/custom-outline-div";
import { Button } from "@/components/ui/button";
import { Copy, Mail, Pencil, Phone } from "lucide-react";
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
import IconButton from "@/components/general/icon-button";
import { copyTextToClipboard } from "@/lib/utils";
import useWindowSize from "@/hooks/use-window-size";

type CopyValue = "email" | "phone";

function DialogEditContactDetail({}) {
  const { width } = useWindowSize();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [email, setEmail] = useState("email@gmail.com");
  const [tempEmail, setTempEmail] = useState(email);
  const [phone, setPhone] = useState("+84 0901391234");
  const [tempPhone, setTempPhone] = useState(phone);
  const [isCopied, setIsCopied] = useState(false);
  const [copiedValueType, setCopiedValueType] = useState<CopyValue | null>(
    null
  );
  const handleCopyClick = async (text: string, type: CopyValue) => {
    try {
      // Thử copy text vào clipboard sử dụng hàm `copyTextToClipboard`
      await copyTextToClipboard(text);
      // Nếu thành công, cập nhật trạng thái `isCopied` thành true và lưu loại giá trị đã copy
      setIsCopied(true);
      setCopiedValueType(type);
      // Đặt timeout để sau 1.5 giây, tự động cập nhật lại trạng thái `isCopied` thành false
      // và `copiedValueType` về null
      let timoutId: any = setTimeout(() => {
        setIsCopied(false);
        setCopiedValueType(null);
        // Dùng clearTimeout để hủy timeout nếu cần
        clearTimeout(timoutId);
      }, 1500);
    } catch (error) {
      // Nếu có lỗi xảy ra trong quá trình copy, cập nhật lại trạng thái `isCopied` và `copiedValueType`
      // về giá trị ban đầu và hiển thị thông báo lỗi
      setIsCopied(false);
      setCopiedValueType(null);
      alert("Unable to copy!");
    }
  };

  const handleSaveChanges = () => {
    setEmail(tempEmail); // Cập nhật email từ tempEmail
    setPhone(tempPhone); // Cập nhật phone từ tempPhone
    setIsDialogOpen(false); // Đóng dialog
  };

  useEffect(() => {
    if (isDialogOpen) {
      setEmail(email);
      setPhone(phone);
    }
  }, [email, isDialogOpen, phone]);

  return (
    <>
      <Button
        variant={"ghost"}
        size={"icon"}
        className="rounded-full p-0"
        onClick={() => setIsDialogOpen(true)}
      >
        <Pencil />
      </Button>
      <CustomOutlineDiv>
        <div className="flex items-center gap-4 md:gap-5">
          <Mail className="h-6 w-6 md:h-8 md:w-8" />
          {/* <Link href={`mailto:${email}`}> */}
          <Typography variant="h2">{email}</Typography>
          {/* </Link> */}
          <IconButton
            size={width && width < 768 ? "md" : "lg"}
            onClick={() => handleCopyClick(email, "email")}
            showTooltip={isCopied && copiedValueType === "email"}
            tooltipText="Copied!"
          >
            <Copy />
          </IconButton>
        </div>
        <div className="flex items-center gap-4 md:gap-5">
          <Phone className="h-6 w-6 md:h-8 md:w-8" />
          {/* <Link href={`tel:${phone.replace(' ', '')}`}> */}
          <Typography variant="h2">{phone}</Typography>
          {/* </Link> */}
          <IconButton
            size={width && width < 768 ? "md" : "lg"}
            onClick={() => handleCopyClick(phone.replace(" ", ""), "phone")}
            showTooltip={isCopied && copiedValueType === "phone"}
            tooltipText="Copied!"
          >
            <Copy />
          </IconButton>
        </div>
      </CustomOutlineDiv>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Contact Detail</DialogTitle>
            <DialogDescription>
              Edit your contact detail to get in touch with your visitors.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="text"
                id="email"
                placeholder={"Input your email of contact section"}
                value={tempEmail}
                onChange={(e) => setTempEmail(e.target.value)}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="phone">Phone</Label>
              <Input
                type="text"
                id="phone"
                placeholder={"Input your phone of contact section"}
                value={tempPhone}
                onChange={(e) => setTempPhone(e.target.value)}
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

export default DialogEditContactDetail;
