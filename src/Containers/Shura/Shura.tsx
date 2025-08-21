import "./Shura.scss";
import MyCarousel from "../../Containers/Carousel/MyCarousel";
import Title from "../../Components/Title/Title";

const Shura = () => {
  return (
    <div className="shura_team">
      <Title title={"Meet The Shura"} subTitle={"Who We Are"}/>
      <MyCarousel/>
    </div>
  
  );
};

export default Shura;
