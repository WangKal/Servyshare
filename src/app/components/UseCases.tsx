import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Store, School, UtensilsCrossed, Package } from "lucide-react";
import { useState } from "react";

const useCases = [
  {
    icon: Store,
    title: "Retail Shops",
    description: "Multiple staff can confirm payments instantly without calling the owner.",
    image: "https://images.unsplash.com/photo-1685893417834-1fb3b2a7121f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhc2hib2FyZCUyMG1vYmlsZXxlbnwxfHx8fDE3NzIyMTYwOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-blue-500/20 to-blue-600/20"
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Bars",
    description: "Waiters and bartenders can verify payments before serving orders.",
    image: "https://images.unsplash.com/photo-1743623785935-df8430570a78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwc3RhZmYlMjB0ZWFtd29ya3xlbnwxfHx8fDE3NzIyMTYwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-orange-500/20 to-orange-600/20"
  },
  {
    icon: Package,
    title: "Delivery Services",
    description: "Delivery personnel confirm payment before handing over goods without contacting owner.",
    image: "https://images.unsplash.com/photo-1627495395453-eb6afb14c411?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHBlcnNvbiUyMHNtYXJ0cGhvbmV8ZW58MXx8fHwxNzcyMjE2MDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-green-500/20 to-green-600/20"
  },
  {
    icon: School,
    title: "Schools",
    description: "Multiple administrators can view and process fee payments efficiently.",
    image: "https://images.unsplash.com/photo-1623299677294-062c3a14fb00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwYXltZW50JTIwdHJhbnNhY3Rpb24lMjBhZnJpY2F8ZW58MXx8fHwxNzcyMjE2MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-purple-500/20 to-purple-600/20"
  }
];

export function UseCases() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">
            Perfect For Any Business
          </h2>
          <p className="text-lg text-muted-foreground">
            Any business that needs multiple payment confirmations or processing
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className={`group rounded-2xl overflow-hidden bg-card border-2 border-border transition-all duration-300 transform ${
                hoveredIndex === index ? 'scale-105 shadow-2xl border-primary/50' : 'hover:scale-102 hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-56 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} z-10 mix-blend-overlay`}></div>
                <ImageWithFallback 
                  src={useCase.image}
                  alt={useCase.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredIndex === index ? 'scale-110' : 'group-hover:scale-105'
                  }`}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center transition-transform ${
                    hoveredIndex === index ? 'scale-110 rotate-6' : ''
                  }`}>
                    <useCase.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="group-hover:text-primary transition-colors">{useCase.title}</h3>
                </div>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}