import React from "react";
import { useQuery, gql } from "@apollo/client";

const POKEMON = gql`
  query GetAllPokemon {
    getAllPokemon {
      key
    }
  }
`;

function Homepage() {
  const { data, loading, error } = useQuery(POKEMON);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return data.getAllPokemon.map((pokemon) => <div>{pokemon.key}</div>);
}

export default Homepage;
