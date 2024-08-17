"use client";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import { Playfair_Display } from "next/font/google";
import { SERVICES_DATA_LAWYER } from "@/lib/data";
import React, { useState } from "react";
import ServiceDetail from "@/components/editable-portfolio-lawyer-components/page-components/services-section/service-detail/service-detail";
import { ServiceDetails } from "@/lib/types";
import CustomOutlineDiv from "@/components/general/custom-outline-div";
import DialogAddService from "@/components/editable-portfolio-lawyer-components/dialog/services-section/dialog-add-service";

const playFairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
});

const ServicesSection = () => {
  const [services, setServices] = useState(SERVICES_DATA_LAWYER);

  const addService = (newService: ServiceDetails) => {
    setServices([...services, newService]);
  };

  const editService = (updatedService: ServiceDetails) => {
    const updatedServices = services.map((service) =>
      service.id === updatedService.id ? updatedService : service
    );
    setServices(updatedServices);
  };

  const deleteService = (id: string) => {
    const filteredServices = services.filter((service) => service.id !== id);
    setServices(filteredServices);
  };

  return (
    <Container id="service" className="bg-[#F2F7FF] dark:bg-gray-50">
      <Typography
        variant={"h1"}
        className={`${playFairDisplay.className} text-center text-[#094B72] dark:text-white`}
      >
        Services
      </Typography>
      <DialogAddService addService={addService} />
      <CustomOutlineDiv>
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service) => (
            <ServiceDetail
              key={service.id}
              {...service}
              editService={editService}
              deleteService={deleteService}
            />
          ))}
        </div>
      </CustomOutlineDiv>
    </Container>
  );
};

export default ServicesSection;
