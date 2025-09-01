import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./TestimonyCard.scss"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"

 type TestimonyCardProps = {
    name: string,
    about: string,
    testimony: string,
    }

const TestimonyCard = ({name, about, testimony}: TestimonyCardProps) => {
  

  return (
    <div>
      <div className="user_info">
        <FontAwesomeIcon icon={faCircleUser} size="2xl" className="user_image"/>
        <div>
          <h3>{name}</h3>
          <span>{about}</span>
        </div>
      </div>
      <div className="testimony_card">
        <p>{testimony}</p>
      </div>
    </div>
  )
}

export default TestimonyCard
