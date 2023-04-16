import Pokemon from "./component/Pokemon/Pokemon";

function App() {
  const pokemonData = [
    {
      id: "p1",
      name: "Sobble",
      level: 7,
      region: "Galar",
    },
    {
      id: "p2",
      name: "Pikachu",
      level: 17,
      region: "Kanto",
    },
    {
      id: "p3",
      name: "Rayquaza",
      level: 77,
      region: "Hoenn",
    },
  ];

  return (
    <div>
      <h1> Pokemon React List </h1>
      <Pokemon item={pokemonData}/>
    </div>
  );
}

export default App;
