import React, { useState } from "react";
import {
  ProjectDetails,
  ProjectDetails as ProjectDetailsType,
} from "@/lib/types";
import Card from "@/components/general/card";
import { mergeClasses } from "@/lib/utils";
import Link from "@/components/navigation/link";
import Image, { StaticImageData } from "next/image";
import Typography from "@/components/general/typography";
import Tag from "@/components/general/tag";
import { ExternalLink, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { InputTags } from "@/components/ui/input-tags";
import { Textarea } from "@/components/ui/textarea";


type ProjectDetailsProps = ProjectDetailsType & {
  layoutType: "default" | "reverse";
};

const ProjectDetail = ({
  id,
  name,
  description,
  technologies,
  url,
  previewImage,
  layoutType = "default",
  editProject,
  deleteProject,
}: ProjectDetailsProps & {
  editProject: (updatedProject: ProjectDetails) => void;
  deleteProject: (id: string) => void;
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [nameInput, setNameInput] = useState(name);
  const [urlInput, setUrlInput] = useState(url);
  const [descriptionInput, setDescriptionInput] = useState(description);
  const [technologiesInput, setTechnologiesInput] = useState<string[]>(technologies);
  const [previewImageInput, setPreviewImageInput] = useState<string | StaticImageData>(previewImage);

   // Hàm xử lý khi file ảnh được chọn
   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Kiểm tra và cập nhật URL ảnh để hiển thị
        if (typeof reader.result === "string") {
          setPreviewImageInput(reader.result as unknown as StaticImageData);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Xử lý khi nhấn Save changes
  const handleSaveChanges = () => {
    const updatedProject = {
      id: id,
      name: nameInput,
      url: urlInput,
      description: descriptionInput,
      previewImage: previewImageInput, // Giả sử previewImage là ảnh ở chế độ sáng
      technologies: technologiesInput,
    };
    editProject(updatedProject);
    setIsDialogOpen(false);
  };

  // Xử lý khi nhấn Delete
  const handleDelete = () => {
    deleteProject(id);
    setIsDialogOpen(false);
  };

  return (
    <>
      <Card className="mx-auto flex w-full max-w-6xl flex-col md:flex-row">
        {/* Image */}
        <div
          className={mergeClasses(
            "flex items-center justify-center border-gray-100 bg-gray-50 p-8 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 lg:p-12",
            layoutType === "default"
              ? "md:rounded-l-xl md:border-r"
              : "md:order-last md:rounded-r-xl md:border-l"
          )}
        >
          <Link noCustomization href={url} externalLink>
            <Image
              src={previewImage}
              alt={`${name} preview`}
              width={0}
              height={0}
              className="w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105"
              style={{ objectFit: "cover" }}
            />
          </Link>
        </div>

        {/* Content */}
        <div
          className={mergeClasses(
            "flex flex-col gap-6 p-8 md:w-1/2 lg:p-12",
            layoutType === "default" ? "" : "md:order-first"
          )}
        >
          <Typography
            variant="subtitle"
            className="font-semibold text-gray-900"
          >
            {name}
          </Typography>
          <Typography>{description}</Typography>
          <div className="flex flex-wrap gap-2">
            {technologies?.map((technology, index) => (
              <Tag key={index} label={technology} />
            ))}
          </div>
          <Link
            href={url}
            noCustomization
            className="self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500"
            externalLink
          >
            <ExternalLink />
          </Link>
        </div>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="rounded-full p-0"
          onClick={() => setIsDialogOpen(true)}
        >
          <Pencil />
        </Button>
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
              <Label htmlFor="project_name">Project’s name</Label>
              <Input
                id="project_name"
                type="text"
                placeholder="Input your project name"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="project_url">Project link</Label>
              <Input
                id="project_url"
                type="text"
                placeholder="Input your project link"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="project_description">Project’s description</Label>
              <Textarea
                id="project_description"
                placeholder="Input your project description"
                value={descriptionInput}
                className="h-40"
                onChange={(e) => setDescriptionInput(e.target.value)}
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="technologies">Technology using</Label>
              <InputTags
                id="technologies"
                placeholder="Input your technologies"
                value={technologiesInput}
                className="h-40"
                onChange={setTechnologiesInput}
              />
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

export default ProjectDetail;
