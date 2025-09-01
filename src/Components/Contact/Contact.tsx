import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Title from "../Title/Title"
import "./Contact.scss"
import { faEnvelopeOpenText} from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import Btn from "../../Containers/Buttons/Btn"

const Contact = () => {
  return (
    <>
    <Title title="Get in Touch" subTitle={"Contact Us"} />
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a Message
         <FontAwesomeIcon icon={faEnvelopeOpenText} size="xl" id="message-icon"/>
        </h3>
        <p> We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us using the form below. Our team is here to assist you and will get back to you as soon as possible.</p>
        <ul>
            <li> 
                <FontAwesomeIcon icon={faEnvelope} className="contact_icon"/>
                mfafyouth@gmail.com
            </li>
            <li>
                <FontAwesomeIcon icon={faWhatsapp} className="contact_icon" />
                079-phone-number
            </li>
            <li>
                <FontAwesomeIcon icon={faInstagram} className="contact_icon"/>
                101 address G0E SH3
            </li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
            <label htmlFor="name"> Your Name</label>
            <input type="text" name="name" placeholder="Enter your name" required/>

            <label htmlFor="email"> Your Email</label>
            <input type="email" name="email" placeholder="Enter your email" required/>

            <label>Phone Number</label>
            <input type="text" name="phone" placeholder="Enter your mobile number" />

            <label>Message</label>
            <textarea rows={6} placeholder="Type your message here" required></textarea>

            <button type="submit" className="submit-btn">
                <Btn title={"Send Message"}>
                    <FontAwesomeIcon icon={faPaperPlane} size="sm" id="send_icon" />
                </Btn>
            </button>
        </form>
        <span></span>
      </div>
    </div>
    </>
  )
}

export default Contact
