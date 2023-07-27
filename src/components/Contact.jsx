import React, { useState } from "react";
import vg from "../assets/Hello.gif"
import toast from "react-hot-toast";

const Contact = () => {
    const [name , setName] = useState("");
    const [email, setEmail] = useState("");
    const [message , setMessage] = useState("");
    const submitHandler = (e) => {
          e.preventDefault();
          console.log(name,email,message);
          toast.success("Message Sent");
    }
  return (
    <div id="contact">
      <section>
        <form onSubmit={submitHandler}>
            <h2>Contact Me</h2>
            <input type="text" 
            value={name} onChange={(e) => setName(e.target.value)}
             placeholder='Your Name' required />
            <input type="email" placeholder='Your Email' required 
              value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder='Your Message' required
              value={message} onChange={(e) => setMessage(e.target.value)} />
            <button type='submit'>Send</button>
        </form>
      </section>
      <aside>
        <img src={vg} alt="graphics" />
      </aside>
    </div>
  )
}

export default Contact;
