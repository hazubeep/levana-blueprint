import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Blog = () => {
  const posts = [
    {
      title: "Why AI Chatbots Are No Longer Optional for Modern Businesses",
      excerpt: "Customer expectations have evolved. Learn why businesses that don't adopt AI-powered customer service risk falling behind.",
      category: "AI & Automation",
      date: "March 15, 2024",
      readTime: "5 min read",
    },
    {
      title: "The ROI of Business Automation: Real Numbers from Real Companies",
      excerpt: "Data-driven insights into how automation delivers measurable returns across different business functions.",
      category: "Business Strategy",
      date: "March 10, 2024",
      readTime: "7 min read",
    },
    {
      title: "Modern Website Performance: Why Speed Matters More Than Ever",
      excerpt: "Google's Core Web Vitals are reshaping SEO. Here's what you need to know to stay competitive.",
      category: "Web Development",
      date: "March 5, 2024",
      readTime: "6 min read",
    },
    {
      title: "From Manual to Magical: Automating Your Sales Funnel",
      excerpt: "A practical guide to building automated workflows that nurture leads and close deals while you sleep.",
      category: "Sales & Marketing",
      date: "February 28, 2024",
      readTime: "8 min read",
    },
    {
      title: "Choosing the Right Tech Stack for Your Startup in 2024",
      excerpt: "Modern frameworks, proven tools, and practical advice for building scalable digital products.",
      category: "Technology",
      date: "February 20, 2024",
      readTime: "10 min read",
    },
    {
      title: "The Future of Customer Service: AI, Automation, and Human Touch",
      excerpt: "How to blend technology with empathy to create exceptional customer experiences.",
      category: "Customer Experience",
      date: "February 15, 2024",
      readTime: "6 min read",
    },
  ];

  const categories = [
    "All Posts",
    "AI & Automation",
    "Web Development",
    "Business Strategy",
    "Technology",
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Insights & Ideas
              <span className="block bg-gradient-accent bg-clip-text text-transparent">
                From the Digital Frontier
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Practical guides, industry insights, and thought leadership on building better digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`cursor-pointer px-6 py-2 text-sm ${
                  index === 0 ? "bg-primary hover:bg-primary/90" : ""
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Stay Ahead of the Curve
            </h2>
            <p className="text-lg opacity-90">
              Get actionable insights delivered to your inbox. No fluff, just value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg bg-background/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
              />
              <button className="px-8 py-3 bg-background text-foreground rounded-lg font-medium hover:bg-background/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
