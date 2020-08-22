import React from "react";
import {
  Card,
  Instafeed,
  PageContainer,
  PageHeader,
  Testimonial,
} from "components/";

//Temporary
import { testimonials_header } from "assets/";

const customerTestimonialPhotos1 = [testimonials_header, testimonials_header];
const testimonialReview1 = { url: "#", text: "Five star review on yelp" };

const customerTestimonialPhotos2 = [testimonials_header, testimonials_header];
const testimonialReview2 = { url: "#", text: "Five star review on yelp" };

const TestimonialsPage = () => (
  <>
    <PageHeader
      imagePath={testimonials_header}
      title="Our Customers"
      caption="Here are some testimonials from customers that exist and have seen our products!"
    />
    <PageContainer className="flex flex-wrap">
      <Testimonial
        className="sm:w-full md:w-1/2"
        customerName="Tim"
        customerTestimony="This is a testimonial from a customer that exists and has seen our products!"
        customerPhoto={testimonials_header}
        carPhotos={customerTestimonialPhotos1}
        review={testimonialReview1}
      ></Testimonial>
      <Testimonial
        className="sm:w-full md:w-1/2"
        customerName="Jim"
        customerTestimony="This is a testimonial from a customer that exists and has seen our products!"
        customerPhoto={testimonials_header}
        carPhotos={customerTestimonialPhotos2}
        review={testimonialReview2}
      ></Testimonial>
      <Card className="contact-links w-full">
        <Instafeed />
      </Card>
    </PageContainer>
  </>
);

export default TestimonialsPage;
