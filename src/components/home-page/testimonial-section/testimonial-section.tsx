import Tag from "@/components/general/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import { TESTIMONIALS } from "@/lib/data";
import React from "react";
import TestimonialDetail from "./testimonial-detail/testimonial-detail";

const TestimonialSection = () => {
  return (
    <Container id="testimonials" className="bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Testimonials" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Nice things people have said about me:
        </Typography>
      </div>

      <div className="flex gap-12 max-md:flex-col md:max-lg:flex-wrap">
        {TESTIMONIALS?.map((testimonial, index) => (
          <TestimonialDetail key={index} {...testimonial} />
        ))}
      </div>
    </Container>
  );
};

export default TestimonialSection;
