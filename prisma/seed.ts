import { PrismaClient } from "../generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import * as dotenv from "dotenv";

dotenv.config();

const adapter = new PrismaPg(process.env.DATABASE_URL!);
const prisma = new PrismaClient({ adapter });

async function main() {
  // Starter schools — replace with your own data
  const school1 = await prisma.school.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Lycée Al Khawarizmi",
      city: "Casablanca",
      region: "Casablanca-Settat",
    },
  });

  const school2 = await prisma.school.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: "Lycée Imam Malik",
      city: "Rabat",
      region: "Rabat-Salé-Kénitra",
    },
  });

  await prisma.listing.upsert({
    where: { id: 1 },
    update: {},
    create: {
      schoolId: school1.id,
      plan: "premium",
      monthlyFee: 300,
    },
  });

  await prisma.listing.upsert({
    where: { id: 2 },
    update: {},
    create: {
      schoolId: school2.id,
      plan: "free",
    },
  });

  console.log("Seed complete:", { school1, school2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
