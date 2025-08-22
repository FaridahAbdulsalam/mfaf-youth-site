import "./Events.scss";
import events_img from "../../assets/Summer Fair Poster.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";



const Events = () => {
  return (
    <div className="events">
      <div className="events-left">
        <img src={events_img} alt="Image of most recent MFAF Summer Fair Poster" className="events-img"/>
          <FontAwesomeIcon icon={faCirclePlay} size="2xl" className="play-icon"/>
      </div>
      <div className="events-right">
        <h3>Events You Can Expect</h3>
        <h2>Welcome to the family</h2>
        <p>
          Introducing MFAF Youth! Other than being some really cool kidz (seriously, we are)! We're a team of young black Muslims incredibly passionate about creating a purposeful faith led space for the people that look like us. </p> 
          <p>Navigating Islam, culture and growing up in the west isn't always the easiest, so our aim is simple: 
          <strong> We're here to guide, develop and empower Young Black Muslims</strong>
        </p>
        <p>
          We host a whole range of events throughout the year, from socials to fairs, to formal dinners and halaqah's. We also collaborate with other Black Muslim organisations to bring you the best events possible. There's something for everyone, so come and join us!
        </p>
      </div>

    </div>
  )
}

export default Events
