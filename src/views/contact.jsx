import React from 'react';
import '../styles/css/contact.css';

function Contact() {
    const email1 = 'l.probst@zfh.de';
    const email2 = 'a.gottschalk@zfh.de';

    return (
        <div className="contact">
            <h1>Kontakt</h1>
            <p>Wenn ihr Fragen habt oder auf Schwierigkeiten stoßt, zögert bitte nicht, uns zu kontaktieren.</p>
            <p className="name">
                Louise Probst (<a href={`mailto:${email1}`}>{email1}</a>)
            </p>
            <p className="name">
                Alexandra Gottschalk (<a href={`mailto:${email2}`}>{email2}</a>)
            </p>
        </div>
    );
}

export default Contact;
