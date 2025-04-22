import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Globe, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">About Me</h1>
            <div className="section-divider mx-auto"></div>
            <p className="text-lg text-foreground/80 mt-6">
              Passionate about transforming public health through data modernization and technology implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl animate-fade-in">
              <Image src="/images/profile-hero.jpeg" alt="S. Iguodala portrait" fill className="object-cover" />
            </div>
            <div className="space-y-6 animate-slide-in-right">
              <h2 className="text-3xl font-playfair font-bold">S. Iguodala</h2>
              <div className="section-divider"></div>
              <p className="text-foreground/80">
                With over a decade of experience in public health data systems and technology implementation, I've
                dedicated my career to helping agencies harness the power of their data to improve community health
                outcomes.
              </p>
              <p className="text-foreground/80">
                My approach combines technical expertise with deep public health domain knowledge, ensuring that
                technology solutions directly address core public health challenges. I believe that effective data
                utilization is essential for agencies to fulfill their missions in today's complex health landscape.
              </p>
              <p className="text-foreground/80">
                Throughout my career, I've worked with public health agencies at all levels—federal, state, local, and
                tribal—helping them transform their approach to data and technology. My passion lies in bridging the gap
                between technical possibilities and public health realities.
              </p>
              <div className="pt-4">
                <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">My Values</h2>
            <div className="section-divider mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="h-10 w-10 text-primary" />,
                title: "Impact-Driven",
                description:
                  "I measure success by the tangible improvements in public health outcomes and agency effectiveness.",
              },
              {
                icon: <Globe className="h-10 w-10 text-primary" />,
                title: "Health Equity",
                description: "I'm committed to ensuring data systems and technologies help reduce health disparities.",
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-primary" />,
                title: "Practical Innovation",
                description:
                  "I focus on innovative solutions that are practical, sustainable, and aligned with agency realities.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-playfair font-medium mb-3">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Areas of Expertise</h2>
            <div className="section-divider mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Public Health Data Systems",
                description:
                  "Designing and implementing data systems specifically tailored to public health surveillance, reporting, and analysis needs.",
              },
              {
                title: "Data Modernization",
                description:
                  "Transforming legacy systems and processes to meet contemporary public health challenges and technological standards.",
              },
              {
                title: "Health Information Exchange",
                description:
                  "Creating interoperable systems that enable secure, efficient data sharing between public health and healthcare entities.",
              },
              {
                title: "Technology Implementation",
                description:
                  "Managing the end-to-end process of selecting, implementing, and optimizing new technologies for public health agencies.",
              },
              {
                title: "Public Health Informatics",
                description:
                  "Applying informatics principles to improve how public health information is captured, used, and shared.",
              },
              {
                title: "Change Management",
                description:
                  "Guiding organizations through the cultural and operational shifts required for successful digital transformation.",
              },
            ].map((expertise, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-medium mb-3">{expertise.title}</h3>
                  <p className="text-foreground/70">{expertise.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">My Approach</h2>
            <div className="section-divider mx-auto"></div>
            <p className="text-lg text-foreground/80 mt-6">
              I believe in a collaborative, practical approach that delivers measurable results for public health
              agencies.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "Public Health First",
                description:
                  "I start with a deep understanding of public health objectives and challenges, ensuring that technology serves the mission, not the other way around.",
              },
              {
                title: "Practical Solutions",
                description:
                  "I focus on solutions that are practical, sustainable, and aligned with the realities of public health agencies, including budget constraints and workforce capacity.",
              },
              {
                title: "Collaborative Partnership",
                description:
                  "I work as a partner with your team, involving stakeholders at all levels to ensure solutions are embraced and effectively utilized.",
              },
              {
                title: "Knowledge Transfer",
                description:
                  "I prioritize building your team's capacity through training, documentation, and ongoing support to ensure long-term success.",
              },
            ].map((principle, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center animate-fade-in">
                <div className="md:col-span-1">
                  <h3 className="text-2xl font-playfair font-bold text-primary">{principle.title}</h3>
                </div>
                <div className="md:col-span-3">
                  <p className="text-foreground/80">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">What Clients Say</h2>
            <div className="section-divider mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Sara's data modernization strategy transformed our approach to public health surveillance, resulting in a 40% increase in early outbreak detection and significantly improved response times.",
                author: "Dr. Michael Chen",
                role: "Director, County Health Department",
              },
              {
                quote:
                  "Working with Sara helped us identify inefficiencies in our data systems. Our response time to public health emergencies decreased by 60% within the first six months of implementing her recommendations.",
                author: "Dr. Priya Sharma",
                role: "Chief Data Officer, State Health Agency",
              },
              {
                quote:
                  "Sara's ability to translate complex data concepts into actionable strategies is unmatched. She's been instrumental to our agency's transformation and has helped us build a data-driven culture.",
                author: "James Wilson",
                role: "Executive Director, FQHC",
              },
              {
                quote:
                  "The technology implementation framework Sara developed has transformed how we manage and utilize our public health data. We now have confidence in our data integrity and can make decisions faster than ever before.",
                author: "Elena Rodriguez",
                role: "CIO, Regional Health Authority",
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Ready to Transform Your Agency's Data?
            </h2>
            <p className="text-lg mb-8 text-foreground/80">
              Let's discuss how I can help your organization leverage data to improve public health outcomes.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
