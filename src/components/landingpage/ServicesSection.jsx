import { SectionContainer, ServiceCard } from "..";
import { servicesData } from "@/data";

export default function ServicesSection() {
  return (
    <SectionContainer
      id="services-section"
      title=""
      titleColor="Our Services"
      description="At MHS Tech Ventures, we deliver innovative software solutions to
              help businesses thrive. From web and mobile development to custom
              portals and consultancy, our expert team ensures your digital
              transformation is seamless and scalable."
      btnTxt="See all Services"
      btnUrl="/services"
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {servicesData.map((service, index) => (
        <ServiceCard service={service} index={index} key={index} />
      ))}
    </SectionContainer>
  );
}
