import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Database,
  Users,
  Lightbulb,
  Zap,
  Briefcase,
  CheckCircle,
  FileText,
  Server,
  Shield,
  Wrench,
  Cpu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      id: "data-modernization",
      icon: <Database className="h-12 w-12 text-primary" />,
      title: "Data Modernization",
      description:
        "Transform your public health data infrastructure to enhance decision-making capabilities and improve health outcomes.",
      details: [
        "Data maturity assessment and roadmap development",
        "Data architecture redesign and optimization",
        "Data integration and interoperability solutions",
        "Data quality improvement frameworks",
        "Data governance implementation",
        "Cloud migration strategies for public health data",
      ],
      benefits: [
        "Enhanced data accessibility and usability",
        "Improved data quality and reliability",
        "Faster access to critical public health insights",
        "Increased interoperability with partner systems",
        "Better compliance with evolving standards",
      ],
      image: "/images/data-modernization.jpeg",
    },
    {
      id: "technology-implementation",
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Technology Implementation",
      description:
        "Seamlessly integrate new technologies into your existing public health systems with minimal disruption to operations.",
      details: [
        "Technology needs assessment and selection",
        "Implementation planning and project management",
        "System integration and interoperability",
        "Data migration and validation",
        "User training and change management",
        "Post-implementation support and optimization",
      ],
      benefits: [
        "Reduced implementation risks and costs",
        "Minimized operational disruption",
        "Accelerated time-to-value for new technologies",
        "Higher user adoption rates",
        "Seamless integration with existing systems",
      ],
      image: "/images/technology-implementation.jpeg",
    },
    {
      id: "strategic-consulting",
      icon: <Briefcase className="h-12 w-12 text-primary" />,
      title: "Strategic Consulting",
      description: "Develop comprehensive strategies aligned with your agency's mission and public health objectives.",
      details: [
        "Public health data strategy development",
        "Technology roadmap planning",
        "Digital transformation guidance",
        "Organizational change management",
        "Capacity building and workforce development",
        "Grant and funding opportunity assessment",
      ],
      benefits: [
        "Aligned technology and public health objectives",
        "Clear roadmap for digital transformation",
        "Optimized resource allocation",
        "Enhanced organizational capabilities",
        "Improved stakeholder engagement and buy-in",
      ],
      image: "/images/strategic-consulting.jpeg",
    },
  ]

  const specializedServices = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Public Health Surveillance Systems",
      description:
        "Design and implement modern surveillance systems that enable early detection and rapid response to public health threats.",
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Health Equity Data Solutions",
      description:
        "Develop data frameworks that highlight disparities and support targeted interventions to improve health equity.",
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Data Exchange & Interoperability",
      description: "Create seamless data sharing capabilities between public health agencies and healthcare partners.",
    },
    {
      icon: <Cpu className="h-10 w-10 text-primary" />,
      title: "AI & Predictive Analytics",
      description:
        "Implement advanced analytics solutions that forecast trends and support proactive public health measures.",
    },
    {
      icon: <Wrench className="h-10 w-10 text-primary" />,
      title: "Legacy System Modernization",
      description: "Transform outdated systems while preserving critical data and functionality.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Data Literacy Programs",
      description: "Build organizational capacity through customized training and skill development programs.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Services</h1>
            <div className="section-divider mx-auto"></div>
            <p className="text-lg text-foreground/80 mt-6">
              Comprehensive solutions tailored to the unique challenges and opportunities of public health agencies.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      {services.map((service, index) => (
        <section key={service.id} id={service.id} className={`py-20 ${index % 2 !== 0 ? "bg-muted" : ""}`}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`animate-fade-in ${index % 2 !== 0 ? "order-2" : ""}`}>
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h2 className="text-3xl md:text-4xl font-playfair font-bold ml-4">{service.title}</h2>
                </div>
                <div className="section-divider mb-6"></div>
                <p className="text-lg text-foreground/80 mb-6">{service.description}</p>
                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-medium">Key Services:</h3>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Benefits:</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className={`relative h-[400px] rounded-lg overflow-hidden shadow-xl animate-slide-in-right ${index % 2 !== 0 ? "order-1" : ""}`}
              >
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Specialized Services */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Specialized Services</h2>
            <div className="section-divider mx-auto bg-white"></div>
            <p className="text-lg text-accent-foreground/90 mt-6">
              Targeted solutions for specific public health data and technology challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <Card
                key={index}
                className="border-none bg-accent-foreground/10 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-2">
                  <div className="bg-accent-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-playfair text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-accent-foreground/90 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">My Approach</h2>
            <div className="section-divider mx-auto"></div>
            <p className="text-lg text-foreground/80 mt-6">
              A systematic methodology that ensures successful outcomes for every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Assess & Understand",
                description:
                  "I begin by thoroughly understanding your agency's current state, challenges, and objectives through stakeholder interviews, data landscape analysis, and capability assessment.",
                icon: <Lightbulb className="h-10 w-10 text-primary" />,
              },
              {
                step: "02",
                title: "Design & Plan",
                description:
                  "Based on the assessment findings, I develop a tailored strategy and implementation plan that aligns with your public health goals, addresses key challenges, and leverages opportunities.",
                icon: <FileText className="h-10 w-10 text-primary" />,
              },
              {
                step: "03",
                title: "Implement & Empower",
                description:
                  "I work collaboratively with your team to implement solutions, transfer knowledge, and build internal capabilities to ensure sustainable long-term success and impact.",
                icon: <Users className="h-10 w-10 text-primary" />,
              },
            ].map((phase, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mr-4">
                      {phase.icon}
                    </div>
                    <div className="text-3xl font-bold text-primary">{phase.step}</div>
                  </div>
                  <h3 className="text-xl font-playfair font-medium mb-3">{phase.title}</h3>
                  <p className="text-foreground/70">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Engagement */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Custom Engagements</h2>
              <div className="section-divider bg-white"></div>
              <p className="text-primary-foreground/90 mt-6 mb-4">
                Don't see exactly what you need? I offer customized services tailored to your agency's specific
                challenges and objectives.
              </p>
              <p className="text-primary-foreground/90 mb-6">
                Whether you need a combination of services, a specialized solution, or a unique approach, I'll work with
                you to design an engagement that delivers the results your public health agency needs.
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/contact">
                  Discuss Your Needs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl animate-slide-in-right hidden lg:block">
              <Image
                src="/images/custom-engagement.jpeg"
                alt="Custom engagement - connecting solutions"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Frequently Asked Questions</h2>
            <div className="section-divider mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            {[
              {
                question: "How long does a typical engagement last?",
                answer:
                  "Engagement duration varies based on scope and complexity. Strategy development typically takes 4-8 weeks, while implementation projects can range from 3-12 months. I also offer ongoing advisory relationships to support your agency's evolving needs.",
              },
              {
                question: "How do you ensure solutions are sustainable after you leave?",
                answer:
                  "Knowledge transfer and capacity building are integral to my approach. I work closely with your team throughout the engagement, providing training, documentation, and support to ensure your staff can maintain and build upon the implemented solutions.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-medium mb-3">{faq.question}</h3>
                  <p className="text-foreground/70">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/faq">View All FAQs</Link>
            </Button>
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
              Let's discuss how my services can help your public health agency leverage data to improve community health
              outcomes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/contact">Contact Me</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link href="/about">Learn About My Approach</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
