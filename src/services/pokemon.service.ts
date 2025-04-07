import type { Pokemon } from "../models/pokemon.model";

class PokemonService {
  async getAllPokemon(): Promise<Pokemon[]> {
    return [
      {
        id: 1,
        name: "Pikachu",
        type: "Electric",
        level: 50,
      },
      {
        id: 2,
        name: "Charmander",
        type: "Fire",
        level: 50,
      },
      {
        id: 3,
        name: "Squirtle",
        type: "Water",
        level: 50,
      },
      {
        id: 4,
        name: "Bulbasaur",
        type: "Grass",
        level: 50,
      },
    ];
  }

  async getPokemon(id: number): Promise<Pokemon | null> {
    return {
      id,
      name: "Pikachu",
      type: "Electric",
      level: 50,
    };
  }
}

export default PokemonService;
