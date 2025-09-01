import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Testimonials.scss'
import { faChevronLeft, faChevronRight, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import Title from '../Title/Title'

const Testimonials = () => {
  return (
    <>
        <Title title={'What Our Members Say'} subTitle={'Testimonials'}/>

        <div className='testimonials'>
          <FontAwesomeIcon icon={faChevronRight} size="2xl" className='next-btn' />
          <FontAwesomeIcon icon={faChevronLeft} size="2xl" className='back-btn'/>
          <div className="slider">
            <ul>
              <li>
                <div className="slide">
                  <div className="user_info">
                    <FontAwesomeIcon icon={faCircleUser} size="2xl" className='user_image' />
                    <div>
                      <h3>John Doe</h3>
                      <span>Member since 2020</span>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </li>
                <li>
                <div className="slide">
                  <div className="user_info">
                    <FontAwesomeIcon icon={faCircleUser} size="2xl" className='user_image' />
                    <div>
                      <h3>John Doe</h3>
                      <span>Member since 2020</span>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </li>
                <li>
                <div className="slide">
                  <div className="user_info">
                    <FontAwesomeIcon icon={faCircleUser} size="2xl" className='user_image' />
                    <div>
                      <h3>John Doe</h3>
                      <span>Member since 2020</span>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </li>
                <li>
                <div className="slide">
                  <div className="user_info">
                    <FontAwesomeIcon icon={faCircleUser} size="2xl" className='user_image' />
                    <div>
                      <h3>John Doe</h3>
                      <span>Member since 2020</span>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default Testimonials
