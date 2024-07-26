"use client";
import useScroll from "@/hooks/use-scroll";
import { mergeClasses } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Link from "@/components/navigation/link";
import ThemeSwitcher from "@/components/general/theme-switcher";
import { NAV_LINKS } from "@/lib/data";
import useWindowSize from "@/hooks/use-window-size";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/navigation/drawer";
import IconButton from "@/components/general/icon-button";
import { Menu, X } from "lucide-react";
import Typography from "@/components/general/typography";

import DialogEditLogo from "../dialog/header/dialog-edit-logo";
import DialogEditCV from "../dialog/header/dialog-edit-cv";
import { LogoText } from "@/lib/types";

const Header = () => {
  const scrolled = useScroll(40);
  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [logoText, setLogoText] = useState<LogoText>("<LOGO />");

  // close sidebar if open in screen size < 768px
  useEffect(() => {
    if (size?.width && size?.width > 767 && isOpen) {
      setIsOpen(false);
    }
  }, [size, isOpen]);

  return (
    <header
      className={mergeClasses(
        "sticky top-0 z-30 w-full border-b border-transparent bg-gray max-md:border-gray-100",
        scrolled ? "bg-gray/50 backdrop-blur-xl md:border-gray-100" : ""
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8">
        <DialogEditLogo
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
          logoText={logoText}
          setLogoText={setLogoText}
        />
        {/* nav desktop */}
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex list-none items-center gap-6">
            {NAV_LINKS.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault(); // Ngăn chặn hành vi mặc định
                    // Tìm phần tử mục tiêu để cuộn đến
                    const target = document.getElementById(link.href.slice(1));
                    if (target) {
                      // Sử dụng window.scrollTo với tùy chọn smooth
                      window.scrollTo({
                        top: target.offsetTop,
                        behavior: "smooth", // Cuộn mượt mà
                      });
                    }
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="h-6 w-0.5 bg-gray-100"></div>
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <DialogEditCV />
          </div>
        </div>
        {/* nav mobile */}
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild className="flex md:hidden">
            <IconButton>
              <Menu />
            </IconButton>
          </DrawerTrigger>
          <DrawerContent>
            <div className="flex items-center justify-between border-b border-gray-100 p-4">
              <DialogEditLogo
                isDialogOpen={isDialogOpen}
                setIsDialogOpen={setIsDialogOpen}
                logoText={logoText}
                setLogoText={setLogoText}
              />
              <DrawerClose asChild>
                <IconButton>
                  <X />
                </IconButton>
              </DrawerClose>
            </div>
            <div className="border-b border-gray-100 p-4">
              <ul className="flex list-none flex-col gap-4">
                {NAV_LINKS.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault(); // Ngăn chặn hành vi mặc định
                        // Tìm phần tử mục tiêu để cuộn đến
                        const target = document.getElementById(
                          link.href.slice(1)
                        );
                        if (target) {
                          // Sử dụng window.scrollTo với tùy chọn smooth
                          window.scrollTo({
                            top: target.offsetTop,
                            behavior: "smooth", // Cuộn mượt mà
                          });
                        }
                        const timeoutId = setTimeout(() => {
                          setIsOpen(false);
                          clearTimeout(timeoutId);
                        }, 500);
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4 p-4">
              <div className="flex items-center justify-between">
                <Typography>Switch Theme</Typography>
                <ThemeSwitcher />
              </div>
              {/* <DownloadCV /> */}
              <DialogEditCV />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
