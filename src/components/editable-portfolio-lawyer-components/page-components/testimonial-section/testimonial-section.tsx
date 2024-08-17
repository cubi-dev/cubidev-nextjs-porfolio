"use client";
import React, { useState } from "react";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import { Playfair_Display } from "next/font/google";
import { TESTIMONIALS_LAWYER } from "@/lib/data";
import TestimonialDetail from "@/components/editable-portfolio-lawyer-components/page-components/testimonial-section/testimonial-detail/testimonial-detail";
import CustomOutlineDiv from "@/components/general/custom-outline-div";
import { TestimonialDetails } from "@/lib/types";
import DialogAddTestimonial from "@/components/editable-portfolio-lawyer-components/dialog/testimonial-section/dialog-add-testimonial";

const playFairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
});

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState(TESTIMONIALS_LAWYER);

  const addTestimonial = (newTestimonial: TestimonialDetails) => {
    setTestimonials([...testimonials, newTestimonial]);
  };

  const editTestimonial = (updatedTestimonial: TestimonialDetails) => {
    const updatedTestimonials = testimonials.map((testimonial) =>
      testimonial.id === updatedTestimonial.id
        ? updatedTestimonial
        : testimonial
    );
    setTestimonials(updatedTestimonials);
  };

  const deleteTestimonial = (id: string) => {
    const filteredTestimonial = testimonials.filter(
      (testimonial) => testimonial.id !== id
    );
    setTestimonials(filteredTestimonial);
  };
  return (
    <Container id="testimonial" className="bg-[#F2F7FF] dark:bg-gray-50">
      <Typography
        variant="h1"
        className={`${playFairDisplay.className} text-center text-[#094B72] dark:text-white`}
      >
        Clients Testimonial
      </Typography>
      <DialogAddTestimonial addTestimonial={addTestimonial} />
      <CustomOutlineDiv>
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials?.map((testimonial, index) => (
            <TestimonialDetail
            key={index}
            {...testimonial}
            editTestimonial={editTestimonial}
            deleteTestimonial={deleteTestimonial}
          />
          ))}
        </div>
      </CustomOutlineDiv>
    </Container>
  );
};

export default TestimonialSection;
