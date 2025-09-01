import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Testimonials.scss";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Title from "../../Components/Title/Title";
import TestimonyCard from "../../Components/TestimonialCard/TestimonyCard";
import { testimonyData } from "../../data";
import { useRef } from "react";

const Testimonials = () => {

  const slider = useRef<HTMLUListElement | null> (null);
  let tx = 0;

  const handleSlideForward = () => {
    if(tx > -50){
      tx -= 25;
  }
    if(slider.current){
      slider.current.style.transform = `translateX(${tx}%)`;
    }
  }

  const handleSlideBackward = () => {
    if(tx < 0){
      tx += 25;
    } 
    if(slider.current){
      slider.current.style.transform = `translateX(${tx}%)`;
    }
  }

  return (
    <>
      <Title title={"What Our Members Say"} subTitle={"Testimonials"} />

      <div className="testimonials">
        <FontAwesomeIcon
          icon={faChevronRight}
          size="2xl"
          className="next-btn"
          onClick={handleSlideForward}
        />
        <FontAwesomeIcon icon={faChevronLeft} size="2xl" className="back-btn" onClick={handleSlideBackward}/>
        
        <div className="slider">
          <ul ref={slider}>
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
