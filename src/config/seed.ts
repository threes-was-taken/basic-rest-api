import dayjs from "dayjs";
import Cat from "../models/cat.model";
import Dog from "../models/dog.model";

const cats: Cat[] = [
  new Cat(
    1,
    "Whiskers",
    dayjs("2020-06-15").toDate(),
    4.5,
    25,
    "Gray",
    "Siamese",
    "Male",
    false,
    true
  ),
  new Cat(
    2,
    "Mittens",
    dayjs("2019-09-22").toDate(),
    5.2,
    28,
    "Black",
    "Persian",
    "Female",
    true,
    true
  ),
  new Cat(
    3,
    "Luna",
    dayjs("2021-03-10").toDate(),
    3.8,
    23,
    "White",
    "Maine Coon",
    "Female",
    false,
    false
  ),
  new Cat(
    4,
    "Simba",
    dayjs("2018-12-03").toDate(),
    6.0,
    30,
    "Orange",
    "Tabby",
    "Male",
    true,
    true
  ),
  new Cat(
    5,
    "Shadow",
    dayjs("2022-08-19").toDate(),
    4.0,
    27,
    "Black and White",
    "Ragdoll",
    "Male",
    false,
    false
  ),
];

const dogs: Dog[] = [
  new Dog(
    6,
    "Buddy",
    dayjs("2017-05-12").toDate(),
    25.5,
    55,
    "Golden",
    "Golden Retriever",
    "Male"
  ),
  new Dog(
    7,
    "Bella",
    dayjs("2020-10-30").toDate(),
    10.0,
    40,
    "Brown",
    "Beagle",
    "Female"
  ),
  new Dog(
    8,
    "Max",
    dayjs("2019-02-05").toDate(),
    30.2,
    60,
    "Black",
    "Labrador",
    "Male"
  ),
  new Dog(
    9,
    "Daisy",
    dayjs("2021-07-18").toDate(),
    7.5,
    35,
    "White",
    "Poodle",
    "Female"
  ),
  new Dog(
    10,
    "Rocky",
    dayjs("2016-04-25").toDate(),
    35.0,
    70,
    "Brindle",
    "German Shepherd",
    "Male"
  ),
];

export { cats, dogs };
