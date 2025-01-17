import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";

import Cta from "@/components/common/Cta";
import Services from "@/components/otherPages/service/Services";
import TextSlider from "@/components/homes/home-2/TextSlider";
import VideoBox from "@/components/homes/home-2/VideoBox";
import Team from "@/components/homes/home-1/Team";
import Link from "next/link";
import Testimonials from "@/components/homes/home-2/Testimonials";
export const metadata = {
  title: "Services || Habesha Hive - Premier Web Solutions",
  description:
    "Discover Habesha Hive's expert web solutions, tailored to elevate your digital presence and support business growth.",
};

export default function Page() {
  return (
    <>
      <HeaderTop />
      <Header1 />
      <main className="main position-relative" id="mains">
        <div className="breadcrumb-wrapper">
          <div
            className="breadcumb"
            data-bg-src=""
            style={{ backgroundImage: "url(/assets/img/hero/breadcumbBg.png)" }}
          >
            <div className="container">
              <div className="page-heading">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  Services
                </h1>
                <ul
                  className="breadcrumb-items wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <li>
                    <Link scroll={false} href={`/`}>
                      {" "}
                      Home{" "}
                    </Link>
                  </li>
                  <li>
                    <i className="fas fa-chevrons-right" />
                  </li>
                  <li>Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Services />
        <Testimonials />
        {/* <TextSlider /> */}
        {/* <VideoBox /> */}
        {/* <Team /> */}
        {/* <div className="pb-300"></div> */}

        {/* <Cta /> */}
      </main>
      <Footer1 />
    </>
  );
}
