import { Link } from "react-router-dom";
import { ArrowRight, Code, MessageSquare, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroBackground from "@/assets/hero-background.jpg";
import portfolioWebsite from "@/assets/portfolio-website.jpg";
import portfolioChatbot from "@/assets/portfolio-chatbot.jpg";
import portfolioAutomation from "@/assets/portfolio-automation.jpg";

const Home = () => {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Lightning-fast, conversion-optimized websites that scale with your business.",
    },
    {
      icon: MessageSquare,
      title: "AI Chatbot WhatsApp",
      description: "Intelligent automation that handles customer queries 24/7 with precision.",
    },
    {
      icon: Zap,
      title: "Business Automation",
      description: "Streamline operations and eliminate manual work with smart workflows.",
    },
  ];

  const portfolioItems = [
    {
      image: portfolioWebsite,
      title: "E-Commerce Platform",
      category: "Website Development",
    },
    {
      image: portfolioChatbot,
      title: "Customer Service Bot",
      category: "AI Chatbot",
    },
    {
      image: portfolioAutomation,
      title: "Order Management System",
      category: "Automation",
    },
  ];

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Tech-Forward Digital Agency
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Transform Your Business
              <span className="block bg-gradient-accent bg-clip-text text-transparent">
                With Smart Technology
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We build intelligent digital solutions that accelerate growth, automate complexity, and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity text-base px-8">
                  Start Your Project
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="text-base px-8">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-3xl lg:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Services Built for
              <span className="block text-primary">Modern Businesses</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Cutting-edge solutions designed to give you a competitive advantage in the digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                    <service.icon className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg" className="group">
                Explore All Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 lg:py-32 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Recent Work
            </h2>
            <p className="text-lg text-muted-foreground">
              Quality-driven projects that deliver real business impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div 
                key={index}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-video">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium">View Project</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-primary font-medium">{item.category}</p>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button variant="outline" size="lg">
                View Full Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-5xl font-bold">
                Why Top Brands
                <span className="block text-primary">Choose Levana</span>
              </h2>
              <div className="space-y-6">
                {[
                  "Speed without compromise on quality",
                  "Tech-first approach to every solution",
                  "Transparent communication at every step",
                  "Post-launch support that actually helps",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 animate-slide-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-accent opacity-20 absolute -inset-4 blur-3xl"></div>
              <img 
                src={heroBackground} 
                alt="Technology"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
        }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-lg opacity-90">
              Let's discuss how we can transform your business with intelligent technology.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90 text-base px-8">
                Schedule a Consultation
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

export default Home;
