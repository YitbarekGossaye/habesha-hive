import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";

// import Cta from "@/components/common/Cta";
import Contact from "@/components/otherPages/contact/Contact";
import Map from "@/components/otherPages/contact/Map";
import Link from "next/link";
export const metadata = {
  title: "Contact || Habesha Hive - Innovative Web Solutions",
  description:
    "Get in touch with Habesha Hive for expert web solutions and personalized service. We're here to help you achieve your digital goals.",
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
                  Contact
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
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Contact />
        <Map />
        {/* <Cta /> */}
      </main>
      <Footer1 />
    </>
  );
}
