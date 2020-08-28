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
        <Service
          title="Lorem Ipsum"
          subtitle="Lorem Ipsum"
          price="70"
          secondTitle="Lorem Ipsum"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </Card>
      <Card className="contact-links w-full lg:w-1/2">
        <Service
          title="lorem ipsum"
          subtitle="lorem ipsum"
          price="70"
          secondTitle="lorem ipsum"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </Card>
      <Card className="contact-links w-full lg:w-full">
        <Service
          title="lorem ipsum"
          subtitle="lorem ipsum"
          price="70"
          secondTitle="lorem ipsum"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </Card>
    </PageContainer>
  </>
);

export default ServicesPage;
