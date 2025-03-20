export interface IGVOpportunity {
    title: string;
    location: string;
    duration: string;
    description: string;
    organization: string;
    sdgTarget: string;
    applicants: number;
  }
  
  export const iGVOpportunities: IGVOpportunity[] = [
    {
      title: "Fingerprint [6 weeks]",
      location: "Colombo, Sri Lanka",
      duration: "6 Weeks",
      description: "Global Volunteers will be responsible for delivering immersive and artistic activities that inspire imagination, problem-solving, critical thinking, and teamwork.",
      organization: "Sarvodaya Movement",
      sdgTarget: "Quality Education - Target 4.4",
      applicants: 3,
    },
    {
      title: "Skill Up! [6 weeks]",
      location: "Kandy, Sri Lanka",
      duration: "6 Weeks",
      description: "Global Volunteers will collaborate with schools to provide career guidance and soft/hard skills training for local youth and build entrepreneurship skills.",
      organization: "National Youth Services Council (NYSC)",
      sdgTarget: "Decent Work And Economic Growth - Target 8.6",
      applicants: 5,
    },
    {
      title: "Heartbeat [6 weeks]",
      location: "Galle, Sri Lanka",
      duration: "6 Weeks",
      description: "Global Volunteers will contribute to public health outreach by raising awareness on disease prevention, mental health, and healthy lifestyle habits.",
      organization: "Sri Lanka Red Cross Society",
      sdgTarget: "Good Health And Well Being - Target 3.4",
      applicants: 4,
    },
    {
      title: "Global Classroom [6 weeks]",
      location: "Jaffna, Sri Lanka",
      duration: "6 Weeks",
      description: "Global Volunteers will work towards improving literacy in the community through teaching mathematics, science, and languages with a non-formal education approach.",
      organization: "Foundation of Goodness",
      sdgTarget: "Quality Education - Target 4.6",
      applicants: 7,
    },
    {
      title: "Happy Bus [6 weeks]",
      location: "Negombo, Sri Lanka",
      duration: "6 Weeks",
      description: "Global Volunteers will engage small children in interactive activities, teaching English, promoting cultural diversity, and fostering a welcoming atmosphere.",
      organization: "Educate Lanka Foundation",
      sdgTarget: "Quality Education - Target 4.7",
      applicants: 6,
    }
  ];