import { useQuery, gql } from "@apollo/client";
import { Card } from "./Components/Card";

const POKEMON = gql`
  query GetAllPokemon($offset: Int) {
    getAllPokemon(offset: $offset) {
      num
      key
      sprite
      baseSpecies
    }
  }
`;

type Pokemon = {
  key: string;
  num: number;
  sprite: string;
  baseSpecies: string;
};

function Homepage() {
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

  return (
    <div className="wrapper">
      {sortedPokemon.map((pokemon: Pokemon) => (
        <Card name={pokemon.key} number={pokemon.num} image={pokemon.sprite} />
      ))}
    </div>
  );
}

export default Homepage;
