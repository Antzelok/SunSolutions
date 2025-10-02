import { prisma } from "../db/prisma";
import { sampleData } from "./sample-data";

async function main() {
  console.log("Seeding database...");

  await prisma.product.createMany({
    data: sampleData,
    skipDuplicates: true,
  });

  console.log("Seeding complete ✅");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
