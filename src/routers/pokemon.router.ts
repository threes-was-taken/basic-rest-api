import { type Request, type Response, Router } from "express";
import PokemonService from "../services/pokemon.service";

const router = Router();
const pokemonService = new PokemonService();

// Get all pokemons
router.get("/", async (req: Request, res: Response) => {
  try {
    const pokemons = await pokemonService.getAllPokemon();
    res.json({
      data: pokemons,
      meta: {
        total: pokemons.length,
      },
    });
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
});

// Get a single pokemon by ID
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id ? Number.parseInt(req.params.id, 10) : Number.NaN;

    if (Number.isNaN(id)) {
      res.status(400).send("Invalid ID");
      return;
    }

    const pokemon = await pokemonService.getPokemon(id);

    if (!pokemon) {
      res.status(404).send("Pokemon not found");
      return;
    }

    res.json({
      data: pokemon,
      meta: {
        total: 1,
      },
    });
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
