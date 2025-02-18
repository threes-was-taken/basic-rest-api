import { cats } from "../config/seed";
import Cat from "../models/cat.model";

export async function getCats(): Promise<Cat[]> {
  return cats;
}
