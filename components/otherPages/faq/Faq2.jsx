import React from "react";

export default function Faq2() {
  return (
    <div className="accordion" id="accordion1">
      <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".3s">
        <h5 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq5"
            aria-expanded="true"
            aria-controls="faq5"
          >
            How do I get started with your services?
          </button>
        </h5>
        <div
          id="faq5"
          className="accordion-collapse collapse"
          data-bs-parent="#accordion1"
        >
          <div className="accordion-body">
            Getting started is simple! Contact us through our website to schedule a consultation. We’ll discuss your needs and help you choose the right service, whether it's Web Development, Data Analytics, App Development, or UX/UI Design. From there, we’ll create a tailored plan to bring your vision to life.
          </div>
        </div>
      </div>
      <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".5s">
        <h5 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq6"
            aria-expanded="false"
            aria-controls="faq6"
          >
            How do I maintain my website or app after it's built?
          </button>
        </h5>
        <div
          id="faq6"
          className="accordion-collapse collapse"
          data-bs-parent="#accordion1"
        >
          <div className="accordion-body">
            We offer maintenance services to keep your website or app running smoothly. This includes updates, security patches, performance optimization, and support. For apps, we also monitor compatibility across platforms to ensure a seamless user experience.
          </div>
        </div>
      </div>
      <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
        <h5 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq7"
            aria-expanded="false"
            aria-controls="faq7"
          >
            What does your Data Analytics service include?
          </button>
        </h5>
        <div
          id="faq7"
          className="accordion-collapse show"
          data-bs-parent="#accordion1"
        >
          <div className="accordion-body">
            Our Data Analytics service includes data preparation, visualization, and advanced analytics using tools like Power BI, Tableau, and Excel. We also provide business intelligence solutions, performance monitoring, and training to empower your team with actionable insights.
          </div>
        </div>
      </div>
      <div className="accordion-item wow fadeInUp" data-wow-delay=".7s">
        <h5 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq8"
            aria-expanded="false"
            aria-controls="faq8"
          >
            What makes your UX/UI design services unique?
          </button>
        </h5>
        <div
          id="faq8"
          className="accordion-collapse collapse"
          data-bs-parent="#accordion1"
        >
          <div className="accordion-body">
            Our UX/UI design services focus on creating user-centered interfaces that enhance engagement and satisfaction. We combine thorough research with creativity to design intuitive layouts, streamline navigation, and ensure visually appealing designs that reflect your brand.
          </div>
        </div>
      </div>
    </div>
  );
}
