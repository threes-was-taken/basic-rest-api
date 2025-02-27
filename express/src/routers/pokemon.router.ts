import { Router, Request, Response } from "express";
import PokemonService from "../services/pokemon.service";

const router = Router();
const pokemonService = new PokemonService();

// Get all pokemons
router.get("/", async (req: Request, res: Response) => {
  try {
    const pokemons = await pokemonService.getAllPokemon();
    res.json(pokemons);
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
});

// Get a single pokemon by ID
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id ? parseInt(req.params.id, 10) : NaN;

    if (isNaN(id)) {
      res.status(400).send("Invalid ID");
      return;
    }

    const pokemon = await pokemonService.getPokemon(id);

    if (pokemon) {
      res.json(pokemon);
    } else {
      res.status(404).send("Pokemon not found");
    }
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
});

// Add a new pokemon
router.post("/", (req: Request, res: Response) => {});

// Update a pokemon by ID
router.put("/:id", (req: Request, res: Response) => {});

// Delete a pokemon by ID
router.delete("/:id", (req: Request, res: Response) => {});

export default router;
