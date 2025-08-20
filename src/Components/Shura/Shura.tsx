import "./Shura.scss";
import shura_1 from "../../assets/images/shura/Gaphar.jpg";
import shura_2 from "../../assets/images/shura/Faridah.jpg";
import shura_3 from "../../assets/images/shura/Halimah.jpg";
import ShuraMembers from "../../Containers/Shura/ShuraMembers";

const Shura = () => {
  return (
    <div className="shura_team">
      <ShuraMembers
        src={shura_1}
        alt={"Picture of MFAF Youth Amir"}
        name={"Gaphar"}
        postion={"Amir"}
        description={"Is embracing 2 rich, intertwined aspects of my identity"}
      />

      <ShuraMembers
        src={shura_2}
        alt={"Picture of MFAF Youth Amirah"}
        name={"Faridah"}
        postion={"Amirah"}
        description={"Is having an identity I cherish."}
      />

      <ShuraMembers
        src={shura_3}
        alt={"Picture of MFAF Youth Islamic Ed Officer"}
        name={"Halimah"}
        postion={"Islamic Education"}
        description={"means I'm blessed twice - double homicide!"}
      />
    </div>
  );
};

export default Shura;
