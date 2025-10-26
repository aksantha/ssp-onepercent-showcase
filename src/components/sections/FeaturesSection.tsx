import { Card } from "@/components/ui/card";
import { features } from "@/data/featuresData";

export const FeaturesSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="p-8 text-center gradient-card shadow-card hover-lift observe-scroll group"
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-smooth group-hover:scale-110">
            <feature.icon className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-3">
            {feature.title}
          </h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </Card>
      ))}
    </div>
  );
};
