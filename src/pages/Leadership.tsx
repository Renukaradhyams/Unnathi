import { motion } from "framer-motion";
import { Users, Linkedin, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import { buildPageSeo } from "@/seo/pageSeo";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const directors = [
  {
    name: "Mr. Narayana S",
    designation: "Director — Technical",
    role: "Technology Adoption & Operational Excellence",
    background: "A technical leader with extensive experience in CNC machining, production engineering, and manufacturing strategy. He drives technology adoption and operational excellence within the organization, ensuring the company stays at the forefront of precision manufacturing.",
    highlights: ["CNC machining expertise", "Production engineering leadership", "Manufacturing strategy", "Technology adoption champion"],
  },
  {
    name: "Mr. Madhu K S",
    designation: "Director — Technical",
    role: "Precision Manufacturing & Quality Improvement",
    background: "An expert in precision manufacturing processes with deep experience in CNC operations, production optimization, and quality improvement initiatives. His focus on continuous improvement has been instrumental in achieving manufacturing excellence.",
    highlights: ["Precision manufacturing expert", "CNC operations specialist", "Production optimization", "Quality improvement initiatives"],
  },
  {
    name: "Mr. Sandeep G Parvatikar",
    designation: "Director — Marketing",
    role: "Business Development & Strategic Growth",
    background: "Responsible for business development, customer engagement, and strategic growth. He focuses on building long-term partnerships with domestic and international customers, expanding the company's market presence across multiple engineering sectors.",
    highlights: ["Business development leadership", "Customer engagement strategy", "Domestic & international markets", "Long-term partnership building"],
  },
  {
    name: "Mrs. K M Aruna",
    designation: "Director — Operations",
    role: "Operations Management & Administrative Coordination",
    background: "Leads operations management, administrative coordination, and organizational processes ensuring efficient execution and operational stability. Her leadership ensures seamless day-to-day functioning across all manufacturing units.",
    highlights: ["Operations management", "Administrative coordination", "Organizational processes", "Operational stability"],
  },
];

const Leadership = () => (
  <Layout seo={buildPageSeo("leadership", [{ name: "Home", path: "/" }, { name: "Leadership", path: "/leadership" }])}>
    <section className="relative pt-36 pb-24 bg-gradient-dark overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(0 0% 100% / 0.1) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      </div>
      <div className="container relative">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-primary/20 text-primary-foreground rounded-full mb-4 border border-primary/30">Our Team</span>
          <h1 className="mt-2 text-4xl md:text-6xl font-heading text-primary-foreground">Board of Directors</h1>
          <p className="mt-4 text-steel max-w-xl text-lg">Meet the leaders driving precision engineering excellence at Unnathi CNC Technologies.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container">
        <SectionHeading label="Leadership" title="Our Directors" description="Experienced professionals committed to manufacturing excellence and customer success." />
        <div className="grid md:grid-cols-2 gap-8">
          {directors.map((d, i) => (
            <motion.div
              key={d.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.1, duration: 0.6 } } }}
              className="bg-muted rounded-xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 group hover:-translate-y-1 border border-transparent hover:border-primary/10"
            >
              <div className="flex items-start gap-5">
                <div className="w-20 h-20 rounded-xl bg-gradient-industrial flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-industrial">
                  <Users className="h-9 w-9 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">{d.name}</h3>
                  <p className="text-sm font-semibold text-primary">{d.designation}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{d.role}</p>
                </div>
              </div>
              <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{d.background}</p>
              <div className="mt-5">
                <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">Key Highlights</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {d.highlights.map((h) => (
                    <li key={h} className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 flex gap-2">
                <a href="#" className="p-2 rounded-lg bg-background hover:bg-primary/10 transition-colors"><Linkedin className="h-4 w-4 text-primary" /></a>
                <a href="#" className="p-2 rounded-lg bg-background hover:bg-primary/10 transition-colors"><Mail className="h-4 w-4 text-primary" /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Leadership;
