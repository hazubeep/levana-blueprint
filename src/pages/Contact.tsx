import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@levanadigital.com",
      href: "mailto:hello@levanadigital.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+62 xxx xxxx xxxx",
      href: "tel:+62xxxxxxxxxx",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Jakarta, Indonesia",
      href: "#",
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
              Let's Build Something
              <span className="block bg-gradient-accent bg-clip-text text-transparent">
                Extraordinary Together
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Whether you have a clear vision or just an idea, we're here to help turn it into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
            {/* Form */}
            <Card className="border-border shadow-lg">
              <CardContent className="p-8 lg:p-12">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="john@company.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone (Optional)
                    </label>
                    <Input type="tel" placeholder="+62 xxx xxxx xxxx" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      What can we help you with?
                    </label>
                    <select className="w-full px-4 py-2 rounded-md border border-input bg-background">
                      <option>Website Development</option>
                      <option>AI Chatbot WhatsApp</option>
                      <option>Business Automation</option>
                      <option>Custom System</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Tell us about your project
                    </label>
                    <Textarea 
                      placeholder="Share your vision, goals, or challenges..."
                      rows={5}
                    />
                  </div>

                  <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity" size="lg">
                    Send Message
                    <Send className="ml-2" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Have questions? We're here to help. Reach out through any channel that works best for you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="border-border hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                          <item.icon className="text-primary-foreground" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{item.title}</h3>
                          <a 
                            href={item.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-primary/20 bg-gradient-primary/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Response Time</h3>
                  <p className="text-muted-foreground text-sm">
                    We typically respond within 24 hours on business days. For urgent matters, please call us directly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-4 text-left">
              {[
                {
                  q: "What's your typical project timeline?",
                  a: "Most projects take 2-8 weeks depending on scope and complexity. We'll provide a detailed timeline during our initial consultation.",
                },
                {
                  q: "Do you offer ongoing support after launch?",
                  a: "Yes! We provide post-launch support, maintenance, and optimization to ensure your solution continues delivering value.",
                },
                {
                  q: "What makes Levana Digital different?",
                  a: "We combine speed, quality, and cutting-edge technology without the enterprise price tag. Plus, we actually care about your business outcomes.",
                },
              ].map((faq, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
