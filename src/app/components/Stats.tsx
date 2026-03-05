import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BarChart3, TrendingUp, Eye, Clock, Users, DollarSign } from "lucide-react";
import { useState } from "react";

const stats = [
  {
    icon: BarChart3,
    title: "Transaction Analytics",
    description: "View detailed analytics of all transactions processed through your till",
    color: "blue"
  },
  {
    icon: TrendingUp,
    title: "Daily & Monthly Reports",
    description: "Track daily, weekly, and monthly transaction trends and patterns",
    color: "green"
  },
  {
    icon: Eye,
    title: "Staff Activity Tracking",
    description: "See which staff members are viewing and claiming transactions",
    color: "purple"
  },
  {
    icon: Clock,
    title: "Processing Time Metrics",
    description: "Monitor how long transactions take from receipt to completion",
    color: "orange"
  },
  {
    icon: Users,
    title: "Team Performance",
    description: "Compare staff performance and transaction handling efficiency",
    color: "pink"
  },
  {
    icon: DollarSign,
    title: "Revenue Insights",
    description: "Get real-time insights into your business revenue and payment flows",
    color: "cyan"
  }
];

const colorClasses = {
  blue: {
    bg: "bg-blue-100 dark:bg-blue-950",
    text: "text-blue-600 dark:text-blue-500",
    border: "border-blue-200 dark:border-blue-800",
    hover: "hover:border-blue-400 dark:hover:border-blue-600"
  },
  green: {
    bg: "bg-green-100 dark:bg-green-950",
    text: "text-green-600 dark:text-green-500",
    border: "border-green-200 dark:border-green-800",
    hover: "hover:border-green-400 dark:hover:border-green-600"
  },
  purple: {
    bg: "bg-purple-100 dark:bg-purple-950",
    text: "text-purple-600 dark:text-purple-500",
    border: "border-purple-200 dark:border-purple-800",
    hover: "hover:border-purple-400 dark:hover:border-purple-600"
  },
  orange: {
    bg: "bg-orange-100 dark:bg-orange-950",
    text: "text-orange-600 dark:text-orange-500",
    border: "border-orange-200 dark:border-orange-800",
    hover: "hover:border-orange-400 dark:hover:border-orange-600"
  },
  pink: {
    bg: "bg-pink-100 dark:bg-pink-950",
    text: "text-pink-600 dark:text-pink-500",
    border: "border-pink-200 dark:border-pink-800",
    hover: "hover:border-pink-400 dark:hover:border-pink-600"
  },
  cyan: {
    bg: "bg-cyan-100 dark:bg-cyan-950",
    text: "text-cyan-600 dark:text-cyan-500",
    border: "border-cyan-200 dark:border-cyan-800",
    hover: "hover:border-cyan-400 dark:hover:border-cyan-600"
  }
};

export function Stats() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <BarChart3 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Built-in Analytics</span>
            </div>
            <h2 className="text-3xl md:text-4xl mb-4">
              Powerful Stats & Insights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Track every aspect of your transaction flow with comprehensive analytics and reporting tools built right into the app
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {stats.map((stat, index) => {
              const colors = colorClasses[stat.color as keyof typeof colorClasses];
              return (
                <div
                  key={index}
                  className={`group p-6 rounded-xl bg-card border-2 ${colors.border} ${colors.hover} transition-all duration-300 cursor-pointer transform ${
                    hoveredIndex === index ? 'scale-105 shadow-xl' : 'hover:scale-102 shadow-sm hover:shadow-lg'
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 h-12 w-12 rounded-xl ${colors.bg} flex items-center justify-center transition-transform ${
                      hoveredIndex === index ? 'scale-110 rotate-6' : ''
                    }`}>
                      <stat.icon className={`h-6 w-6 ${colors.text}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2">{stat.title}</h3>
                      <p className="text-sm text-muted-foreground">{stat.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dashboard Preview */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
            <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg z-10">
              <p className="text-sm font-semibold">📊 Real-time Dashboard Preview</p>
            </div>
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwY2hhcnRzfGVufDF8fHx8MTc3MjE0MDAzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Data analytics dashboard with charts"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
