import React from "react";

export default function Faq1() {
  return (
    <div className="accordion" id="accordion">
      <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".3s">
        <h5 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq1"
            aria-expanded="true"
            aria-controls="faq1"
          >
            What web development services does your company offer?
          </button>
        </h5>
        <div
          id="faq1"
          className="accordion-collapse collapse"
          data-bs-parent="#accordion"
        >
          <div className="accordion-body">
            We provide responsive and SEO-friendly web development services, including custom-built websites, e-commerce platforms, and maintenance services. Every website we create is tailored to your business, ensuring a seamless user experience across all devices.
          </div>
        </div>
      </div>

      <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".5s">
        <h5 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq2"
            aria-expanded="false"
            aria-controls="faq2"
          >
            What can I expect from your Data Analytics services?
          </button>
        </h5>
        <div
          id="faq2"
          className="accordion-collapse collapse"
          data-bs-parent="#accordion"
        >
          <div className="accordion-body">
            Our Data Analytics services empower businesses to make informed decisions through tools like Excel, Power BI, and Tableau. We offer data visualization, business intelligence solutions, and performance monitoring to help you harness the full potential of your data.
          </div>
        </div>
      </div>

      <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
        <h5 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq3"
            aria-expanded="false"
            aria-controls="faq3"
          >
            How does your App Development process work?
          </button>
        </h5>
        <div
          id="faq3"
          className="accordion-collapse collapse"
          data-bs-parent="#accordion"
        >
          <div className="accordion-body">
            Our app development process focuses on creating high-quality, cross-platform applications using Flutter. From ideation to deployment, we ensure your app is visually appealing, user-friendly, and performs efficiently on both iOS and Android platforms.
          </div>
        </div>
      </div>

      <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".9s">
        <h5 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq4"
            aria-expanded="false"
            aria-controls="faq4"
          >
            How do you approach UX/UI design for digital products?
          </button>
        </h5>
        <div
          id="faq4"
          className="accordion-collapse collapse"
          data-bs-parent="#accordion"
        >
          <div className="accordion-body">
            Our UX/UI design services prioritize user-centered designs that enhance engagement and satisfaction. By conducting thorough research, we create intuitive interfaces with streamlined navigation and visually appealing layouts tailored to your brand.
          </div>
        </div>
      </div>

      <div className="accordion-item wow fadeInUp" data-wow-delay="1.1s">
        <h5 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq5"
            aria-expanded="false"
            aria-controls="faq5"
          >
            Why should I choose your company for e-commerce solutions?
          </button>
        </h5>
        <div
          id="faq5"
          className="accordion-collapse collapse"
          data-bs-parent="#accordion"
        >
          <div className="accordion-body">
            Our e-commerce solutions provide secure, scalable platforms with customizable features for an engaging shopping experience. We integrate seamless payment options, analytics, and inventory management tools to help your business grow online.
          </div>
        </div>
      </div>
    </div>
  );
}
