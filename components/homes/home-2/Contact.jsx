"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_60ch0aa", // Replace with your service ID
        "template_f850oqt", // Replace with your template ID
        formData,
        "iLW-ee6XjBaihPqWZ" // Replace with your user ID
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message, please try again.");
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <section className="contact-area">
      <div
        className="contact-wrap style1 fix"
        data-bg-src=""
        style={{ backgroundImage: "url(/assets/img/bg/contactBg1_1.png)" }}
      >
        <div
          className="shape1_1 d-none d-xl-block wow fadeInUp"
          data-wow-delay=".3s"
        >
          <Image
            alt="shape"
            src="/assets/img/shape/contactShape1_1.png"
            width="252"
            height="279"
          />
        </div>
        <div className="container">
          <div className="row gx-0">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <div className="contact-form style1 space-top position-relative">
                <form
                  className="wow fadeInUp"
                  data-wow-delay=".6s"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div
                      className="title-box mb-40 wow fadeInLeft"
                      data-wow-delay=".5s"
                    >
                      <h3 className="section-title mt-10">
                        Feel Free to Contact Us
                      </h3>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <div className="contact__from-input mb-20">
                          <label>Full name*</label>
                          <input
                            type="text"
                            placeholder="Robot fox"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <label>Email Address*</label>
                        <div className="contact__from-input mb-20">
                          <input
                            type="email"
                            placeholder="info@example.com"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-12 wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <div className="form-clt">
                        <span>Message*</span>
                        <textarea
                          className="style2"
                          name="message"
                          placeholder="Write Message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-7 wow fadeInUp" data-wow-delay=".9s">
                      <button type="submit" className="gt-btn gt-btn-icon">
                        SUBMIT NOW
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <div className="contact-map wow fadeInUp" data-wow-delay=".9s">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.585625509112!2d38.763611915121204!3d9.043776893512558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85a7b7c36a89%3A0x69f96c36be1ec6e5!2sSidist%20Kilo%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1693682874850!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
