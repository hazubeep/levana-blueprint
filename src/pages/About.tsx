import {
  Target,
  Lightbulb,
  Users,
  Award,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import heroBackground from "@/assets/hero-background.jpg";
import Footer from "@/components/Footer";
import agniaPicture from "@/assets/profile/agnia.jpg";
import rakaPicture from "@/assets/profile/raka.jpg";
import bimoPicture from "@/assets/profile/bimo.png";
import hazbyPicture from "@/assets/profile/hazby.jpg";
import alfathPicture from "@/assets/profile/alfath.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Quality First",
      description:
        "Every line of code, every design decision, every interaction is crafted with precision.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Driven",
      description:
        "We stay ahead of the curve, implementing cutting-edge solutions that future-proof your business.",
    },
    {
      icon: Users,
      title: "Client Focused",
      description:
        "Your success is our metric. We build partnerships, not just projects.",
    },
    {
      icon: Award,
      title: "Excellence Standard",
      description:
        "Good enough isn't in our vocabulary. We deliver exceptional, every time.",
    },
  ];

  const approach = [
    {
      step: "01",
      title: "Deep Understanding",
      description:
        "We start by truly understanding your business, challenges, and goals—not jumping straight to solutions.",
    },
    {
      step: "02",
      title: "Strategic Planning",
      description:
        "Every project begins with a clear roadmap, realistic timelines, and transparent communication.",
    },
    {
      step: "03",
      title: "Agile Execution",
      description:
        "Fast iterations, constant feedback, and flexible adjustments ensure we stay aligned with your vision.",
    },
    {
      step: "04",
      title: "Launch & Beyond",
      description:
        "Deployment is just the beginning. We provide support, optimization, and growth strategies post-launch.",
    },
  ];

  const teams = [
    {
      name: "Agnia Albaitsah",
      position: "Chief Executive Officer",
      image: agniaPicture,
    },
    {
      name: "Raka Prasetya Hidayat",
      position: "Chief Technology Officer",
      image: rakaPicture,
    },
    {
      name: "Bimo Fikry Prayoga",
      position: "Creative & Brand Specialist",
      image: bimoPicture,
    },
    {
      name: "Hazby A. Rachman Putra",
      position: "Frontend Developer",
      image: hazbyPicture,
    },
    {
      name: "Alfath Rizky",
      position: "Social Media Specialist",
      image: alfathPicture,
    },
  ];

  return (
    <div className=" bg-gradient-subtle">
      <Navigation />
      {/* Hero */},
      <section className="h-full relative items-center pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Building the Future of
              <span className="block bg-gradient-accent leading-normal bg-clip-text text-transparent">
                Digital Business
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              We're not just another agency. We're your technology partner,
              dedicated to transforming ambitious ideas into powerful digital
              realities.
            </p>
          </div>
        </div>
      </section>
      {/* team */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="lg:mx-[70px] px-4 lg:px-[70px]">
          <div className="grid gap-8 lg:grid-cols-[30%_70%] lg:gap-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Let's meet
                <span className="block text-primary">Our team</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Every big idea is born from a strong team effort. These are the
                people who bring together vision, creativity, and technology to
                create solutions that truly make an impact.
              </p>
            </div>
            <div className="grid gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-3 ">
              {teams.map((team, index) => (
                <div
                  key={index}
                  className="overflow-hidden border-border transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-64">
                    <img
                      className="rounded-md h-full w-full object-cover object-[35%_20%]"
                      src={team.image}
                      loading="lazy"
                      alt="team picture"
                    />
                  </div>
                  <div className="flex mt-3 gap-2">
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                  <div>
                    <h3 className="text-primary font-semibold">{team.name}</h3>
                    <p className="text-muted-foreground">{team.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Story */}
      <section className="lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className=" mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              Our Story
            </h2>
            <p className="text-lg leading-relaxed">
              Levana Digital was born from a simple observation: businesses
              deserve better than cookie-cutter solutions and broken promises.
              Too many agencies talk big but deliver mediocre results.
            </p>
            <p className="text-lg leading-relaxed">
              We built Levana on a different foundation—one where technology
              expertise meets genuine business understanding. Where speed
              doesn't mean cutting corners, and innovation isn't just a
              buzzword.
            </p>
            <p className="text-lg leading-relaxed">
              Today, we help forward-thinking businesses leverage cutting-edge
              technology to compete, scale, and win. From intelligent chatbots
              that never sleep to automation systems that reclaim hours of
              manual work, we build solutions that actually move the needle.
            </p>
          </div>
        </div>
      </section>
      {/* Values */}
      <section className="min-h-screen py-20 lg:py-32 bg-background">
        <div className="mx-auto px-4 lg:px-[70px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              What Drives Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Core values that guide every decision, every project, every
              partnership.
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
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
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
              Empower every business with technology that's fast, intelligent,
              and built to scale—without the complexity or premium price tag.
            </p>
          </div>
        </div>
      </section>
      {/* Approach */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="mx-auto px-4 lg:px-16">
          <div className="mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
              How We Work
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
              {approach.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-8 items-start animate-slide-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-5xl font-bold text-primary/20">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
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
