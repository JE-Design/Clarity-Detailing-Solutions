import React from "react";
import { Service, PageContainer, PageHeader, Card } from "components/";
import { services_header } from "assets/";

const ServicesPage = () => (
  <>
    <PageHeader
      imagePath={services_header}
      title="Services"
      caption="They're in the service Industry?"
    />
    <PageContainer className="flex flex-wrap justify-center">
      <Card className="contact-links w-full lg:w-1/2">
        <Service />
      </Card>
      <Card className="contact-links w-full lg:w-1/2">
        <Service />
      </Card>
      <Card className="contact-links w-full lg:w-full">
        <Service />
      </Card>
    </PageContainer>
  </>
);

export default ServicesPage;
