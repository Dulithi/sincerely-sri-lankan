export type Testimonial = {
    name: string;
    country: string;
    program: "iGV" | "iGT" | "iGTA";
    image: string;
    message: string;
  };
  
  export const testimonials: Testimonial[] = [
    {
      name: "Carlos Mendoza",
      country: "Mexico",
      program: "iGV",
      image: "/images/carlos.jpg",
      message:
        "My iGV experience in Sri Lanka was life-changing! I worked on an environmental project, helped local communities, and made friends from all over the world. The hospitality and culture were amazing!",
    },
    {
      name: "Anna Müller",
      country: "Germany",
      program: "iGT",
      image: "/images/anna.jpg",
      message:
        "Joining an iGT internship in Sri Lanka was an incredible opportunity for my career. I worked with a tech company, gained hands-on experience, and explored the beautiful landscapes of Sri Lanka!",
    },
    {
      name: "Ravi Patel",
      country: "India",
      program: "iGTA",
      image: "/images/ravi.jpg",
      message:
        "Through my iGTA experience, I improved my technical and leadership skills while working with a global team. The experience pushed me out of my comfort zone and helped me grow professionally.",
    },
    {
      name: "Sophia Lee",
      country: "South Korea",
      program: "iGV",
      image: "/images/sophia.jpg",
      message:
        "I volunteered in a local school, teaching kids English and soft skills. The experience was humbling and rewarding. Seeing their smiles every day made my journey unforgettable!",
    },
    {
      name: "Lucas Fernandes",
      country: "Brazil",
      program: "iGT",
      image: "/images/lucas.jpg",
      message:
        "My iGT internship gave me exposure to international business culture. The networking opportunities and professional development I gained were beyond my expectations.",
    },
  ];
  