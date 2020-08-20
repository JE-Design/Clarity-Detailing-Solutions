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
      <Card empty={true} className="w-full sm:w-full md:w-1/2">
        <iframe
          id="google-map"
          title="map"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJj3feJ2yYLIgRIQ7f2Fbuais&key=`}
          allowFullScreen
        />
      </Card>
    </PageContainer>
  </>
);

export default ContactPage;
