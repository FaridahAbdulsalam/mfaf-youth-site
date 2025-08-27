import { Button } from '@mui/material'

type BtnProps = {
  title: string | any;
  children?: React.ReactNode;
}

const Btn = ({title, children}:BtnProps) => {
  return (
    <div>
      <Button variant='contained' sx={{borderRadius: 10}}>
        {title}
        {children}
      </Button>
    </div>
  )
}

export default Btn
