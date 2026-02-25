export type UnitConfig = {
  id: string;
  name: string;
  location: string;
  address: string;
  specialisation: string;
  overview: string;
  capabilities: string[];
  mapSrc: string;
};

export const unitsConfig: UnitConfig[] = [
  {
    id: "bangalore-1",
    name: "Unit 1 — Bangalore",
    location: "Peenya Industrial Area",
    address: "Plot No. 45, 4th Phase, Peenya Industrial Area, Bangalore - 560058, Karnataka, India",
    specialisation: "CNC Turning & Precision Machining",
    overview: "Our flagship unit in Peenya is the hub of CNC turning operations, housing advanced multi-axis CNC lathes, Swiss-type turning centers, and precision grinding machines.",
    capabilities: ["Multi-Axis CNC Turning", "Swiss-Type CNC Lathes", "Precision Cylindrical Grinding", "Thread Grinding & Whirling", "Turn-Mill Combined Operations", "Bar-Fed Automated Production"],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8!2d77.51!3d13.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAx!5e0!3m2!1sen!2sin!4v1234567890",
  },
  {
    id: "bangalore-2",
    name: "Unit 2 — Bangalore",
    location: "Rajajinagar Industrial Estate",
    address: "Unit 12B, Rajajinagar Industrial Estate, Bangalore - 560010, Karnataka, India",
    specialisation: "CNC Milling & 5-Axis Machining",
    overview: "Our second unit specializes in advanced CNC milling operations with 5-axis and 4-axis machining centers for complex geometry parts.",
    capabilities: ["5-Axis VMC Machining", "4-Axis HMC Operations", "High-Speed Milling", "Complex Geometry Machining", "Prototype Development", "Fixture Design & Manufacturing"],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5!2d77.55!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAx!5e0!3m2!1sen!2sin!4v1234567890",
  },
  {
    id: "bangalore-3",
    name: "Unit 3 — Bangalore",
    location: "Bommasandra Industrial Area",
    address: "Plot 78, Bommasandra Industrial Area, Bangalore - 560099, Karnataka, India",
    specialisation: "Assembly & Quality Inspection",
    overview: "This dedicated unit handles sub-assembly, final inspection, and quality assurance operations with climate-controlled metrology.",
    capabilities: ["Sub-Assembly & Integration", "CMM Inspection (Zeiss/Mitutoyo)", "First Article Inspection (AS9102)", "Surface Treatment Coordination", "Packaging & Logistics", "Quality Documentation"],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2!2d77.68!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAx!5e0!3m2!1sen!2sin!4v1234567890",
  },
  {
    id: "tumakuru",
    name: "Unit 4 — Tumakuru",
    location: "Tumakuru Industrial Area",
    address: "Survey No. 156, Tumakuru Industrial Area, Tumakuru - 572101, Karnataka, India",
    specialisation: "High-Volume Production & Batch Processing",
    overview: "Our largest facility in Tumakuru is designed for high-volume batch production with automated bar-feeding and scalable workflows.",
    capabilities: ["High-Volume Batch Production", "Automated Bar-Fed Turning", "Production CNC Milling", "In-Process Quality Checks", "Large Component Machining", "Warehousing & Dispatch"],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.5!2d77.1!3d13.34!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAx!5e0!3m2!1sen!2sin!4v1234567890",
  },
];

export const unitsById = Object.fromEntries(unitsConfig.map((unit) => [unit.id, unit]));
