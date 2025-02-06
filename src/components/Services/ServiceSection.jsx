import React, { useRef } from "react";
import "./services.scss";
import emailjs from "@emailjs/browser";
import axios from "axios";

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

          // После успешной отправки email отправляем данные в Telegram
          const formData = new FormData(form.current);
          const name = formData.get("name");
          const email = formData.get("from_name");
          const message = formData.get("message");

          const telegramMessage = `
<b>New Contact Request:</b>

<b>Name:</b> ${name}
<b>Email:</b> ${email}
<b>Message:</b> ${message}
          `;

          axios.post(
            `https://api.telegram.org/bot7590455402:AAG_YFdXHZcsBD4wV41xIMrtcTYx_yfKWjc/sendMessage`,
            {
              chat_id: "-4775727901",
              text: telegramMessage,
              parse_mode: "html",
            }
          );

          // Очищаем форму после отправки
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
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
