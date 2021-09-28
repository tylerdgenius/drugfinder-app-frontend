import Tickets from "../../../assets/user/tickets.svg";
import CallUs from "../../../assets/user/call.svg";
import ChatWithUs from "../../../assets/user/chat.svg";
import SendAMail from "../../../assets/user/email.svg";
import VisitUs from "../../../assets/user/maps-and-flags.svg";

const ContactFlow = (props) => {
  return (
    <div className="contact_flow_container">
      <div className="contact_flow_text">
        <p>
          If you have any complaints, feedback, questions or queries, please do
          not hesitate to contact us. We're always here to help.
        </p>
      </div>
      <div className="icono_row">
        <div className="icono">
          <img src={CallUs} />
          <button>Call Us Today</button>
        </div>
        <div className="icono">
          <img src={ChatWithUs} />
          <button>Chat With Us</button>
        </div>
        <div className="icono">
          <img src={VisitUs} />
          <button>Visit Us</button>
        </div>
        <div className="icono">
          <img src={SendAMail} />
          <button>Send Us A Mail</button>
        </div>
        <div className="icono">
          <img src={Tickets} />
          <button>Submit A Ticket</button>
        </div>
      </div>
    </div>
  );
};

export default ContactFlow;
