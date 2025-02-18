import Animal from "./animal.model";

class Dog extends Animal {
  constructor(
    public id: number,
    public name: string,
    public dateOfBirth: Date,
    public weight: number,
    public height: number,
    public color: string,
    public breed: string,
    public gender: string
  ) {
    super(id, name, dateOfBirth, weight, height, color, breed, gender);
  }
}

export default Dog;
