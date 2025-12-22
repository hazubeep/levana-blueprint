import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code,
  MessageSquare,
  Zap,
  Gauge,
  BrainCircuit,
  MessageSquareText,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroBackground from "@/assets/hero-background.jpg";
import aboutImage from "@/assets/about-us-image.png";
import laptopImage from "@/assets/laptop.png";
import logoLevana from "@/assets/company/logo-levana-ts.png";
import logoNesas from "@/assets/company/logo-nesas.png";
import logoSumedang from "@/assets/company/logo-sumedang.png";
import logoHwg from "@/assets/company/logo-hwg.png";

const Home = () => {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description:
        "Lightning-fast, conversion-optimized websites that scale with your business.",
    },
    {
      icon: MessageSquare,
      title: "AI Chatbot WhatsApp",
      description:
        "Intelligent automation that handles customer queries 24/7 with precision.",
    },
    {
      icon: Zap,
      title: "Business Automation",
      description:
        "Streamline operations and eliminate manual work with smart workflows.",
    },
  ];

  const levanasOverplus = [
    {
      icon: Gauge,
      title: "Speed without compromise on quality",
    },
    {
      icon: BrainCircuit,
      title: "Tech-first approach to every solution",
    },
    {
      icon: MessageSquareText,
      title: "Transparent communication at every step",
    },
    {
      icon: Rocket,
      title: "Post-launch support that actually helps",
    },
  ];

  const stats = [
    {
      value: "10+",
      label: "Projects Delivered",
      content:
        "More than ten projects completed with consistent quality, on-time delivery, and solutions tailored to each client's needs.",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      content:
        "  A strong satisfaction rate driven by clear communication, reliable execution, and consistently high-quality results.",
    },
    {
      value: "24/7",
      label: "Support Available",
      content:
        " Round-the-clock support to ensure clients get assistance quickly and without unnecessary hassle.",
    },
  ];

  const leftStats = [stats[2], stats[0]];
  const rightStats = [stats[1]];

  return (
    <div className="bg-gradient-subtle">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="container mx-auto px-4 lg:px-10 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Tech-Forward Digital Agency
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Transform Your Business
              <span className="block bg-gradient-accent leading-normal bg-clip-text text-transparent">
                With Smart Technology
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We build intelligent digital solutions that accelerate growth,
              automate complexity, and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="https://wa.me/6283898216494"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 transition-opacity text-base px-8"
                >
                  Start Your Project
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="text-base px-8">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About us */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div
          className="hidden lg:block absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${aboutImage})`,
            backgroundSize: "cover",
            backgroundPosition: "40%",
            backgroundRepeat: "no-repeat",
          }}
          aria-hidden="true"
        />
        <div className="px-4 lg:mx-[70px] relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            About Us
          </h2>
          <div className="max-w-3xl">
            {/* Headline & lead */}
            <div className="max-w-3xl mx-auto space-y-6">
              <h3 className="text-3xl lg:text-4xl font-extrabold text-primary">
                We Create - We Refine - We Elevate
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Levana Digital is here to help businesses build a strong
                identity through design, technology, and well-directed strategy.
                We believe every brand has unique value to highlight, and our
                job is to transform that into a meaningful experience.
              </p>
            </div>

            {/* thin divider */}
            <hr className="border-b-2 my-6" />

            {/* Stats grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Kiri */}
              <div className="space-y-8">
                {leftStats.map((item, index) => (
                  <div key={index}>
                    <div className="text-3xl lg:text-4xl font-bold text-primary">
                      {item.value}{" "}
                      <span className="text-sm align-middle font-light text-[#6B5C8A]">
                        {item.label}
                      </span>
                    </div>

                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Kanan */}
              <div className="space-y-8">
                {rightStats.map((item, index) => (
                  <div key={index}>
                    <div className="text-3xl lg:text-4xl font-bold text-primary">
                      {item.value}{" "}
                      <span className="text-sm align-middle font-light text-[#6B5C8A]">
                        {item.label}
                      </span>
                    </div>

                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                ))}

                {/* spacer agar tinggi sisi kanan seimbang */}
                <div className="hidden md:block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="px-4 lg:mx-[70px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Services Built for
              <span className="block text-primary">Modern Businesses</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Cutting-edge solutions designed to give you a competitive
              advantage in the digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                    <service.icon
                      className="text-primary-foreground"
                      size={28}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg" className="group">
                Explore All Services
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* list of client */}
      <section className="py-16 lg:py-28 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Our Client Happy
            </h2>
            <p className="text-lg text-muted-foreground">
              Our work is trusted by a diverse range of clients, from
              educational institutions to growing businesses, all seeking
              dependable results and a seamless collaboration.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-16  justify-items-center center items-center md:grid-cols-2 lg:grid-cols-4 ">
            <img className="w-40" src={`${logoLevana}`} alt="company-logo" />
            <img className="w-36" src={`${logoNesas}`} alt="company-logo" />
            <img className="w-36" src={`${logoSumedang}`} alt="company-logo" />
            <img
              className="w-36 lg:w-40"
              src={`${logoHwg}`}
              alt="company-logo"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="lg:mx-[70px] px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Why Top Brands
              <span className="block text-primary">Choose Levana</span>
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-[60%_40%] lg:gap-12">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {levanasOverplus.map((overplus, index) => (
                <Card
                  key={index}
                  className="min-h-44 p-6 md:h-56 border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="flex py-4 justify-center items-center flex-col text-center">
                    <div className="w-14 h-14 text-primary flex items-center justify-center mb-6">
                      <overplus.icon size={64} />
                    </div>
                    <h3 className="text-base md:text-xl font-semibold mb-4">
                      {overplus.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
            <img
              className="w-[615px] h-full shadow-2xl hidden object-cover rounded-md lg:block"
              src={`${laptopImage}`}
              loading="lazy"
              alt="laptop picture"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-primary text-primary-foreground relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: "cover",
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-lg opacity-90">
              Let's discuss how we can transform your business with intelligent
              technology.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="my-8 bg-background text-foreground hover:bg-background/90 text-base"
              >
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
