import './contactme.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';


import { useRef } from "react";
import emailjs from '@emailjs/browser';

//Easy scrollable
// Homepage for the website
const ContactMe = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate('/');
  const [isOpen, setIsOpen] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    setIsOpen(true);
    e.preventDefault();

    emailjs.sendForm('service_c4wn252', 'template_696d89r', form.current, 'A_8sG56Pnxw1AVe3P')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();




  };

  return (
    <section className="ContactMe">
      <div className="container">



        <h2 className="title">  Contact Me </h2>


        <form ref={form} onSubmit={sendEmail} className="form">
          <input className="Name" type="text" placeholder="Name" name='user_name' required />

          <div className='EmailAddress' style={{ width: '100%', marginTop: "10px", justifyItems: 'center', display: "block" }}>
            <input className="Email" type="email" placeholder="Email" name='user_email' required />

            <input className="Subject" type="text" placeholder="Subject" name="subject" required />
            <textarea className="Message" placeholder="Type your message here . . . " name="message" cols="30" rows="10">
            </textarea>
            <button className="Button"> Send Message</button>
          </div>












        </form>

        <ReactModal 
          isOpen={isOpen}
          contentLabel="Example Modal"
          onRequestClose={() => setIsOpen(false)}
          className="Modal"
        >
          Message Sent!
        </ReactModal>

      </div>
      <button className="return" onClick={handleClick}> Back </button>


    </section>

  );
}
export default ContactMe
