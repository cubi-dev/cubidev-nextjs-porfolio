"use client";
import React from "react";
import { SOCIAL_LINKS_LAWYER } from "@/lib/data";
import Image from "next/image";

export default function SocialLink() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
      {SOCIAL_LINKS_LAWYER.map((socialLink, index) => (
        <div
          key={index}
          onClick={() => window.open(socialLink.url, "_blank")}
          className="cursor-pointer"
        >
          <Image src={socialLink.icon} alt={"icon"} width={40} height={40} />
        </div>
      ))}
    </div>
  );
}
