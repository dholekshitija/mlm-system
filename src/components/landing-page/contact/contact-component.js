import React from 'react';



export const Contact = () => {
  return (
    <header className="col-lg-12 col-sm-12">
      <h1 className="contact-heading">Contact Us</h1>
      <p className="contact-description">Please use the contact details mentioned below if you have any queries.</p>
      <div className="contact-details">
        <div className="contact-info">
          <h2>Email</h2>
          <p>lsa@example.com</p>
        </div>
        <div className="contact-info">
          <h2>Phone</h2>
          <p>+919527701111</p>
        </div>
        <div className="contact-info">
          <h2>Address</h2>
          <p>MIDC Road,Baramati, Pune, Maharashtra, India, 413102</p>
        </div>
      </div>
    </header>
  );
};

export default Contact;