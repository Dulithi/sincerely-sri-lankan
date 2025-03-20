export interface IGTEOpportunity {
    title: string;
    location: string;
    duration: string;
    description: string;
    organization: string;
    applicants: number;
  }
  
  export const iGTeOpportunities: IGTEOpportunity[] = [
    {
      title: "English Teacher",
      location: "Colombo, Sri Lanka",
      duration: "6 - 12 Months",
      description: "Teach English to students of various age groups, focusing on speaking, reading, and writing skills.",
      organization: "Global Learning Academy",
      applicants: 10,
    },
    {
      title: "French Teacher",
      location: "Kandy, Sri Lanka",
      duration: "6 - 9 Months",
      description: "Conduct French language classes and design interactive learning materials for students.",
      organization: "Lanka Language Institute",
      applicants: 7,
    },
    {
      title: "German Teacher",
      location: "Galle, Sri Lanka",
      duration: "9 - 12 Weeks",
      description: "Teach German as a foreign language to students preparing for language certifications.",
      organization: "International Language Center",
      applicants: 5,
    },
    {
      title: "Spanish Teacher",
      location: "Jaffna, Sri Lanka",
      duration: "6 Months",
      description: "Engage students in Spanish language learning through fun and interactive lessons.",
      organization: "Horizon Education Hub",
      applicants: 8,
    },
];