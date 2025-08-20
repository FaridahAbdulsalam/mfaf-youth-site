import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import amir from "../../assets/images/shura/Gaphar.jpg";
import amirah from "../../assets/images/shura/Faridah.jpg";
import islamicEd from "../../assets/images/shura/Halimah.jpg";
import "./myCarousel.scss";
import ShuraMembers from "../Shura/ShuraMembers";
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
      <h1>My Carousel</h1>
      <Carousel responsive={responsive}>{shuraCard}</Carousel>
    </div>
  );
};

export default MyCarousel;
