import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart2, Database, TrendingUp, Lightbulb, Zap, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            <Image src="/images/profile-hero.jpeg" alt="S. Iguodala portrait" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70" />
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold leading-tight mb-6">
                <span className="text-primary">Unlocking</span> Insights, <br />
                <span className="text-accent">Driving</span> Impact
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl">
                Transforming agencies through data modernization, technology implementation, and strategic consulting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Link href="/services">
                    Explore Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Link href="/about">About Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">My Mission</h2>
            <div className="section-divider mx-auto"></div>
            <p className="text-lg text-foreground/80 mt-6">
              Empowering public health agencies to transform their data into actionable insights that drive meaningful
              impact. I believe that in today's fast-evolving public health landscape, data is more than just
              numbers—it's the key to informed decision-making and improved community health outcomes.
            </p>
            <Button asChild variant="link" className="mt-6 text-primary">
              <Link href="/about">Read more about my approach</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Services</h2>
            <div className="section-divider mx-auto"></div>
            <p className="text-lg text-foreground/80 mt-6">
              Comprehensive solutions tailored to the unique challenges and opportunities of public health agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="h-10 w-10 text-primary" />,
                title: "Data Modernization",
                description:
                  "Transform your public health data infrastructure to enhance decision-making capabilities and improve health outcomes.",
                link: "/services#data-modernization",
              },
              {
                icon: <Zap className="h-10 w-10 text-primary" />,
                title: "Technology Implementation",
                description:
                  "Seamlessly integrate new technologies into your existing systems with minimal disruption to operations.",
                link: "/services#technology-implementation",
              },
              {
                icon: <Briefcase className="h-10 w-10 text-primary" />,
                title: "Strategic Consulting",
                description:
                  "Develop comprehensive strategies aligned with your agency's mission and public health objectives.",
                link: "/services#strategic-consulting",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-2">
                  {service.icon}
                  <CardTitle className="mt-4 text-xl font-playfair">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-foreground/70 text-base">{service.description}</CardDescription>
                  <Link
                    href={service.link}
                    className="text-primary text-sm font-medium flex items-center hover:underline"
                  >
                    Learn more <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center animate-slide-up mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">My Approach</h2>
            <div className="section-divider mx-auto bg-white"></div>
            <p className="text-lg mt-6 text-accent-foreground/90">
              I partner with public health agencies to navigate the complexities of data modernization and technology
              implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="h-10 w-10 text-white" />,
                title: "Understand",
                description:
                  "I begin by deeply understanding your agency's unique challenges, goals, and current data landscape.",
              },
              {
                icon: <BarChart2 className="h-10 w-10 text-white" />,
                title: "Transform",
                description:
                  "Together, we develop and implement solutions that transform your data into actionable insights.",
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-white" />,
                title: "Empower",
                description:
                  "I ensure your team has the knowledge and tools to sustain and build upon these improvements.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-accent-foreground/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-playfair font-medium mb-3">{step.title}</h3>
                <p className="text-accent-foreground/90">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-white text-accent hover:bg-white/90">
              <Link href="/about#approach">Learn More About My Approach</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Impact</h2>
            <div className="section-divider mx-auto"></div>
            <p className="text-lg text-foreground/80 mt-6">
              Real results for public health agencies and the communities they serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "40%",
                title: "Increase in Data Utilization",
                description: "Helping agencies extract more value from their existing data assets.",
              },
              {
                number: "60%",
                title: "Faster Response Times",
                description: "Enabling quicker public health interventions through improved data systems.",
              },
              {
                number: "85%",
                title: "Staff Confidence",
                description: "Empowering teams with the skills to leverage data effectively in their daily work.",
              },
            ].map((impact, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-6 px-6">
                  <p className="text-5xl font-bold text-primary mb-4">{impact.number}</p>
                  <h3 className="text-xl font-playfair font-medium mb-3">{impact.title}</h3>
                  <p className="text-foreground/70">{impact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Client Testimonials</h2>
            <div className="section-divider mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Sara's data modernization strategy transformed our approach to public health surveillance, resulting in a 40% increase in early outbreak detection.",
                author: "Dr. Michael Chen",
                role: "Director, County Health Department",
              },
              {
                quote:
                  "Working with Sara helped us identify inefficiencies in our data systems. Our response time to public health emergencies decreased by 60%.",
                author: "Dr. Priya Sharma",
                role: "Chief Data Officer, State Health Agency",
              },
              {
                quote:
                  "Sara's ability to translate complex data concepts into actionable strategies is unmatched. She's been instrumental to our agency's transformation.",
                author: "James Wilson",
                role: "Executive Director, FQHC",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="text-4xl text-primary mb-4">"</div>
                  <p className="text-foreground/80 mb-6 italic">{testimonial.quote}</p>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="link" className="text-primary">
              <Link href="/about#testimonials">View more testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Ready to Transform Your Agency?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Let's collaborate to unlock the full potential of your agency data and drive meaningful impact for the
              communities you serve.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">Let's Connect</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
