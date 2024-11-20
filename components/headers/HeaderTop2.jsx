import React from "react";

export default function HeaderTop2() {
  return (
    <div className="header-top-section style2 fix">
      <div className="container">
        <div className="header-top-wrapper">
          <ul className="contact-list">
            <li>
              <i className="far fa-envelope" />
              <a href="mailto:habeshahivesolutions@gmail.com" className="link">
                habeshahivesolutions@gmail.com
              </a>
            </li>
          </ul>
          <div className="top-right">
            <div className="social-icon d-flex align-items-center">
              <ul className="contact-list">
                <li>
                  <i className="fa-solid fa-phone-volume" />
                  <a href="tel:+251951691953">+251951691953</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
