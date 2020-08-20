import React from "react";
import { PageContainer, PageHeader, Card } from "components/";

//Temporary
import { ContactLinks } from "components/";
import { testimonials_header } from "assets/";

const TestimonialsPage = () => (
  <>
    <PageHeader
      imagePath={testimonials_header}
      title="Our Customers"
      caption="Here are some testimonials from customers that exist and have seen our products!"
    />
    <PageContainer className="flex flex-wrap">
      <Card className="contact-links sm:w-full md:w-1/2">
        <ContactLinks />
      </Card>
      <Card className="contact-links sm:w-full md:w-1/2">
        <ContactLinks />
      </Card>
      <Card className="contact-links w-full">
        <ContactLinks />
      </Card>
    </PageContainer>
  </>
);

export default TestimonialsPage;
