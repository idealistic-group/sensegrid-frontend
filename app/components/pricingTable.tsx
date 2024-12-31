import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import React from "react";
import { Button } from "~/components/ui/button";
import { ChevronRight } from "lucide-react";

const pricingPlans = [
  {
    name: "Free Tier",
    price: "$0",
    description: "Perfect for testing and exploration",
    features: [
      "100 queries/month",
      "1 market niche tracking",
      "7-day historical data",
      "Basic dashboard access",
      "Community support",
      "Basic trend alerts",
      "Daily data refresh",
    ],
  },
  {
    name: "Starter",
    price: "$19",
    description: "Perfect for solopreneurs and individual researchers",
    features: [
      "1,000 queries/month",
      "3 market niches tracking",
      "30-day historical data",
      "Basic reporting dashboard",
      "Email support",
      "Single user access",
      "Daily data refresh",
      "Basic trend alerts",
      "Basic API access",
    ],
  },
  {
    name: "Professional",
    price: "$69",
    description: "Ideal for growing businesses and teams",
    features: [
      "5,000 queries/month",
      "10 market niches tracking",
      "90-day historical data",
      "Advanced reporting & exports",
      "Priority email support",
      "5 user seats",
      "Competitive analysis",
      "Custom alerts",
      "Full API access",
      "Real-time data refresh",
      "Quarterly strategy call",
    ],
  },
];

export default function PricingTable() {
  const [expandedPlans, setExpandedPlans] = React.useState<{
    [key: string]: boolean;
  }>({});

  const toggleFeatures = (planName: string) => {
    setExpandedPlans((prev) => ({
      ...prev,
      [planName]: !prev[planName],
    }));
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold mb-[100px]">SenseGrid Pricing</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 space-x-4">
        {pricingPlans.map((plan, index) => {
          const isExpanded = expandedPlans[plan.name];
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const displayFeatures = isExpanded
            ? plan.features
            : plan.features.slice(0, 5);
          const hasMoreFeatures = plan.features.length > 5;

          return (
            <Card
              key={plan.name}
              className={`flex flex-col ${
                index === 1 ? "border-2 border-neutral-900" : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="text-[36px] font-extrabold">
                  {plan.name}
                </CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-[28px] font-extrabold">
                    {plan.price}
                  </span>
                  {plan.price !== "$0" && (
                    <span className="text-muted-foreground"> /month</span>
                  )}
                </div>
                <Button className="rounded-3xl hover:shadow-lg shadow-md hover:shadow-emerald-600/50 border bg-emerald-600 hover:bg-transparent hover:bg-emerald-600 border-neutral-900 px-4 py-4 text-sm font-semibold transition-all duration-700 ease-in-out mt-8 w-32">
                  Get started
                </Button>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul
                  className={`space-y-3 transition-all duration-500 ease-in-out ${
                    isExpanded ? "max-h-[1000px]" : "max-h-[200px]"
                  } overflow-hidden`}
                >
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <ChevronRight />
                      {feature}
                    </li>
                  ))}
                </ul>
                {hasMoreFeatures && (
                  <button
                    onClick={() => toggleFeatures(plan.name)}
                    className="mt-4 text-sm text-primary hover:underline transition-all duration-300 ease-in-out cursor-pointer"
                  >
                    {isExpanded
                      ? "View less"
                      : `View ${plan.features.length - 5} more features`}
                  </button>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
