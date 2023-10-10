import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Contact = () => {
  const { contactId } = useParams();

  return (
    <div>
      <h1>Contact</h1>
      <h2>Contacto 2{contactId}</h2>
      <Link to="/contact/contact-team">Contacto 2 Team</Link>
    </div>
  );
};

export default Contact;
