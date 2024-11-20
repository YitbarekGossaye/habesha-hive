"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [statusMessage, setStatusMessage] = useState("");
  const form = useRef(null);

  const sendMail = async (e) => {
    e.preventDefault();
    setStatusMessage(""); // Clear status message on new submit

    try {
      const res = await emailjs.sendForm(
        "service_60ch0aa", // Replace with your EmailJS service ID
        "template_f850oqt", // Replace with your EmailJS template ID
        form.current,
        "iLW-ee6XjBaihPqWZ" // Replace with your EmailJS public key
      );

      if (res.status === 200) {
        setStatusMessage("Message sent successfully!");
        form.current.reset();
      } else {
        setStatusMessage("Oops! Message not sent. Please try again.");
      }
    } catch (error) {
      setStatusMessage("Error sending message. Please try again later.");
      console.error("Email sending error: ", error);
    }
  };

  return (
    <section className="contact-section fix space">
      <div className="container">
        <div className="contact-wrapper-2">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="contact-left-items">
                <div className="contact-info-area-2">
                  <div className="contact-info-items">
                    <div className="content">
                      <p>Call Us 7/24</p>
                      <h3>
                        <a href="tel:+251951691953">+251951691953</a>
                      </h3>
                    </div>
                  </div>
                  <div className="contact-info-items">
                    <div className="content">
                      <p>Make a Quote</p>
                      <h3>
                        <a href="mailto:habeshahivesolutions@gmail.com">
                          habeshahivesolutions@gmail.com
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="contact-info-items border-none">
                    <div className="content">
                      <p>Location</p>
                      <h3>Addis Ababa, Ethiopia</h3>
                    </div>
                  </div>
                </div>
                <div className="video-image">
                  <Image
                    alt="Contact image"
                    src="/assets/img/bg/cont.png"
                    width={440}
                    height={193}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-content">
                <div className="title-area">
                  <h5 className="subtitle text-start">
                    <span>
                      <Image
                        alt="icon"
                        src="/assets/img/icon/titleIcon.png"
                        width={28}
                        height={12}
                      />
                    </span>{" "}
                    Contact us{" "}
                    <span>
                      <Image
                        alt="icon"
                        src="/assets/img/icon/titleIcon.png"
                        width={28}
                        height={12}
                      />
                    </span>
                  </h5>
                  <h2 className="title mb-50">
                    Ready to Start Your Journey with Habesha Hive?
                  </h2>
                  <p>
                    Join Habesha Hive and take the first step towards
                    connecting with a vibrant community. Whether you're here
                    to grow, collaborate, or innovate, we're here to support
                    your journey. Let’s build something amazing together!
                  </p>
                </div>
                <form
                  ref={form}
                  onSubmit={sendMail}
                  className="contact-form-items"
                >
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <span>Your name*</span>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <span>Your Email*</span>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <span>Write Message*</span>
                        <textarea
                          name="message"
                          id="message"
                          required
                          placeholder="Write Message"
                        />
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <button type="submit" className="gt-btn">
                        Send Message
                        <i className="fa-solid fa-arrow-right-long ms-1" />
                      </button>
                    </div>
                  </div>
                </form>
                {statusMessage && (
                  <p className="status-message">{statusMessage}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
