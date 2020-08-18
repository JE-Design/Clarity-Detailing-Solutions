import React from "react";
import { PageHeader } from "components/";
import { services_header } from "assets/";

const ServicesPage = () => (
  <>
    <PageHeader
      imagePath={services_header}
      title="Services"
      caption="They're in the service Industry?"
    />
  </>
);

export default ServicesPage;
