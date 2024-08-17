"use client";
import React, { useState } from "react";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import Card from "@/components/general/card";
import IconButton from "@/components/general/icon-button";
import { MoveRight } from "lucide-react";
import { SERVICES_DATA_MARKETING } from "@/lib/data";
import { ServiceDetails } from "@/lib/types";
import ServiceDetail from "@/components/editable-portfolio-marketing-components/page-components/services-section/service-detail/service-detail";
import DialogAddService from "@/components/editable-portfolio-marketing-components/dialog/services-section/dialog-add-service";
import CustomOutlineDiv from "@/components/general/custom-outline-div";

export default function ServicesSection() {
  const [services, setServices] = useState(SERVICES_DATA_MARKETING);

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
    <Container id="service" className="bg-gray-50">
      <Typography variant="h2" className="text-center">
        Services
      </Typography>
      <DialogAddService addService={addService} />
      <CustomOutlineDiv>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
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
}
