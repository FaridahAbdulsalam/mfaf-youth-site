import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./myCarousel.scss";
import ShuraMembers from "../../Components/ShuraMembers/ShuraMembers";
import { responsive, shuraMembersData } from "../../data";

const MyCarousel = () => {
  const shuraCard = shuraMembersData.map((item) => (
    <ShuraMembers
      src={item.src}
      alt={item.alt}
      name={item.name}
      postion={item.position}
      description={item.description}
    />
  ));

  return (
    <div>
      <Carousel responsive={responsive}>{shuraCard}</Carousel>
    </div>
  );
};

export default MyCarousel;
