import React, { useState } from "react";
import axios from "axios";
import "../Styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    budget: "",
    description: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.fname ||
      !formData.lname ||
      !formData.email ||
      !formData.phone ||
      !formData.budget ||
      !formData.description
    ) {
      setError("All fields are required.");
      return;
    }

    try {
      setError("");
      setSuccess("Submitting your request...");

      // API request
      const response = await axios.post(
        "https://api.postman.com/collections/21192250-a50e1277-1ba5-4391-8937-80b388c049d9?access_key=PMAT-01HEAST02Z383GF562ABYFR5RX",
        {
          fname: formData.fname,
          lname: formData.lname,
          email: formData.email,
          phone: formData.phone,
          budget: formData.budget,
          description: formData.description,
        }
      );

      if (response.status === 200) {
        setSuccess("Your message has been sent successfully!");
        setFormData({
          fname: "",
          lname: "",
          email: "",
          phone: "",
          budget: "",
          description: "",
        });
      } else {
        setError("Failed to send your message. Please try again.");
      
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("An error occurred while sending your message.");
    }
  };

  return (
    <div className="contact">
      <small>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua
      </small>
      <form onSubmit={handleSubmit} className="contact-form">
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  value={formData.fname}
                  onChange={handleChange}
                  style={{
                    padding: 8,
                    margin: 8,
                    borderBottom: "solid 1px #ccc",
                    borderLeft: "solid 1px #fff",
                    borderRight: "solid 1px #fff",
                    borderTop: "solid 1px #fff",
                    width: "95%",
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  value={formData.lname}
                  onChange={handleChange}
                  style={{
                    padding: 8,
                    margin: 8,
                    borderBottom: "solid 1px #ccc",
                    borderLeft: "solid 1px #fff",
                    borderRight: "solid 1px #fff",
                    borderTop: "solid 1px #fff",
                    width: "95%",
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    padding: 8,
                    margin: 8,
                    borderBottom: "solid 1px #ccc",
                    borderLeft: "solid 1px #fff",
                    borderRight: "solid 1px #fff",
                    borderTop: "solid 1px #fff",
                    width: "95%",
                  }}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    padding: 8,
                    margin: 8,
                    borderBottom: "solid 1px #ccc",
                    borderLeft: "solid 1px #fff",
                    borderRight: "solid 1px #fff",
                    borderTop: "solid 1px #fff",
                    width: "95%",
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="number"
                  name="budget"
                  placeholder="Budget"
                  value={formData.budget}
                  onChange={handleChange}
                  style={{
                    padding: 8,
                    margin: 8,
                    borderBottom: "solid 1px #ccc",
                    borderLeft: "solid 1px #fff",
                    borderRight: "solid 1px #fff",
                    borderTop: "solid 1px #fff",
                    width: "95%",
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleChange}
                  style={{
                    padding: 8,
                    margin: 8,
                    borderBottom: "solid 1px #ccc",
                    borderLeft: "solid 1px #fff",
                    borderRight: "solid 1px #fff",
                    borderTop: "solid 1px #fff",
                    width: "95%",
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button
          type="submit"
          style={{
            background: "#FF6400",
            border: "none",
            color: "#FFF",
            padding: 15,
            width: 200,
            borderRadius: 50,
            marginTop: 20,
          }}
        >
          Submit
        </button>
      </form>
      {error && <p style={{ color: "red", marginTop: "100px" }}>{error}</p>}
      {success && <p style={{ color: "green", marginTop: "1px" }}>{success}</p>}
    </div>
  );
};

export default Contact;
