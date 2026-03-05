import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle, Shield, ArrowRight, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-blue-50/30 dark:to-blue-950/10 pt-16 pb-12 md:pt-20 md:pb-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-950/30 px-4 py-2 rounded-full border border-green-200 dark:border-green-800 hover:scale-105 transition-transform cursor-pointer">
              <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500" />
              <span className="text-sm font-medium text-green-800 dark:text-green-300">Free 14-day trial • No credit card</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
              Share M-Pesa Till Transactions 
              <span className="text-primary"> Instantly</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Enable real-time payment confirmation for your staff, delivery personnel, and team members. 
              <strong className="text-foreground"> Process transactions faster</strong> without constant phone calls.
            </p>

            <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 border-l-4 border-blue-500 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-900 dark:text-blue-100 space-y-1">
                <p className="font-semibold">100% Secure & Non-Intrusive</p>
                <p className="text-blue-800 dark:text-blue-200">We DO NOT interfere with any M-Pesa payments or cash movement. We only share transaction notifications.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#download" 
                className="group bg-primary text-primary-foreground px-8 py-4 rounded-xl hover:bg-primary/90 transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span className="font-medium">Download App</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#how-it-works" 
                className="bg-white dark:bg-gray-800 text-foreground px-8 py-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all inline-flex items-center gap-2 border border-border shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                <Zap className="h-4 w-4 text-primary" />
                <span className="font-medium">See How It Works</span>
              </a>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-border">
                <div className="text-2xl font-bold text-primary">14</div>
                <div className="text-xs text-muted-foreground">Days Free</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-border">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-xs text-muted-foreground">Real-time</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-border">
                <div className="text-2xl font-bold text-primary">∞</div>
                <div className="text-xs text-muted-foreground">Staff</div>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1687422809654-579d81c29d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBvd25lciUyMHNtYXJ0cGhvbmV8ZW58MXx8fHwxNzcyMjE2ODA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="African business owner using smartphone"
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating stats badges */}
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-border animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-950 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-500" />
                </div>
                <div>
                  <div className="font-bold text-lg">Payment Confirmed</div>
                  <div className="text-xs text-muted-foreground">Real-time notification</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}