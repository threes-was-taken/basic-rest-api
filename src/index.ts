import express from "express";
import pokemonRouter from "./routers/pokemon.router";

const app = express();
const port = 3000;

app.use("/api/pokemons", pokemonRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
