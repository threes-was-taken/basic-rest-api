import Animal from "./animal.model";

class Cat extends Animal {
  constructor(
    public id: number,
    public name: string,
    public dateOfBirth: Date,
    public weight: number,
    public height: number,
    public color: string,
    public breed: string,
    public gender: string,
    public declawed: boolean,
    public neutered: boolean
  ) {
    super(id, name, dateOfBirth, weight, height, color, breed, gender);
  }
}

export default Cat;
