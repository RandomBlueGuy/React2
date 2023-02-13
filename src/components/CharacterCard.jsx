import "./styles.css";
import data from "../assets/data.json"



const CharacterCard = (props) => {
  console.log("estos son los props: " + props);
  return (<article className="characterCard">
    <div className="characterImagen">
    <img src= {props.image} alt= "Blue Footprint Guy"/>
    </div>

    <div className="characterContent">
  
      <div className="section">
        <h2>{props.name}</h2>
        <span className="status">
          <span className = {`status__icon status__${props.status.toLowerCase()} `}></span>
          {props.status} - {props.species}
        </span>
      </div>

      <div className="section">
        <span className="text-gray">Last known location:</span>
        <span className="status">
          {props.lastLocation}
        </span>
      </div>

      <div className="section">
        <span className="text-gray">First seen in:</span>
        <a href={props.episode[0]}>{props.episode[0]}</a>
      </div>
    </div>
  </article>)
};

export default CharacterCard;
