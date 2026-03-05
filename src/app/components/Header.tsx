import { Share2 } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center transform group-hover:scale-110 transition-transform">
            <Share2 className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">ServyShare</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-muted-foreground hover:text-primary transition-colors font-medium relative group">
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors font-medium relative group">
            How It Works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors font-medium relative group">
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>
        <a 
          href="#download" 
          className="bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-2.5 rounded-xl hover:shadow-lg hover:scale-105 transition-all font-medium"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}