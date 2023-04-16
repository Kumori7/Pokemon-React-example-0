import PokemonItem from "./PokemonItem";
import Card from "../UI/Card";

const Pokemon = (props) => {
  return (
    <Card>
      <PokemonItem
        region={props.item[0].region}
        name={props.item[0].name}
        level={props.item[0].level}
      />

      <PokemonItem
        region={props.item[1].region}
        name={props.item[1].name}
        level={props.item[1].level}
      />
      <PokemonItem
        region={props.item[2].region}
        name={props.item[2].name}
        level={props.item[2].level}
      />
    </Card>
  );
};

export default Pokemon;
