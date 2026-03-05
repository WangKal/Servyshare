import { Check } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">
            Simple, Affordable Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Pay per staff member per day - cheaper than phone calls
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Free Trial */}
          <div className="p-8 rounded-2xl bg-card border-2 border-border">
            <div className="mb-6">
              <h3 className="mb-2">Free Trial</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">14 Days</span>
              </div>
              <p className="text-muted-foreground mt-2">No credit card required</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Full access to all features</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Unlimited staff members</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>All transaction features</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Admin controls included</span>
              </li>
            </ul>
            <a 
              href="#download" 
              className="block w-full text-center bg-muted text-foreground px-6 py-3 rounded-lg hover:bg-muted/80 transition-colors"
            >
              Start Free Trial
            </a>
          </div>

          {/* Pay Per Staff */}
          <div className="p-8 rounded-2xl bg-primary text-primary-foreground relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-xs">
              Most Popular
            </div>
            <div className="mb-6">
              <h3 className="mb-2">Pay Per Staff</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">Low Cost</span>
              </div>
              <p className="opacity-90 mt-2">Per staff member per day</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Only pay for active staff</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Cheaper than phone call costs</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Scale up or down anytime</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>No hidden fees</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Cancel anytime</span>
              </li>
            </ul>
            <a 
              href="#download" 
              className="block w-full text-center bg-white text-primary px-6 py-3 rounded-lg hover:bg-white/90 transition-colors font-medium"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            💰 Save money by reducing staff phone calls to confirm payments<br />
            ⚡ Process multiple transactions simultaneously across your team
          </p>
        </div>
      </div>
    </section>
  );
}
