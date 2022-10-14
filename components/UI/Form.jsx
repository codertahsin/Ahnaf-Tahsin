import React from "react";
import classes from "../../styles/form.module.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_4uooeb4', 'template_b4bx3ot', form.current, 'qP0IDdARH1O9Ek3mt')
      .then((result) => {
          console.log(result.text);
          console.log('Message Sent')
      }, (error) => {
          console.log(error.text);
      });
  };

return (
  <>
<styledContactFrom>
    <form ref={form} onSubmit={sendEmail} className={`${classes.form}`} >
      <div className={`${classes.form__group}`}>
        <input type="text" name="user_name" placeholder="Your Name" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input type="email" name="user_email" placeholder="Email Address" required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea type="text" name="message" rows={5} placeholder="Message" required />
      </div>
      <button className="primary__btn" value="Send" type="submit">
      send
      </button>
      <button className="rst_btn" value="Reset" type="reset">
      Reset
      </button>
    </form>
    </styledContactFrom>
    </>
  );
};

export default Form;
