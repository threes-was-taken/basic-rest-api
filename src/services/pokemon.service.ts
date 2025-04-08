import { pokemons } from "../db/pokemons";
import type { Pokemon, PokemonDTO } from "../models/pokemon.model";

class PokemonService {
  async getAllPokemon(): Promise<Pokemon[]> {
    return pokemons;
  }

  async getPokemon(id: number): Promise<Pokemon | null> {
    return pokemons.find((pokemon) => pokemon.id === id) || null;
  }

  async addPokemon(pokemon: PokemonDTO): Promise<Pokemon> {
    const newPokemon = { ...pokemon, id: pokemons.length + 1 };
    pokemons.push(newPokemon);
    return newPokemon;
  }

  async updatePokemon(
    id: number,
    updatedPokemon: Pokemon
  ): Promise<Pokemon | null> {
    const index = pokemons.findIndex((pokemon) => pokemon.id === id);
    if (index === -1) {
      return null;
    }

    const pokemon = { ...pokemons[index], ...updatedPokemon };
    pokemons[index] = pokemon;
    return pokemon;
  }

  async deletePokemon(id: number): Promise<boolean> {
    const index = pokemons.findIndex((pokemon) => pokemon.id === id);
    if (index === -1) {
      return false;
    }
    pokemons.splice(index, 1);
    return true;
  }
}

export default PokemonService;
