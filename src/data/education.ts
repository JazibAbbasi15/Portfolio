export type EducationEntry = {
  degree: string;
  institution: string;
  period: string;
  details?: string;
};

export const education: EducationEntry[] = [
  {
    degree: "BS in Computer Science",
    institution: "COMSATS University Islamabad",
    period: "Jul 2022 – Jun 2026",
    details:
      "Relevant coursework: Data Structures & Algorithms, Database Systems, Web Development, OOP, Software Engineering, Mobile Application Development.",
  },
  {
    degree: "Intermediate (FSc Pre-Engineering)",
    institution: "Bahria College E-8, Islamabad",
    period: "2019 – 2021",
  },
  {
    degree: "Matriculation",
    institution: "Bahria College E-8, Islamabad",
    period: "2017 – 2019",
  },
];
