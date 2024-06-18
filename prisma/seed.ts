import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();
async function main() {
  console.log("Start");
  for (let i = 0; i < 50; i++) {
    await prisma.posts.create({
      data: {
        title: faker.word.words({ count: { min: 1, max: 5 } }),
        content: faker.lorem.sentences({ min: 30, max: 70 }),
      },
    });
    console.log(i + 1);
  }
  console.log("End");
}
main();
