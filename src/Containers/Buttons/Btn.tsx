import { Button } from '@mui/material'
import React from 'react'

type BtnProps = {
  title: string | any;
}

const Btn = ({title}:BtnProps) => {
  return (
    <div>
      <Button variant='contained' sx={{borderRadius: 10}}>
        {title}
      </Button>
    </div>
  )
}

export default Btn
