export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Download & Install",
      description: "Download the ServyShare Android app and install it on your device."
    },
    {
      number: "2",
      title: "Set Up Your Account",
      description: "Register as an admin and start your 14-day free trial. No credit card required."
    },
    {
      number: "3",
      title: "Add Staff Members",
      description: "Invite your team members, delivery personnel, or staff who need transaction access."
    },
    {
      number: "4",
      title: "Configure Permissions",
      description: "Set whether staff see all transactions or use search. Configure auto-delete timers (default 24 hours)."
    },
    {
      number: "5",
      title: "Grant M-Pesa Access",
      description: "Allow the app to read M-Pesa till messages (not private transactions) or set up Daraja API."
    },
    {
      number: "6",
      title: "Start Processing",
      description: "Staff can now view payment confirmations in real-time and claim transactions for accountability."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">
            How ServyShare Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Get started in minutes and transform how your team processes payments
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  {step.number}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
