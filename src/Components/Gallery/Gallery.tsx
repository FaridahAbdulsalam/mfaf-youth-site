import "./Gallery.scss"
import gallery1 from "../../assets/gallery/gallery1.jpeg"
import gallery2 from "../../assets/gallery/gallery2.jpeg"
import gallery3 from "../../assets/gallery/gallery3.jpeg"
import gallery4 from "../../assets/gallery/gallery4.jpeg"
import Title from "../Title/Title"
import Btn from "../../Containers/Buttons/Btn"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"



const Gallery = () => {
  return (
    <>
     <Title title={'MFAF Youth in Action'} subTitle={'Gallery'}/>
        <div className="gallery">
            <div className="gallery-photos">
                <img src= {gallery1} alt="" />
                <img src= {gallery2} alt="" />
                <img src= {gallery3} alt="" />
                <img src= {gallery4} alt="" />
            </div> 
            <Btn title={"See more here"}>
                <FontAwesomeIcon icon={faArrowRight} style={{color:"#ffff", paddingLeft:" 10px"}} />
            </Btn>
        </div>
    </>
  )
}

export default Gallery
