import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Factory, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const units = [
  {
    id: "bangalore-1",
    name: "Unit 1 — Bangalore",
    location: "Peenya Industrial Area, Bangalore",
    specialisation: "Precision CNC Turning Operations",
    capabilities: ["Multi-Axis CNC Turning", "Swiss-Type Lathes", "Precision Grinding"],
  },
  {
    id: "bangalore-2",
    name: "Unit 2 — Bangalore",
    location: "Rajajinagar Industrial Estate, Bangalore",
    specialisation: "Advanced Milling & Multi-Axis Machining",
    capabilities: ["5-Axis VMC", "4-Axis HMC", "High-Speed Machining"],
  },
  {
    id: "bangalore-3",
    name: "Unit 3 — Bangalore",
    location: "Bommasandra Industrial Area, Bangalore",
    specialisation: "Batch Production & Quality Inspection",
    capabilities: ["Batch Production", "CMM Inspection", "Surface Treatment"],
  },
  {
    id: "tumakuru",
    name: "Unit 4 — Tumakuru",
    location: "Tumakuru Industrial Area, Tumakuru",
    specialisation: "High-Volume Manufacturing & Expansion",
    capabilities: ["High-Volume Production", "Bar-Fed Turning", "Automated Manufacturing"],
  },
];

const OurUnits = () => (
  <Layout>
    <section className="relative pt-36 pb-24 bg-gradient-dark overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(0 0% 100% / 0.1) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      </div>
      <div className="container relative">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-primary/20 text-primary-foreground rounded-full mb-4 border border-primary/30">Our Presence</span>
          <h1 className="mt-2 text-4xl md:text-6xl font-heading text-primary-foreground">Our Manufacturing Units</h1>
          <p className="mt-4 text-steel max-w-xl text-lg">Multiple manufacturing units strategically located in Bangalore and Tumakuru enabling scalable production, specialization, and efficient logistics.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container">
        <SectionHeading label="Facilities" title="4 Units. One Mission." description="Each unit includes advanced CNC machines, skilled manpower, and quality inspection systems." />
        <div className="grid md:grid-cols-2 gap-8">
          {units.map((unit, i) => (
            <motion.div
              key={unit.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.1, duration: 0.6 } } }}
              className="bg-muted rounded-xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 group hover:-translate-y-1 border border-transparent hover:border-primary/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-industrial flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-industrial">
                  <Factory className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">{unit.name}</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3" /> {unit.location}</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-primary mb-3">{unit.specialisation}</p>
              <ul className="space-y-1.5 mb-5">
                {unit.capabilities.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" /> {c}
                  </li>
                ))}
              </ul>
              <Link to={`/units/${unit.id}`}>
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group/btn">
                  View Details <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default OurUnits;
