import "./Title.scss";


type TitleProps = {
  title: string;
  subTitle: string;
}

const Title = ({title, subTitle}:TitleProps) => {
  return (
    <div>
       <div className="title">
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
    </div>
  )
}

export default Title
