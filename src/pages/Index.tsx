import PricingCard from "@/components/PricingCard";

const Index = () => {
  const plans = [
    {
      title: "Basic Plan",
      price: "$9.99",
      features: ["1 GB Storage", "Basic Support", "All Core Features"],
    },
    {
      title: "Pro Plan",
      price: "$19.99",
      features: ["10 GB Storage", "Priority Support", "All Core Features", "Advanced Analytics"],
      highlighted: true,
    },
    {
      title: "Enterprise",
      price: "$49.99",
      features: ["Unlimited Storage", "24/7 Support", "All Features", "Custom Integrations", "Dedicated Manager"],
    },
  ];

  return (
    <main className="min-h-screen bg-background px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the plan that works best for you
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard
              key={plan.title}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              highlighted={plan.highlighted}
              onButtonClick={() => console.log(`Selected: ${plan.title}`)}
            />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Index;
