import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function FAQ() {
  const faqs = [
    {
      question: "What is your approach to data modernization?",
      answer:
        "My approach to data modernization is collaborative and tailored to each organization's unique needs. I begin with a comprehensive assessment of your current data landscape, identifying strengths, gaps, and opportunities. From there, I develop a strategic roadmap that prioritizes initiatives based on impact and feasibility. Throughout implementation, I focus on building internal capacity and ensuring sustainable solutions that continue to deliver value long after our engagement ends.",
    },
    {
      question: "How do you measure success in your projects?",
      answer:
        "Success metrics are defined collaboratively at the project outset and typically include both quantitative measures (ROI, efficiency gains, cost savings) and qualitative outcomes (improved decision-making processes, enhanced data culture). Regular assessments against these metrics ensure we're delivering tangible value. I believe that true success means your organization can independently maintain and build upon the solutions we implement together.",
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer:
        "Yes, I offer various support options including maintenance agreements, periodic reviews, and capability building to ensure your team can effectively leverage the implemented solutions. My goal is to establish long-term partnerships that continue to drive value for your organization. I can tailor support packages to meet your specific needs and budget constraints.",
    },
    {
      question: "What makes your approach different from other consultants?",
      answer:
        "My approach combines technical expertise with strategic business acumen, ensuring that data solutions directly address core business challenges. I emphasize knowledge transfer and capability building, focusing not just on immediate results but on sustainable long-term impact for your organization. Additionally, my background spanning both technical implementation and strategic leadership allows me to bridge the gap between technical possibilities and business realities.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope, complexity, and organizational readiness. A focused data analysis project might take 4-6 weeks, while a comprehensive data transformation initiative could span several months. During our initial consultation, I'll provide a more specific timeline based on your project requirements. I'm also flexible in structuring engagements to accommodate your timeline and budget constraints.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "I have experience working across diverse industries including healthcare, finance, retail, technology, and public sector organizations. My methodologies are adaptable to various contexts while leveraging industry-specific insights to deliver targeted solutions. This cross-industry experience allows me to bring fresh perspectives and innovative approaches to your organization's challenges.",
    },
  ]

  return (
    <>
      <section className="pt-32 pb-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Frequently Asked Questions</h1>
            <div className="section-divider mx-auto"></div>
            <p className="text-lg text-foreground/80 mt-6">
              Find answers to common questions about my services, approach, and expertise.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-medium py-4 hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 pb-4 pt-2">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 text-center">
              <p className="text-lg mb-6">Still have questions?</p>
              <Button className="bg-primary hover:bg-primary/90 text-white">Contact Me</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
