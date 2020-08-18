import React from "react";
import { PageHeader } from "components/";
import { testimonials_header } from "assets/";

const TestimonialsPage = () => (
  <>
    <PageHeader
      imagePath={testimonials_header}
      title="Our Customers"
      caption="Here are some testimonials from customers that exist and have seen our products!"
    />
  </>
);

export default TestimonialsPage;
