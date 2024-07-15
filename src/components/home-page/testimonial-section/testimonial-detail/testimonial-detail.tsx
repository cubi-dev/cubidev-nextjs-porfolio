import Card from "@/components/general/card";
import Typography from "@/components/general/typography";
import { TestimonialDetails } from "@/lib/types";
import Image from "next/image";
import React from "react";

const TestimonialDetail = ({
  personName,
  personAvatar,
  testimonial,
  title,
}: TestimonialDetails) => {
  return (
    <Card className="mx-auto flex flex-col items-center gap-6 p-8 md:w-2/3 md:p-12 lg:w-1/3">
      <Image src={personAvatar!} alt={`${personName} avatar`}></Image>
      <Typography>&quot;{testimonial}&quot;</Typography>
      <div className="flex w-full flex-col gap-1">
        <Typography
          variant="subtitle"
          className="w-full text-center font-semibold text-gray-900"
        >
          {personName}
        </Typography>
        <Typography variant="body3" className="w-full text-center">
          {title}
        </Typography>
      </div>
    </Card>
  );
};

export default TestimonialDetail;
