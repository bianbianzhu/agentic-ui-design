import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "/mo",
      features: [
        "Up to 100 students",
        "Basic analytics",
        "Core content library",
        "Email support",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$149",
      period: "/mo",
      features: [
        "Up to 500 students",
        "Advanced analytics",
        "Full content library",
        "AI personalization",
        "Priority support",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Unlimited students",
        "Custom integrations",
        "Dedicated success manager",
        "White-label options",
        "24/7 support",
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="bg-white px-[3.3vw] py-32" id="pricing">
      <div className="max-w-[1700px] mx-auto">
        <h2 className="text-[3.5rem] font-normal tracking-wide mb-24">
          PRICING
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-12 ${
                plan.highlighted
                  ? "border-2 border-black relative"
                  : "border border-gray-200 hover:border-gray-400"
              } transition-colors`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 rounded-full text-sm font-light">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-3xl font-light mb-4">{plan.name}</h3>
              <div className="text-6xl font-light tracking-tight mb-8">
                {plan.price}
                <span className="text-2xl text-gray-600">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-12 text-lg font-light text-gray-700">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-6 h-6 shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full px-6 py-4 rounded-full text-sm font-light transition-all duration-200 ${
                  plan.highlighted
                    ? "bg-black text-white hover:scale-105"
                    : "border border-black text-black hover:bg-black hover:text-white"
                }`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
