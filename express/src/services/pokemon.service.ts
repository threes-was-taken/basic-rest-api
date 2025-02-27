import { Pokemon } from "../models/pokemon.model";

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
    ];
  }

  async getPokemon(id: number): Promise<Pokemon> {
    return {
      id,
      name: "Pikachu",
      type: "Electric",
      level: 50,
    };
  }
}

export default PokemonService;
