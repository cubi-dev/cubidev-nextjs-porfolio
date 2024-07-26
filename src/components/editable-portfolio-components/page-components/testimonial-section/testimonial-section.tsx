"use client";
import Tag from "@/components/general/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import { TESTIMONIAL_SECTION_DATA } from "@/lib/data";
import React, { useState } from "react";
import TestimonialDetail from "./testimonial-detail/testimonial-detail";
import DialogEditTestimonialTitle from "../../dialog/testimonial-section/dialog-edit-testimonial-title";
import { TestimonialDetails } from "@/lib/types";
import CustomOutlineDiv from "../../ui/custom-outline-div";
import DialogAddTestimonial from "../../dialog/testimonial-section/dialog-add-testimonial";

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState(
    TESTIMONIAL_SECTION_DATA.testimonialsProps
  );
  const [title, setTitle] = useState(TESTIMONIAL_SECTION_DATA.titleProps.title);

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
    <Container id="testimonials" className="bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Testimonials" />
        </div>
        <DialogEditTestimonialTitle title={title} setTitle={setTitle} />
      </div>
      <div className="gap-y-3 flex flex-col">
        <DialogAddTestimonial addTestimonial={addTestimonial} />
        <CustomOutlineDiv>
          <div className="flex flex-wrap justify-center gap-12 max-md:flex-col md:max-lg:flex-wrap">
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
      </div>
    </Container>
  );
};

export default TestimonialSection;
