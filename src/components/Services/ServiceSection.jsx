import React, { useRef } from "react";
import "./services.scss";
import emailjs from "@emailjs/browser";

const ServiceSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y7pnbtt",
        "template_razer-service",
        form.current,
        "W2IgaM1jnAjL_Mna7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };
  return (
    <>
      <div className="service-form">
        <h1>CONTACT US</h1>
        <form ref={form} onSubmit={sendEmail}>
          <input
            required
            name="name"
            className="inp inp1"
            placeholder="Your name"
          />
          <input
            required
            name="from_name"
            className="inp inp2"
            type="email"
            placeholder="Your email"
          />
          <input
            className="inp inp3"
            placeholder="Message"
            name="message"
            required
          />
          <input className="btn" type="submit" value="Send" />
        </form>
      </div>
    </>
  );
};

export default ServiceSection;
