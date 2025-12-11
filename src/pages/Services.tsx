// not used

import { Code2, MessageSquareMore, Workflow, Database, Shield, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Website Development",
      tagline: "Fast. Beautiful. Conversion-Optimized.",
      description: "Modern websites built with cutting-edge frameworks that load instantly and convert visitors into customers.",
      features: [
        "Lightning-fast performance",
        "Mobile-first responsive design",
        "SEO-optimized architecture",
        "Custom CMS integration",
        "E-commerce solutions",
        "Progressive Web Apps (PWA)",
      ],
    },
    {
      icon: MessageSquareMore,
      title: "AI Chatbot WhatsApp",
      tagline: "24/7 Customer Support. Zero Human Intervention.",
      description: "Intelligent chatbots that handle customer queries, process orders, and provide instant support through WhatsApp.",
      features: [
        "Natural language processing",
        "Multi-language support",
        "CRM integration",
        "Automated order processing",
        "Custom conversation flows",
        "Analytics & insights",
      ],
    },
    {
      icon: Workflow,
      title: "Business Automation",
      tagline: "Eliminate Manual Work. Amplify Output.",
      description: "Smart workflows that automate repetitive tasks, reduce errors, and free your team for high-value work.",
      features: [
        "Process automation",
        "Data synchronization",
        "Workflow optimization",
        "API integrations",
        "Document automation",
        "Reporting & dashboards",
      ],
    },
    {
      icon: Database,
      title: "Custom Systems",
      tagline: "Built for Your Unique Needs.",
      description: "Tailored software solutions designed around your specific business processes and requirements.",
      features: [
        "Enterprise resource planning",
        "Inventory management",
        "Custom dashboards",
        "Third-party integrations",
        "Cloud infrastructure",
        "Scalable architecture",
      ],
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Speed to Market",
      description: "Launch faster with our agile development process.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security for all our solutions.",
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
              Services That Drive
              <span className="block bg-gradient-accent bg-clip-text text-transparent">
                Real Business Growth
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              From concept to deployment, we deliver technology solutions that solve real problems and create measurable impact.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
                    <service.icon className="text-primary-foreground" size={32} />
                  </div>
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-3">{service.title}</h2>
                    <p className="text-lg text-primary font-medium mb-4">{service.tagline}</p>
                    <p className="text-muted-foreground leading-relaxed text-lg">{service.description}</p>
                  </div>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Card className={`border-border shadow-lg ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <CardContent className="p-12">
                    <div className="aspect-square bg-gradient-accent opacity-10 rounded-3xl"></div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-8">
                  <benefit.icon className="text-primary mb-4" size={40} />
                  <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg opacity-90">
              Let's discuss which solutions fit your needs and goals.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                Schedule Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
