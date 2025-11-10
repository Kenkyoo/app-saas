import { checkoutAction } from "@/lib/payments/actions";
import { Separator } from "@/components/ui/separator";
import { CircleCheck } from "lucide-react";
import { getStripePrices, getStripeProducts } from "@/lib/payments/stripe";
import { SubmitButton } from "./submit-button";

// Prices are fresh for one hour max
export const revalidate = 3600;

export default async function PricingPage() {
  const [prices, products] = await Promise.all([
    getStripePrices(),
    getStripeProducts(),
  ]);

  const basePlan = products.find((product) => product.name === "Base");
  const plusPlan = products.find((product) => product.name === "Plus");
  const proPlan = products.find((product) => product.name === "Pro");
  const ultimatePlan = products.find((product) => product.name === "Ultimate");

  const basePrice = prices.find((price) => price.productId === basePlan?.id);
  const plusPrice = prices.find((price) => price.productId === plusPlan?.id);
  const proPrice = prices.find((price) => price.productId === proPlan?.id);
  const ultimatePrice = prices.find(
    (price) => price.productId === ultimatePlan?.id,
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-6">
      <h1 className="text-5xl sm:text-6xl font-semibold text-center tracking-tighter">
        Pricing
      </h1>
      <div className="mt-12 sm:mt-16 max-w-(--breakpoint-lg) mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <PricingCard
          name={basePlan?.name || "Base"}
          price={basePrice?.unitAmount || 800}
          interval={basePrice?.interval || "month"}
          trialDays={basePrice?.trialPeriodDays || 7}
          features={[
            "Unlimited Usage",
            "Unlimited Workspace Members",
            "Email Support",
          ]}
          priceId={basePrice?.id}
        />
        <PricingCard
          name={plusPlan?.name || "Plus"}
          price={plusPrice?.unitAmount || 1200}
          interval={plusPrice?.interval || "month"}
          trialDays={plusPrice?.trialPeriodDays || 7}
          features={[
            "Everything in Base, and:",
            "Early Access to New Features",
            "24/7 Support + Slack Access",
          ]}
          priceId={plusPrice?.id}
        />
        <PricingCard
          name={proPlan?.name || "Pro"}
          price={proPrice?.unitAmount || 2500}
          interval={proPrice?.interval || "month"}
          trialDays={proPrice?.trialPeriodDays || 7}
          features={[
            "Everything in Base, and:",
            "Early Access to New Features",
            "24/7 Support + Slack Access",
          ]}
          priceId={proPrice?.id}
        />
        <PricingCard
          name={ultimatePlan?.name || "Ultimate"}
          price={ultimatePrice?.unitAmount || 5000}
          interval={ultimatePrice?.interval || "month"}
          trialDays={ultimatePrice?.trialPeriodDays || 7}
          features={[
            "Everything in Base, and:",
            "Early Access to New Features",
            "24/7 Support + Slack Access",
          ]}
          priceId={ultimatePrice?.id}
        />
      </div>
    </div>
  );
}

function PricingCard({
  name,
  price,
  interval,
  trialDays,
  features,
  priceId,
}: {
  name: string;
  price: number;
  interval: string;
  trialDays: number;
  features: string[];
  priceId?: string;
}) {
  return (
    <div key={name} className="border rounded-lg p-6">
      <h3 className="text-lg font-medium">{trialDays}</h3>
      <p className="mt-2 text-4xl font-bold">${price}</p>
      <p className="mt-4 font-medium text-muted-foreground">{interval}</p>
      <Separator className="my-4" />
      <ul className="space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <CircleCheck className="h-4 w-4 mt-1 text-green-600" /> {feature}
          </li>
        ))}
      </ul>
      <form action={checkoutAction}>
        <input type="hidden" name="priceId" value={priceId} />
        <SubmitButton />
      </form>
    </div>
  );
}
