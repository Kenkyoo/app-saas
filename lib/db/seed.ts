import { stripe } from "../payments/stripe";
import { db } from "./drizzle";
import { users, teams, teamMembers } from "./schema";
import { hashPassword } from "@/lib/auth/session";

async function createStripeProducts() {
  console.log("Creating Stripe products and prices...");

  // --- 1. Plan Base ($8 USD/mes) ---
  const baseProduct = await stripe.products.create({
    name: "Base",
    description:
      "Plan de suscripción base con acceso a las características esenciales.",
  });

  await stripe.prices.create({
    product: baseProduct.id,
    unit_amount: 800, // $8.00 USD en centavos
    currency: "usd",
    recurring: {
      interval: "month",
      trial_period_days: 7,
    },
  });

  // --- 2. Plan Plus ($12 USD/mes) ---
  const plusProduct = await stripe.products.create({
    name: "Plus",
    description:
      "Plan Plus con acceso a funciones premium y mayor capacidad de uso.",
  });

  await stripe.prices.create({
    product: plusProduct.id,
    unit_amount: 1200, // $12.00 USD en centavos
    currency: "usd",
    recurring: {
      interval: "month",
      trial_period_days: 7,
    },
  });

  // --- 3. Plan Pro ($25 USD/mes) ---
  // Ideal para profesionales o equipos pequeños.
  const proProduct = await stripe.products.create({
    name: "Pro",
    description:
      "Plan Pro con todas las funciones de la plataforma y límites ampliados.",
  });

  await stripe.prices.create({
    product: proProduct.id,
    unit_amount: 2500, // $25.00 USD en centavos
    currency: "usd",
    recurring: {
      interval: "month",
      trial_period_days: 7,
    },
  });

  // --- 4. Plan Ultimate ($50 USD/mes) ---
  // Máximo nivel, perfecto para empresas con grandes demandas.
  const ultimateProduct = await stripe.products.create({
    name: "Ultimate",
    description:
      "Plan Ultimate para empresas, incluye soporte prioritario y capacidad ilimitada.",
  });

  await stripe.prices.create({
    product: ultimateProduct.id,
    unit_amount: 5000, // $50.00 USD en centavos
    currency: "usd",
    recurring: {
      interval: "month",
      trial_period_days: 7,
    },
  });

  console.log("Stripe products and prices created successfully.");
}

async function seed() {
  const email = "test@test.com";
  const password = "admin123";
  const passwordHash = await hashPassword(password);

  const [user] = await db
    .insert(users)
    .values([
      {
        email: email,
        passwordHash: passwordHash,
        role: "owner",
      },
    ])
    .returning();

  console.log("Initial user created.");

  const [team] = await db
    .insert(teams)
    .values({
      name: "Test Team",
    })
    .returning();

  await db.insert(teamMembers).values({
    teamId: team.id,
    userId: user.id,
    role: "owner",
  });

  await createStripeProducts();
}

seed()
  .catch((error) => {
    console.error("Seed process failed:", error);
    process.exit(1);
  })
  .finally(() => {
    console.log("Seed process finished. Exiting...");
    process.exit(0);
  });
