"use client";
import React from "react";
import { useState } from "react";
import { Copy, Mail, Phone } from "lucide-react";
import SocialLink from "@/components/general/social-link";
import Tag from "@/components/general/tag";
import IconButton from "@/components/general/icon-button";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import useWindowSize from "@/hooks/use-window-size";
import { copyTextToClipboard } from "@/lib/utils";
import DialogEditContactTitle from "../../dialog/contact-section/dialog-edit-contact-title";
import DialogEditContactDetail from "../../dialog/contact-section/dialog-edit-contact-detail";

let email = "email@gmail.com";
let phone = "+84 0901391234";

type CopyValue = "email" | "phone";

const ContactSection = () => {
  const { width } = useWindowSize();
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

  return (
    <Container id="contact">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Get in touch" />
        </div>
        <DialogEditContactTitle />
      </div>

      <div className="flex flex-col items-center gap-6 md:gap-12">
        <div className="flex flex-col items-center md:gap-4">
          <DialogEditContactDetail />
        </div>
        {/* <div className="flex flex-col items-center gap-2">
          <Typography className="text-center">
            You may also find me on these platforms!
          </Typography>
          <SocialLink />
        </div> */}
      </div>
    </Container>
  );
};

export default ContactSection;
