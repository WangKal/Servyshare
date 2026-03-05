import { Share2, Mail, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Share2 className="h-6 w-6 text-primary" />
              <span className="font-semibold text-xl">ServyShare</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Share M-Pesa till transactions with your team for faster payment processing.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#download" className="hover:text-foreground transition-colors">Download</a></li>
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h4 className="mb-4">Use Cases</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Retail Shops</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Restaurants</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Delivery Services</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Schools</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:support@servyshare.com" className="hover:text-foreground transition-colors flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Contact Us
                </a>
              </li>
              <li>
                <a href="https://github.com/servitium-enterprise/servyshare" className="hover:text-foreground transition-colors flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Servitium Enterprise. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">
            ServyShare does not interfere with M-Pesa payments or cash movement. We only facilitate transaction message sharing.
          </p>
        </div>
      </div>
    </footer>
  );
}
