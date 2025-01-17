import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";

import Cta from "@/components/common/Cta";

import Link from "next/link";
import Faq from "@/components/otherPages/faq/Faq";
export const metadata = {
  title: "FAQ || Habesha Hive - Innovative Web Solutions",
  description:
    "Find answers to common questions about Habesha Hive's web solutions. Learn more about our services and how we can help your business thrive online.",
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
                  Faq
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
                  <li>Faq</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Faq />
        {/* <div className="pb-300"></div> */}
        {/* <Cta /> */}
      </main>
      <Footer1 />
    </>
  );
}
