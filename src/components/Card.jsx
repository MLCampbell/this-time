import react from "react"

function Card(props) {
    return <div className={props.class}>
      <h2>{props.name}</h2>
      <img
        src={props.img}
        alt="avatar_img"
      />
      <p>{props.tel}</p>
      <p>{props.mail}</p>
    </div>
  }

  export default Card;