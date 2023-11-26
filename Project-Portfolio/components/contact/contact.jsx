import React from 'react';
import "./Contact.css";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const subjectLine = document.getElementById("Subject").value;
    const emailBody = document.getElementById("Message").value;

    const mailtoLink = `mailto:tompanatk@outlook.com?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="contact-build">
        <h1 className="ct-title">Kontakt</h1>
        <label>Ämne</label>
        <input type="text" id="Subject" name="from_name" className="inputs" placeholder="Ämne" />
        <label>Email</label>
        <input type="email" name="from_email" className="inputs" placeholder="E-mail" />
        <label>Meddelande</label>
        <textarea id="Message" name="message" className="send-textarea" placeholder="Meddelande" />
        <input type="submit" value="Skicka" className="btn-press" />
      </form>
    </div>
  );
}

export default Contact;