"use client";
import { fancyBoxes } from "@/data/features";
import Link from "next/link";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import { useState } from "react";

export default function About() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="about-area space fix position-reltive">
        <div className="about-wrap style1">
          <div className="shape1_1 d-xl-block d-none">
            <Image
              alt="shape"
              src="/assets/img/shape/aboutShape1_1.png"
              width="270"
              height="733"
            />
          </div>
          <div className="container">
            <div className="about-wrapper style1">
              <div
                className="about-thumb-box wow fadeInLeft"
                data-wow-delay=".4s"
              >
                <div className="about-thumb-box about-thumb1">
                  <Image
                    alt="thumb"
                    src="/assets/img/about/about.png"
                    width="439"
                    height="483"
                  />
                </div>
                <div className="about-thumb-box counter-box style1 movingX">
                  <div className="about-thumb-box counter-box_icon">
                    <Image
                      alt="icon"
                      src="/assets/img/icon/aboutIcon1_1.png"
                      width="52"
                      height="52"
                    />
                  </div>
                  <div className="about-thumb-box counter-box_counter">
                    <div>
                      <span className="counter-number">6,561</span>
                      <span className="plus">+</span>
                    </div>
                    <span>Satisfied Clients</span>
                  </div>
                </div>
                <div className="about-thumb-box line jump d-none d-sm-block" />
              </div>
              <div
                className="about-content wow fadeInRight"
                data-wow-delay=".6s"
              >
                <div className="title-area">
                  <h5 className="subtitle text-start">
                    <span>
                      <Image
                        alt="icon"
                        src="/assets/img/icon/titleIcon.png"
                        width="28"
                        height="12"
                      />
                    </span>{" "}
                    What We Do{" "}
                    <span>
                      <Image
                        alt="icon"
                        src="/assets/img/icon/titleIcon.png"
                        width="28"
                        height="12"
                      />
                    </span>
                  </h5>
                  <h2 className="title text-start">
                    Driving Business Growth Through Innovative Technology
                    Solutions
                  </h2>
                  <p className="text">
                    At Habesha Hive, we empower businesses by delivering
                    tailored digital solutions that streamline operations,
                    enhance engagement, and drive measurable success. Our
                    expertise in web technology helps businesses stay
                    competitive in an evolving digital landscape.
                  </p>
                </div>
                <div className="profile-wrapper">
                  <Link
                    scroll={false}
                    href={`/contact`}
                    className="gt-btn gt-btn-icon"
                  >
                    GET IN TOUCH
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
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
