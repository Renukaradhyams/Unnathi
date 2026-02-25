import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, CheckCircle, Factory, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import facilityImg from "@/assets/facility.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const unitData: Record<string, {
  name: string;
  location: string;
  address: string;
  specialisation: string;
  overview: string;
  capabilities: string[];
  mapSrc: string;
}> = {
  "bangalore-1": {
    name: "Unit 1 — Bangalore",
    location: "Peenya Industrial Area",
    address: "Plot No. 45, 4th Phase, Peenya Industrial Area, Bangalore - 560058, Karnataka, India",
    specialisation: "CNC Turning & Precision Machining",
    overview: "Our flagship unit in Peenya is the hub of CNC turning operations, housing advanced multi-axis CNC lathes, Swiss-type turning centers, and precision grinding machines. This unit serves as the primary production facility for high-precision turned components across aerospace, medical, and industrial sectors.",
    capabilities: ["Multi-Axis CNC Turning", "Swiss-Type CNC Lathes", "Precision Cylindrical Grinding", "Thread Grinding & Whirling", "Turn-Mill Combined Operations", "Bar-Fed Automated Production"],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8!2d77.51!3d13.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAx!5e0!3m2!1sen!2sin!4v1234567890",
  },
  "bangalore-2": {
    name: "Unit 2 — Bangalore",
    location: "Rajajinagar Industrial Estate",
    address: "Unit 12B, Rajajinagar Industrial Estate, Bangalore - 560010, Karnataka, India",
    specialisation: "CNC Milling & 5-Axis Machining",
    overview: "Our second unit specializes in advanced CNC milling operations with 5-axis and 4-axis machining centers. This facility handles complex geometries, prismatic components, and high-precision milled parts for demanding applications.",
    capabilities: ["5-Axis VMC Machining", "4-Axis HMC Operations", "High-Speed Milling", "Complex Geometry Machining", "Prototype Development", "Fixture Design & Manufacturing"],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5!2d77.55!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAx!5e0!3m2!1sen!2sin!4v1234567890",
  },
  "bangalore-3": {
    name: "Unit 3 — Bangalore",
    location: "Bommasandra Industrial Area",
    address: "Plot 78, Bommasandra Industrial Area, Bangalore - 560099, Karnataka, India",
    specialisation: "Assembly & Quality Inspection",
    overview: "This dedicated unit handles sub-assembly, final inspection, and quality assurance operations. Equipped with a climate-controlled metrology lab, CMM machines, and comprehensive inspection equipment for 100% quality compliance.",
    capabilities: ["Sub-Assembly & Integration", "CMM Inspection (Zeiss/Mitutoyo)", "First Article Inspection (AS9102)", "Surface Treatment Coordination", "Packaging & Logistics", "Quality Documentation"],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2!2d77.68!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAx!5e0!3m2!1sen!2sin!4v1234567890",
  },
  "tumakuru": {
    name: "Unit 4 — Tumakuru",
    location: "Tumakuru Industrial Area",
    address: "Survey No. 156, Tumakuru Industrial Area, Tumakuru - 572101, Karnataka, India",
    specialisation: "High-Volume Production & Batch Processing",
    overview: "Our newest and largest facility in Tumakuru is designed for high-volume batch production. This unit features automated bar-feeding systems, production CNC lathes, and streamlined workflows for cost-effective manufacturing at scale.",
    capabilities: ["High-Volume Batch Production", "Automated Bar-Fed Turning", "Production CNC Milling", "In-Process Quality Checks", "Large Component Machining", "Warehousing & Dispatch"],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.5!2d77.1!3d13.34!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAx!5e0!3m2!1sen!2sin!4v1234567890",
  },
};

const UnitDetail = () => {
  const { unitId } = useParams<{ unitId: string }>();
  const unit = unitData[unitId || ""];

  if (!unit) {
    return (
      <Layout>
        <section className="pt-32 pb-20 bg-gradient-dark">
          <div className="container text-center">
            <h1 className="text-4xl font-heading text-primary-foreground">Unit Not Found</h1>
            <Link to="/units" className="mt-4 inline-block">
              <Button variant="outline" className="border-steel text-steel hover:bg-primary hover:text-primary-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Units
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="relative pt-36 pb-24 bg-gradient-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(0 0% 100% / 0.1) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="container relative">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Link to="/units" className="inline-flex items-center gap-1 text-sm text-steel hover:text-primary-foreground transition-colors mb-4">
              <ArrowLeft className="h-3 w-3" /> All Units
            </Link>
            <h1 className="text-4xl md:text-6xl font-heading text-primary-foreground">{unit.name}</h1>
            <p className="mt-2 text-steel flex items-center gap-1"><MapPin className="h-4 w-4" /> {unit.location}</p>
            <p className="mt-1 text-sm text-accent font-semibold">{unit.specialisation}</p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-heading text-foreground">Unit Overview</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{unit.overview}</p>
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Address</p>
              <p className="text-sm text-muted-foreground">{unit.address}</p>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <img src={facilityImg} alt={unit.name} className="rounded-xl shadow-elevated w-full h-72 object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <SectionHeading label="Capabilities" title="Key Capabilities" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {unit.capabilities.map((cap, i) => (
              <motion.div
                key={cap}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.05, duration: 0.5 } } }}
                className="bg-background rounded-xl p-5 shadow-card flex items-center gap-3 hover:shadow-elevated transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-industrial flex items-center justify-center shrink-0">
                  <CheckCircle className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium text-foreground">{cap}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-background">
        <div className="container">
          <SectionHeading label="Location" title="Find Us" />
          <div className="rounded-xl overflow-hidden shadow-elevated h-80">
            <iframe
              src={unit.mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title={`${unit.name} Location`}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UnitDetail;
