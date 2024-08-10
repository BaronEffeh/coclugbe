import React from "react";
import ContactHead from "../components/contact/ContactHead/ContactHead";
import ContactBody from "../components/contact/ContactBody/ContactBody";

const ContactPage = () => {
   return (
      <div className="contactPage">
         <ContactHead />

         <ContactBody />
      </div>
   );
}

export default ContactPage;