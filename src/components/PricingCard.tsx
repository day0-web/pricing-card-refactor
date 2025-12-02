import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  features: string[];
  buttonText?: string;
  onButtonClick?: () => void;
  highlighted?: boolean;
}

const PricingCard = ({
  title,
  price,
  period = "/month",
  features,
  buttonText = "Start Trial",
  onButtonClick,
  highlighted = false,
}: PricingCardProps) => {
  return (
    <div
      className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
        highlighted
          ? "bg-primary text-primary-foreground shadow-pricing-highlight"
          : "bg-card text-card-foreground shadow-pricing"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground">
          Most Popular
        </div>
      )}
      
      <h2 className="text-xl font-bold tracking-tight">{title}</h2>
      
      <div className="mt-4 flex items-baseline gap-1">
        <span className={`text-4xl font-bold ${highlighted ? "text-primary-foreground" : "text-price"}`}>
          {price}
        </span>
        <span className={highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}>
          {period}
        </span>
      </div>

      <ul className="mt-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check
              className={`h-5 w-5 flex-shrink-0 ${
                highlighted ? "text-primary-foreground" : "text-price"
              }`}
            />
            <span className={highlighted ? "text-primary-foreground/90" : "text-foreground/80"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        onClick={onButtonClick}
        variant={highlighted ? "secondary" : "default"}
        className="mt-8 w-full"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default PricingCard;
