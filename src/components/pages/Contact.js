import React, { useState } from "react";
import "./Contact.css";
import Airtable from "airtable";
import axios from "axios"; // Import the axios library

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // New state variable

  const handleSubmit = (event) => {
    event.preventDefault();

    /*Check if the email is undefined or if it is empty. If so, return */
    if (email === undefined || email === "") {
      alert("Please enter your email address!");
      return;
    }

    if (name === undefined || name === "") {
      alert("Please enter your first name!");
      return;
    }

    /*Check if the message is undefined or if it is empty. If so, return */
    if (message === undefined || message === "") {
      alert("Please enter a message!");
      return;
    }

    /* This regex checks if the email input is a valid email. Checks for the @ symbol and for an extension i.e. .com .biz et cetera */
    const regexExp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
    let result = regexExp.test(email);
    if (!result) {
      alert("Email address is not valid!");
      return;
    }
    /* If the email address is valid and the message is not empty */
    /* If the email address is valid and the message is not empty */
    axios
      .post("https://adamsbrandon.onrender.com/contact-form", {
        name,
        email,
        message,
      })
      .then((res) => {
        if (res.status === 200) {
          setIsSubmitted(true); // Set isSubmitted to true when the form is successfully submitted
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <div className="App">
      {isSubmitted ? ( // Check if the form is submitted
        <div>
          <div
            className="thanksmsg"
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "30px",
              paddingTop: "200px",
            }}
          >
            Thank you!
          </div>
          <div
            className="beInTouch"
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "30px",
            }}
          >
            I'll be in touch soon.
          </div>
        </div>
      ) : (
        // Render the contact form if the form is not submitted
        <div className="contain">
          <h2 id="contact" className="contactHeader">
            Let's get in touch!
          </h2>
          <div className="wrapper">
            <div className="contacts">
              <ul>
                <li>
                  I am interested in job opportunities, freelance, and
                  networking.
                </li>
              </ul>
            </div>
            <form
              className="input-form"
              id="contact"
              name="contact"
              required
              onSubmit={handleSubmit}
            >
              <p>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </p>
              <p>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </p>
              <p className="full-width">
                <textarea
                  name="message"
                  placeholder="Message"
                  onChange={(e) => setMessage(e.target.value)}
                  cols="30"
                  rows="7"
                />
              </p>
              <p className="full-width">
                <button type="submit" className="msgBtn">
                  Send a message
                </button>
                
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}