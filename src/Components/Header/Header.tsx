import { Button } from '@mui/material'
import './Header.scss'
import Btn from '../../Containers/Buttons/Btn'

const Header = () => {
  return (
    <div className='header container'>
      <div className='header_text'>
        <h1>
            GUIDING DEVELOPING EMPOWERING
        </h1>
        <p>A team of young black - super cool - muslims, who are simply passionate about creating a purposeful faith led space for people who look like us</p>
        <Btn title={'Explore more'}/>
      </div>
    </div>
  )
}

export default Header
