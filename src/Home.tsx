import { Button } from "./Components/Button/Button";
import { PokemonGrid } from "./Components/Pokemon/PokemonGrid";
import React, { useState } from "react";

const pokemonTypes = [
  "bug",
  "dark",
  "dragon",
  "electric",
  "fairy",
  "fighting",
  "fire",
  "flying",
  "ghost",
  "grass",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "steel",
  "water",
];

function Homepage() {
  const [pokemonType, setPokemonType] = useState("");
  console.log(pokemonType);
  const handleTypeChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    document.getElementsByClassName("active")[0]?.classList.remove("active");
    setPokemonType(event.currentTarget.name);
    event.currentTarget.classList.add("active");
  };

  return (
    <div className="wrapper">
      <div className="buttonWrapper">
        {pokemonTypes.map((type) => (
          <Button
            key={type}
            name={type}
            onClick={handleTypeChange}
            content={type.toUpperCase()}
          />
        ))}
      </div>
      <PokemonGrid pokemonType={pokemonType} />
    </div>
  );
}

export default Homepage;
