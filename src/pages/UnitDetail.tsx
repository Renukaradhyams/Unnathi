import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import facilityImg from "@/assets/facility.jpg";
import { unitsById } from "@config/units.config";
import { buildPageSeo } from "@/seo/pageSeo";
import { seoImages } from "@config/images.config";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const UnitDetail = () => {
  const { unitId } = useParams<{ unitId: string }>();
  const unit = unitsById[unitId || ""];

  if (!unit) {
    return (
      <Layout seo={buildPageSeo("notFound", [{ name: "Home", path: "/" }, { name: "Units", path: "/units" }], { path: `/units/${unitId}` })}>
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
    <Layout
      seo={buildPageSeo(
        "unitDetail",
        [
          { name: "Home", path: "/" },
          { name: "Our Units", path: "/units" },
          { name: unit.name, path: `/units/${unitId}` },
        ],
        {
          title: `${unit.name} | CNC Manufacturing Unit`,
          description: `${unit.specialisation} at ${unit.location}. CNC machining Bangalore infrastructure for precision components India.`,
          path: `/units/${unitId}`,
        },
        seoImages.filter((image) => image.path === `/units/${unitId}`).map((image) => ({ name: image.title, imageUrl: image.image, caption: image.caption, pagePath: image.path, width: image.width, height: image.height, encodingFormat: image.mimeType })),
      )}
    >
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
            <img src={facilityImg} alt={`${unit.name} CNC manufacturing facility`} title={`${unit.name} CNC manufacturing facility`} className="rounded-xl shadow-elevated w-full h-72 object-cover"  loading="lazy" decoding="async" />
          </motion.div>
        </div>
      </section>

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
