import React from "react";
import { Card, ContactLinks, PageContainer, PageHeader } from "components/";
import { contact_header } from "assets/";

import "./ContactPage.scss";

const ContactPage = () => (
  <>
    <PageHeader
      imagePath={contact_header}
      title="Contact Page"
      caption="E-mail us here for a quote or additional information on any of our services!"
    />
    <PageContainer className="flex flex-wrap">
      <Card className="contact-links w-full">
        <ContactLinks />
      </Card>
      <Card className="contact-links w-full sm:w-full md:w-1/2">
        <ContactLinks />
      </Card>
      <Card className="contact-links w-full sm:w-full md:w-1/2">
        <ContactLinks />
      </Card>
    </PageContainer>
  </>
);

export default ContactPage;
