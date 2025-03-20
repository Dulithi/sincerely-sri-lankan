export interface IGTAOpportunity {
    title: string;
    location: string;
    duration: string;
    description: string;
    company: string;
    applicants: number;
  }
  
  export const iGTaOpportunities: IGTAOpportunity[] = [
    {
      title: "Software Developer",
      location: "Colombo, Sri Lanka",
      duration: "6 - 12 Months",
      description: "Join our full-stack team to develop and enhance our web applications using React and Node.js.",
      company: "Tech Solutions Lanka",
      applicants: 35,
    },
    {
      title: "Data Analyst Intern",
      location: "Kandy, Sri Lanka",
      duration: "3 - 6 Months",
      description: "Analyze large datasets and generate insights to drive strategic business decisions.",
      company: "Data Insights Lanka",
      applicants: 20,
    },
    {
      title: "Marketing Coordinator",
      location: "Galle, Sri Lanka",
      duration: "6 - 9 Months",
      description: "Assist in developing marketing campaigns and social media strategies to boost brand awareness.",
      company: "BrandBoost Lanka",
      applicants: 15,
    },
    {
      title: "Cybersecurity Specialist",
      location: "Jaffna, Sri Lanka",
      duration: "12 Months",
      description: "Enhance our security systems by identifying vulnerabilities and implementing protective measures.",
      company: "SecureTech Lanka",
      applicants: 25,
    },
    {
      title: "UX/UI Designer",
      location: "Negombo, Sri Lanka",
      duration: "6 Months",
      description: "Design intuitive and engaging user experiences for our mobile and web applications.",
      company: "CreativeLabs Lanka",
      applicants: 30,
    }
  ];