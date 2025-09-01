import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Testimonials.scss";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Title from "../../Components/Title/Title";
import TestimonyCard from "../../Components/TestimonialCard/TestimonyCard";
import { testimonyData } from "../../data";

const Testimonials = () => {
  return (
    <>
      <Title title={"What Our Members Say"} subTitle={"Testimonials"} />

      <div className="testimonials">
        <FontAwesomeIcon
          icon={faChevronRight}
          size="2xl"
          className="next-btn"
        />
        <FontAwesomeIcon icon={faChevronLeft} size="2xl" className="back-btn" />
        
        <div className="slider">
          <ul>
            {testimonyData.map((item, index) => (
              <li key={index}>
                <div className="slide">
                  <TestimonyCard
                    name={item.name}
                    about={item.about}    
                    testimony={item.testimony}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>      
      </div>
    </>
  );
};

export default Testimonials;
