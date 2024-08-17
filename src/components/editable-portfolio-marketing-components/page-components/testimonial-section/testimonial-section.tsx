"use client";
import React, { useState } from "react";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import {
  Carousel,
  CarouselIndicator,
  CarouselMainContainer,
  CarouselThumbsContainer,
} from "@/components/ui/carousel-extend";
import { TESTIMONIALS } from "@/lib/data";
import { TestimonialDetails } from "@/lib/types";
import CustomOutlineDiv from "@/components/general/custom-outline-div";
import DialogAddTestimonial from "@/components/editable-portfolio-marketing-components/dialog/testimonial-section/dialog-add-testimonial";
import TestimonialDetail from "@/components/editable-portfolio-marketing-components/page-components/testimonial-section/testimonial-detail/testimonial-detail";

export default function TestimonialSection() {
  const [testimonials, setTestimonials] = useState(TESTIMONIALS);

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
    <Container id="testimonials">
      <Typography variant="h2" className="text-center">
        Testimonials
      </Typography>
      <Carousel>
        <DialogAddTestimonial addTestimonial={addTestimonial} />
        <CustomOutlineDiv>
          {/* <CarouselNext />
      <CarouselPrevious /> */}
          <div className="relative">
            <CarouselMainContainer className="h-60">
              {testimonials?.map((testimonial, index) => (
                // Testimonial Details (item)
                <TestimonialDetail
                  key={index}
                  {...testimonial}
                  editTestimonial={editTestimonial}
                  deleteTestimonial={deleteTestimonial}
                />
              ))}
            </CarouselMainContainer>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
              <CarouselThumbsContainer className="gap-x-1 ">
                {Array.from({ length: testimonials.length }).map((_, index) => (
                  <CarouselIndicator key={index} index={index} />
                ))}
              </CarouselThumbsContainer>
            </div>
          </div>
        </CustomOutlineDiv>
      </Carousel>
    </Container>
  );
}
