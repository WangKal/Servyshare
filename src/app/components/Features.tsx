import { 
  Share2, 
  Users, 
  Clock, 
  Shield, 
  Search, 
  CheckSquare,
  Trash2,
  Lock,
  Zap,
  DollarSign
} from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Share2,
    title: "Selective Sharing",
    description: "Choose who sees transaction messages - staff, delivery personnel, or specific team members.",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: Users,
    title: "Multi-User Access",
    description: "Enable multiple people to view and process payments simultaneously for faster operations.",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: CheckSquare,
    title: "Transaction Claiming",
    description: "Staff can claim transactions to show they're processing them, ensuring accountability.",
    gradient: "from-green-500 to-green-600"
  },
  {
    icon: Search,
    title: "Admin Controls",
    description: "Set whether users see all transactions or search-limited access to manage visibility.",
    gradient: "from-orange-500 to-orange-600"
  },
  {
    icon: Clock,
    title: "Auto-Delete Messages",
    description: "Transactions automatically delete based on admin settings (default 24 hours) to maintain privacy.",
    gradient: "from-pink-500 to-pink-600"
  },
  {
    icon: Lock,
    title: "Till Messages Only",
    description: "Only reads M-Pesa till transaction messages, not private personal M-Pesa transactions.",
    gradient: "from-red-500 to-red-600"
  },
  {
    icon: Zap,
    title: "Daraja API Backup",
    description: "Alternatively receive messages through Daraja API integration to your own system.",
    gradient: "from-yellow-500 to-yellow-600"
  },
  {
    icon: DollarSign,
    title: "Cost Effective",
    description: "Pay per staff per day - cheaper than constant phone calls to confirm payments.",
    gradient: "from-cyan-500 to-cyan-600"
  },
  {
    icon: Shield,
    title: "No Payment Interference",
    description: "We DO NOT interfere with M-Pesa payments or cash movement in any way.",
    gradient: "from-indigo-500 to-indigo-600"
  }
];

export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="features" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">
            Everything You Need for Transaction Sharing
          </h2>
          <p className="text-lg text-muted-foreground">
            Built for businesses that need efficient payment confirmation and multi-person transaction processing
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer transform ${
                hoveredIndex === index ? 'scale-105 shadow-2xl' : 'hover:scale-102 shadow-md hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 transform transition-transform ${
                  hoveredIndex === index ? 'scale-110 rotate-6' : 'group-hover:scale-105'
                }`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}