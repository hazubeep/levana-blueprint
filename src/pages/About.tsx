import { Target, Lightbulb, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Quality First",
      description: "Every line of code, every design decision, every interaction is crafted with precision.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Driven",
      description: "We stay ahead of the curve, implementing cutting-edge solutions that future-proof your business.",
    },
    {
      icon: Users,
      title: "Client Focused",
      description: "Your success is our metric. We build partnerships, not just projects.",
    },
    {
      icon: Award,
      title: "Excellence Standard",
      description: "Good enough isn't in our vocabulary. We deliver exceptional, every time.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Building the Future of
              <span className="block bg-gradient-accent bg-clip-text text-transparent">
                Digital Business
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              We're not just another agency. We're your technology partner, dedicated to transforming ambitious ideas into powerful digital realities.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Levana Digital was born from a simple observation: businesses deserve better than cookie-cutter solutions and broken promises. Too many agencies talk big but deliver mediocre results.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We built Levana on a different foundation—one where technology expertise meets genuine business understanding. Where speed doesn't mean cutting corners, and innovation isn't just a buzzword.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we help forward-thinking businesses leverage cutting-edge technology to compete, scale, and win. From intelligent chatbots that never sleep to automation systems that reclaim hours of manual work, we build solutions that actually move the needle.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              What Drives Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Core values that guide every decision, every project, every partnership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="border-border hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6">
                    <value.icon className="text-primary-foreground" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-32 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">Our Mission</h2>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              Empower every business with technology that's fast, intelligent, and built to scale—without the complexity or premium price tag.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">How We Work</h2>
            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Deep Understanding",
                  description: "We start by truly understanding your business, challenges, and goals—not jumping straight to solutions.",
                },
                {
                  step: "02",
                  title: "Strategic Planning",
                  description: "Every project begins with a clear roadmap, realistic timelines, and transparent communication.",
                },
                {
                  step: "03",
                  title: "Agile Execution",
                  description: "Fast iterations, constant feedback, and flexible adjustments ensure we stay aligned with your vision.",
                },
                {
                  step: "04",
                  title: "Launch & Beyond",
                  description: "Deployment is just the beginning. We provide support, optimization, and growth strategies post-launch.",
                },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex gap-8 items-start animate-slide-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-5xl font-bold text-primary/20">{item.step}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
