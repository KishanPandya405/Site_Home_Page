import React, { useEffect, useState } from "react";
import axios from "axios";

function Footer() {
  const [footerData, setFooterData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchFooterData = async () => {
    try {
      const response = await axios.get(
        "https://api.postman.com/collections/21192250-a50e1277-1ba5-4391-8937-80b388c049d9?access_key=PMAT-01HEAST02Z383GF562ABYFR5RX"
      );
      const settingsData = response.data?.collection?.item?.find(
        (item) => item.name === "Get Settings"
      );
      if (settingsData) {
        setFooterData({
          tagline: "Your Custom Tagline",
          description: "Description fetched from API",
          email: "user@example.com",
          address: "API Address",
          city: "API City",
          country: "API Country",
          phone: "API Phone",
          logo: "Bitmaplogo.png", 
        });
      } else {
        throw new Error("Settings data not found");
      }
    } catch (err) {
      console.error("Error fetching footer data:", err);
      setError("Failed to load footer data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFooterData();
  }, []);

  const footerContainerStyle = {
    backgroundColor: "#e8eeee",
    padding: "40px 20px",
    color: "#333",
    fontFamily: "Arial, sans-serif",
  };

  const footerContentStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "20px",
  };

  const footerSectionStyle = {
    flex: 1,
    margin: "0 15px",
  };

  const footerBottomStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid #ccc",
    paddingTop: "20px",
  };

  const footerNavStyle = {
    display: "flex",
    gap: "15px",
  };

  const footerNavLinkStyle = {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
  };

  if (loading) {
    return <footer style={footerContainerStyle}>Loading footer data...</footer>;
  }

  if (error) {
    return <footer style={footerContainerStyle}>{error}</footer>;
  }

  return (
    <footer style={footerContainerStyle}>
      <div style={footerContentStyle}>
        {/* Tagline Section */}
        <div style={footerSectionStyle}>
          <h3>{footerData?.tagline || "Default Tagline"}</h3>
          <p>{footerData?.description || "Default description"}</p>
          <a href={`mailto:${footerData?.email}`} style={{ color: "#0aa6d1" }}>
            {footerData?.email || "default@email.com"}
          </a>
        </div>

        {/* Address Section */}
        <div style={footerSectionStyle}>
          <h4>Address</h4>
          <p>{footerData?.address || "Default Address"}</p>
          <p>{footerData?.city || "Default City"}</p>
          <p>{footerData?.country || "Default Country"}</p>
        </div>

        {/* Contacts Section */}
        <div style={footerSectionStyle}>
          <h4>Contacts</h4>
          <p>{footerData?.email || "default@email.com"}</p>
          <p>{footerData?.phone || "123-456-7890"}</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={footerBottomStyle}>
        {/* Logo Section */}
        <div>
          <img
            src={footerData?.logo || "/default-logo.png"}
            alt="Logo"
            style={{ height: "50px" }}
          />
        </div>

        {/* Navigation Links */}
        <nav style={footerNavStyle}>
          <a href="/about" style={footerNavLinkStyle}>
            About
          </a>
          <a href="/blogs" style={footerNavLinkStyle}>
            Blogs
          </a>
          <a href="/contact" style={footerNavLinkStyle}>
            Contact
          </a>
          <a href="/services" style={footerNavLinkStyle}>
            Services
          </a>
        </nav>

        {/* Copyright Section */}
        <p>© {new Date().getFullYear()}. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
