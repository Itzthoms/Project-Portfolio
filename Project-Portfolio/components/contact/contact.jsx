import React from 'react';
import "./Contact.css";

var body = document.getElementById("Message").value;
var SubjectLine = document.getElementById("Subject").value;
window.location.href = "mailto:mail@example.com?subject="+SubjectLine+"&body="+body;

function Contact() {

  return (
    <div>

      <form action="mailto:tompanatk@outlook.com" method="get" enctype="text/plain" className="contact-build">
        <h1 className="ct-title">Kontakt</h1>
        <label>Ämne</label>
        <input type="text" name="from_name" className="inputs" placeholder="Ämne" />
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