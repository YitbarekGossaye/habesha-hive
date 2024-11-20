import React from "react";

export default function Map() {
  return (
    <div className="map-section wow fadeInUp" data-wow-delay=".6s">
      <div className="map-items">
        <div className="googpemap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.1733196233927!2d38.76279061479123!3d9.038333192932864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b856aa6cb53c9%3A0x8dbed8b5a4b9d9c5!2sSidist%20Kilo%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2s!4v1641984054261!5m2!1sen!2s"
            style={{ border: 0, width: "100%", height: "400px" }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
