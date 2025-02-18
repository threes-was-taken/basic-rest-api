import { dogs } from "../config/seed";
import Dog from "../models/dog.model";

export async function getDogs(): Promise<Dog[]> {
  return dogs;
}
