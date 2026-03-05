import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Smartphone, CreditCard, AlertCircle, CheckCircle2 } from "lucide-react";

export function Requirements() {
  return (
    <section className="py-12 bg-gradient-to-b from-orange-50/50 to-background dark:from-orange-950/10 dark:to-background border-y border-orange-200 dark:border-orange-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-orange-200 dark:border-orange-800">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1753036051291-cfc20d052c24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW0lMjBjYXJkJTIwbW9iaWxlJTIwcGhvbmV8ZW58MXx8fHwxNzcyMjE2ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="SIM card in mobile phone"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg animate-pulse">
                <CreditCard className="h-6 w-6" />
              </div>
            </div>

            {/* Right side - Requirements */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-950/30 px-4 py-2 rounded-full border border-orange-200 dark:border-orange-800">
                <AlertCircle className="h-4 w-4 text-orange-600 dark:text-orange-500" />
                <span className="text-sm font-medium text-orange-800 dark:text-orange-300">Important Requirement</span>
              </div>

              <h2 className="text-3xl md:text-4xl">
                Till SIM Card Must Be <span className="text-orange-600 dark:text-orange-500">In Your Device</span>
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 dark:bg-orange-950 flex items-center justify-center">
                    <Smartphone className="h-5 w-5 text-orange-600 dark:text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Device Requirement</h4>
                    <p className="text-sm text-muted-foreground">
                      The app only works if the M-Pesa till SIM card is physically inserted in the same phone/device where ServyShare is installed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 dark:bg-green-950 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Why This Works</h4>
                    <p className="text-sm text-muted-foreground">
                      This allows ServyShare to read incoming M-Pesa till transaction SMS messages and share them with your team in real-time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-blue-600 dark:text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-blue-900 dark:text-blue-100">Alternative: Daraja API</h4>
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      Alternatively, you can receive messages through the Daraja API integrated to your own system, which then forwards transactions to ServyShare.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}