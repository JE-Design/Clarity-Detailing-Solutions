import React from "react";
import { PageContainer, PageHeader, Card } from "components/";
//temporary
import { ContactLinks } from "components/";
import { services_header } from "assets/";

const ServicesPage = () => (
  <>
    <PageHeader
      imagePath={services_header}
      title="Services"
      caption="They're in the service Industry?"
    />
    <PageContainer className="flex flex-wrap">
      <Card className="contact-links w-full">
        <ContactLinks />
      </Card>
      <Card className="contact-links w-full">
        <ContactLinks />
      </Card>
      <Card className="contact-links w-full">
        <ContactLinks />
      </Card>
    </PageContainer>
  </>
);

export default ServicesPage;
