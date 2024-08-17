"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS_MARKETING } from "@/lib/data";

export default function SocialLink() {
  return (
    <div className="w-full flex items-center justify-between gap-1">
      {SOCIAL_LINKS_MARKETING.map((socialLink, index) => (
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
  );
}
