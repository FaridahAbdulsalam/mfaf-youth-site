import './ShuraMembers.scss'


type ShuraMembersProps = {
    src: string
    alt: string
    name: string
    postion: string
    description: string
}
const ShuraMembers = ({src, alt, name, postion, description}: ShuraMembersProps) => {
  return (
    <div className="shura_individual">
      <img src={src} alt={alt}/>
      <div className="caption">
        <h3>{name}</h3>
        <h4>The Coolest {postion}</h4>
        <p>Being Black & Muslim {description}</p>
      </div>
    </div>
  )
}

export default ShuraMembers
