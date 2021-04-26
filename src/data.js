import faker from "faker";

export const data = [...Array(40)].map((item) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    image: faker.random.image(),
    price: faker.commerce.price(),
    material: faker.commerce.productMaterial(),
    brand: faker.lorem.word(),
    inStock: faker.datatype.boolean(),
    quantity:0,
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
    offer: faker.random.arrayElement([
      "Buy 2 Get 1 Free",
      "Missing You 50%",
      "Diwali Celebrations"
    ]),
    idealFor: faker.random.arrayElement([
      "Men",
      "Women",
      "Girl",
      "Boy",
      "Senior"
    ]),
    color: faker.commerce.color()
  }));