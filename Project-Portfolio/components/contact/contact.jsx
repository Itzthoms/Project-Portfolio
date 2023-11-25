import React from 'react';
import "./Contact.css";

function Contact() {

  return (
    <div>

      <form action="mailto:tompanatk@outlook.com" method="get" enctype="text/plain" className="contact-build">
        <h1 className="ct-title">Kontakt</h1>
        <label>Namn</label>
        <input type="text" name="from_name" className="inputs" placeholder="Namn" />
        <label>Email</label>
        <input type="email" name="from_email" className="inputs" placeholder="E-mail" />
        <label>Meddelande</label>
        <textarea name="message" className="send-textarea" placeholder="Meddelande" />
        <input type="submit" value="Skicka" className="btn-press" />
      </form>
        
    </div>
  )
}

export default Contact