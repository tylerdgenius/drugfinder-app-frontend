import ContactFlow from "./ContactFlow";
import "./Contact.css";

const ContactViewPage = () => {
  return (
    <div className="contact_flow">
      <h3>Contact Us</h3>
      <div className="contact_flow_contain">
        <ContactFlow />
      </div>
    </div>
  );
};

export default ContactViewPage;
