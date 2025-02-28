import React from 'react'


type ShuraMembersProps = {
    src: string
    alt: string
}
const ShuraMembers = ({src, alt}: ShuraMembersProps) => {
  return (
    <div >
      <img src={src} alt={alt}/>
    </div>
  )
}

export default ShuraMembers
