import React from "react";
import emailjs from "emailjs-com";

export default function FeedbackForm(props) {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o8gqi24",
        "template_42mjtkp",
        e.target,
        "user_fe7ccRbHjHCGPzULNWQoi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <React.Fragment>
      <form autocomplete="off" onSubmit={sendEmail}>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              name="subject"
              className="input is-link"
              type="text"
              placeholder="Email"
            ></input>
          </div>
        </div>

        <div className="field">
          <label className="label">Subject</label>
          <div className="control">
            <input
              name="subject"
              className="input is-link"
              type="text"
              placeholder="Subject"
            ></input>
          </div>
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control has-icons-left">
            <textarea
              name="message"
              className="textarea is-link"
              type="text"
              placeholder="Message"
            ></textarea>
          </div>

          <input
            type="submit"
            className="button is-link sendMessageButton"
            value="Send Message"
          ></input>
        </div>
      </form>
    </React.Fragment>
  );
}
