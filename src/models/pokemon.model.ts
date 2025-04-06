import { z } from "zod";

export const pokemonDTOSchema = z.object({
  name: z.string(),
  type: z.string(),
  level: z.number(),
});

export type PokemonDTO = z.infer<typeof pokemonDTOSchema>;

export const pokemonSchema = pokemonDTOSchema.extend({
  id: z.number(),
});

export type Pokemon = z.infer<typeof pokemonSchema>;
