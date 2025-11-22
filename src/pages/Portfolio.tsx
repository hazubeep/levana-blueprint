import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import portfolioWebsite from "@/assets/portfolio-website.jpg";
import portfolioChatbot from "@/assets/portfolio-chatbot.jpg";
import portfolioAutomation from "@/assets/portfolio-automation.jpg";

const Portfolio = () => {
  const projects = [
    {
      image: portfolioWebsite,
      title: "Premium E-Commerce Platform",
      category: "Website Development",
      description: "Complete e-commerce solution with custom CMS, payment integration, and inventory management.",
      tags: ["React", "Node.js", "Stripe", "CMS"],
      results: [
        "40% increase in conversion rate",
        "2.5s average page load time",
        "Mobile-first responsive design",
      ],
    },
    {
      image: portfolioChatbot,
      title: "AI Customer Service Bot",
      category: "AI Chatbot WhatsApp",
      description: "Intelligent chatbot handling 1000+ daily customer queries with 95% accuracy rate.",
      tags: ["AI/ML", "WhatsApp API", "NLP", "CRM"],
      results: [
        "85% reduction in support tickets",
        "24/7 instant customer response",
        "Multi-language support",
      ],
    },
    {
      image: portfolioAutomation,
      title: "Order Management System",
      category: "Business Automation",
      description: "End-to-end automation from order placement to fulfillment with real-time tracking.",
      tags: ["Automation", "API Integration", "Dashboard"],
      results: [
        "70% faster order processing",
        "Zero manual data entry errors",
        "Real-time inventory sync",
      ],
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
              Work That Speaks
              <span className="block bg-gradient-accent bg-clip-text text-transparent">
                For Itself
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Real projects. Real results. Real impact on business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="border-border overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid lg:grid-cols-2">
                  <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                      {project.category}
                    </Badge>
                    <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tIndex) => (
                        <Badge key={tIndex} variant="outline" className="text-sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-3 mb-8">
                      <h3 className="font-semibold text-sm uppercase tracking-wide text-primary">Key Results</h3>
                      {project.results.map((result, rIndex) => (
                        <div key={rIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <p className="text-foreground/80">{result}</p>
                        </div>
                      ))}
                    </div>

                    <Button variant="outline" className="w-fit group">
                      View Case Study
                      <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12 text-center">
              <p className="text-xl lg:text-2xl italic text-muted-foreground mb-6 leading-relaxed">
                "Levana Digital transformed our customer service. The AI chatbot they built handles our peak hours effortlessly, and our team can focus on complex issues. Best ROI we've seen in years."
              </p>
              <div className="space-y-1">
                <p className="font-semibold text-lg">Sarah Mitchell</p>
                <p className="text-sm text-muted-foreground">CEO, TechCommerce Indonesia</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Your Project Could Be Next
            </h2>
            <p className="text-lg opacity-90">
              Let's create something exceptional together.
            </p>
            <a href="https://wa.me/6283898216494" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
