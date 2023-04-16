import Card from "../UI/Card";
import "./PokemonItem.css";

const PokemonItem = (props) => {
  return (
    <Card className="pokemon-item">
      <div className="pokemon-region" >Region: {props.region}</div>
      <div className="pokemon-item__name">
        <h2>{props.name}</h2>
      </div>
      <div className="pokemon-item__level">level: {props.level}</div>

    </Card>
  );
};

export default PokemonItem;
