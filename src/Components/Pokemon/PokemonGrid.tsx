import { useQuery, gql } from "@apollo/client";
import { FunctionComponent } from "react";
import { Card } from "../Card/Card";

const POKEMON = gql`
  query GetAllPokemon($offset: Int) {
    getAllPokemon(offset: $offset) {
      num
      key
      sprite
      baseSpecies
      types {
        name
      }
    }
  }
`;

type Pokemon = {
  key: string;
  num: number;
  sprite: string;
  baseSpecies: string;
  types: [
    {
      name: string;
    }
  ];
};

type pokemonTypeProps = {
  pokemonType: string;
};

export const PokemonGrid: FunctionComponent<pokemonTypeProps> = (
  props
): JSX.Element => {
  const { data, loading, error } = useQuery(POKEMON, {
    variables: { offset: 88 },
  });

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  const basePokemon = data.getAllPokemon.filter(
    (pokemon: Pokemon) => !pokemon.baseSpecies
  );

  const sortedPokemon = basePokemon.sort(function (a: Pokemon, b: Pokemon) {
    if (a.key < b.key) {
      return -1;
    } else if (a.key > b.key) {
      return 1;
    } else {
      return 0;
    }
  });

  const pokemonByType = props.pokemonType
    ? sortedPokemon.filter((pokemon: Pokemon) =>
        pokemon.types.some(
          (type) => type.name.toLowerCase() === props.pokemonType
        )
      )
    : sortedPokemon;

  console.log(sortedPokemon, "poke sorted");

  return (
    <div className="wrapper">
      {pokemonByType.map((pokemon: Pokemon) => (
        <Card
          key={pokemon.key}
          name={pokemon.key}
          number={pokemon.num}
          image={pokemon.sprite}
        />
      ))}
    </div>
  );
};
