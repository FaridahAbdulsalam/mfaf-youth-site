import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Title from "../Title/Title"
import "./Contact.scss"
import { faEnvelopeOpenText} from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import Btn from "../../Containers/Buttons/Btn"
import { FormEvent, useState } from "react"

const Contact = () => {

    const [result, setResult] = useState<String>("");

  const onSubmit = async (event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "5d0fe3a6-3f33-401c-92f3-eef63807bbf0"); //This access key is for f.salami. Change to MFAF key once complete

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

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
        <form onSubmit={onSubmit}>
            <label htmlFor="name"> Your Name</label>
            <input type="text" name="name" placeholder="Enter your name" required/>

            <label htmlFor="email"> Your Email</label>
            <input type="email" name="email" placeholder="Enter your email" required/>

            <label>Phone Number</label>
            <input type="text" name="phone" placeholder="Enter your mobile number" />

            <label>Message</label>
            <textarea rows={6} placeholder="Type your message here" name="message" required></textarea>

            <button type="submit" className="submit-btn">
                <Btn title={"Send Message"}>
                    <FontAwesomeIcon icon={faPaperPlane} size="sm" id="send_icon" />
                </Btn>
            </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
    </>
  )
}

export default Contact
