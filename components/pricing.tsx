import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Open Source",
    price: "Free",
    description: "Perfect for individuals and small teams getting started",
    features: [
      "Unlimited workflows",
      "Event-driven architecture",
      "Real-time monitoring",
      "Community support",
      "MIT License",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Advanced features and dedicated support for large organizations",
    features: [
      "Everything in Open Source",
      "Priority support",
      "Custom integrations",
      "SLA guarantees",
      "Training & onboarding",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    highlighted: true,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground">Start with open source, scale with enterprise support</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.highlighted ? "border-primary shadow-lg shadow-primary/20" : "border-border/50"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                    Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  {plan.price !== "Free" && plan.price !== "Custom" && (
                    <span className="text-muted-foreground">/month</span>
                  )}
                </div>
                <CardDescription className="text-base">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" size="lg" variant={plan.highlighted ? "default" : "outline"}>
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
