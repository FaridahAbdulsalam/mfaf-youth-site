import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Footer.scss"
import { faCopyright } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  return (
    <>
        <div className="footer">
        <p><FontAwesomeIcon icon={faCopyright} /> 2024 MFAF Youth. All rights reserved.</p>
        <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
        </ul>
        </div>
    </>
  )
}

export default Footer
