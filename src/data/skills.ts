export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["JavaScript", "Java", "C++", "C", "C#", "Python", "Dart"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap", "ES6+"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Java Swing", "RESTful APIs"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Mobile",
    items: ["Flutter (Dart)"],
  },
  {
    category: "Tools & Concepts",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Visual Studio",
      "Linux",
      "OOP",
      "Agile",
      "SEO",
      "Responsive Design",
    ],
  },
];
