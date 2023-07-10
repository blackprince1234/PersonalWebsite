import './contactme.css';
import { useRef } from "react";
import emailjs from '@emailjs/browser';

//Easy scrollable
// Homepage for the website
const ContactMe = () => {
  const form = useRef();
  const sendEmail = (e) => {
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



        <h2 className="title">  Contact Us </h2>


        <form ref={form} onSubmit={sendEmail} className="form">
          <div className="parentName" style = {{width: '100%', display:"flex", flexDirection:"row"}}>
            <div className='FirstName' style={{ width: '50%', }}>
              <h2 className="firstName" style={{ fontSize: '5vh'}}> First Name</h2>
              <input className="Name" type="text" placeholder="First Name" name='user_name' required />
            </div>

            <div className='LastName' style={{ width: '50%', marginTop:"0vh"}}>
              <h2 className="firstName" style={{ fontSize: '5vh' }}> Last Name</h2>
              <input className="Name" type="text" placeholder="Last Name" name='user_name' required />
            </div>
          </div>

          <div className='EmailAddress' style={{ width: '100%', marginTop:"5vh", justifyItems:'center', display:"block"}}>
              <input className="Email" type="email" placeholder="Email" name='user_email' required />

              <input className="Subject" type="text" placeholder="Subject" name="subject" required />
              <textarea className="Message" name="message" cols="30" rows="10">
              </textarea>
              <button className="Button"> Send Message</button>
          </div>





          {/* <input className = "Name" type = "text" placeholder= "Last Name" name = 'user_name' required /> */}



          

        </form>

      </div>

    </section>

  );
}
export default ContactMe