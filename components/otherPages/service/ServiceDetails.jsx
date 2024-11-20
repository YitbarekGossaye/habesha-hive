"use client";
import Image from "next/image";
import { hours, serviceCategories } from "@/data/services";
import Faq1 from "../faq/Faq1";
import ModalVideo from "react-modal-video";
import { useState } from "react";

export default function ServiceDetails({ serviceItem }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="service-details-section space-top pb-80 fix">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-4">
              <div className="col-12 col-lg-12 order-1 order-md-2">
                <div className="service-details-items">
                  <div className="details-content">
                    <h3 className="wow fadeInUp" data-wow-delay=".6s">
                      {serviceItem.title}
                    </h3>
                    <p className="mt-3 wow fadeInUp" data-wow-delay=".9s">
                      {serviceItem?.summary}
                    </p>
                    <div className="content mt-40">
                      <h4>Benefits With Our Service</h4>
                      <p>Here are some of the key benefits of our service:</p>
                      <ul className="list ps-0 mb-40">
                        {serviceItem.benefits &&
                          serviceItem.benefits.map((benefit, index) => (
                            <li key={index}>
                              <i className="fa-regular fa-circle-check pr-10" />
                              {benefit}
                            </li>
                          ))}
                      </ul>
                    </div>
                    <div
                      className="image-area wow fadeInUp"
                      data-wow-delay="1.6s"
                    >
                      <div className="row g-4 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                          <div className="thumb">
                            <Image
                              alt="Service Image 1"
                              src={serviceItem?.imgDetail1}
                              width={370}
                              height={307}
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                          <div className="thumb">
                            <Image
                              alt="Service Image 2"
                              src={serviceItem?.imgDetail2}
                              width={370}
                              height={307}
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="f2Gzr8sAGB8"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
