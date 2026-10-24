export const portfolioData = {
  personal: {
    name: "Omm",
    role: "Aspiring Software Developer",
    gradYear: "2027",
    college: "Aryan Institute of Engineering and Technology, Bhubaneswar",
    degree: "B.Tech CSE",
    resumeUrl: "/resume.pdf",
    socials: {
      github: "https://github.com/OmmPrakashBaral1",
      linkedin: "https://www.linkedin.com/in/ommprakashbaral1/",
      email: "ommprakashbaral77@gmail.com",
    },
  },
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    greeting: "Hi, I'm Omm.",
    role: "Software Developer",
    tagline: "Building web applications and AWS cloud systems.",
    subheading: "B.Tech CSE '27 • MERN & Python • Cloud Intern @ A2R",
    ctaPrimary: { label: "View Projects", href: "#projects" },
    ctaSecondary: { label: "Download Resume", href: "/resume.pdf" },
  },
  about: {
    bio: [
      "Aspiring Software Developer graduating in 2027 with a B.Tech in CSE from Aryan Institute of Engineering and Technology, Bhubaneswar.",
      "Hands-on with MERN and Python full stack development, focusing on clean architecture and practical problem solving.",
      "Cloud Computing intern at A2R Software Consulting with practical experience in AWS infrastructure and automated CI/CD pipelines.",
    ],
    highlights: [
      {
        title: "Cloud & Infrastructure",
        subtitle: "A2R Software Consulting",
        description: "Hands-on experience deploying containerized architectures and automated CI/CD pipelines across AWS services.",
      },
      {
        title: "Full-Stack Engineering",
        subtitle: "MERN & Python Stack",
        description: "Building responsive frontends in React and Tailwind paired with structured backend APIs in Node, Express, and Flask.",
      },
    ],
  },
  skills: [
    {
      category: "Languages",
      items: ["Python", "JavaScript", "SQL", "C"],
    },
    {
      category: "Frontend",
      items: ["React", "Bootstrap", "Tailwind"],
    },
    {
      category: "Backend (learning)",
      items: ["Node", "Express", "Flask", "FastAPI"],
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS (EC2, S3, VPC, IAM, Lambda, RDS, ECS)", "Git/GitHub"],
    },
  ],
  projects: [
    {
      title: "StudentHub",
      description: "Flask web application deployed on AWS with a fully automated CI/CD pipeline and cloud database integration.",
      tags: ["Flask", "AWS", "CodeBuild", "ECR", "ECS Fargate", "RDS PostgreSQL", "GitHub"],
      githubUrl: "https://github.com/OmmPrakashBaral1/Studenthub",
      demoUrl: "",
      inProgress: false,
    },
    {
      title: "AI Interview Coach",
      description: "Smart interview preparation platform featuring resume analysis, AI-evaluated behavioral & technical answers, and metric tracking.",
      tags: ["React", "Python", "AI", "Resume Upload", "Analytics"],
      githubUrl: "https://github.com/OmmPrakashBaral1/AI-project-backend",
      demoUrl: "",
      inProgress: true,
    },
  ],
  experience: [
    {
      role: "Cloud Computing Intern",
      organization: "A2R Software Consulting",
      period: "MAY 2026 - JULY 2026",
      description: "Working on cloud infrastructure deployment, automation, and AWS service integrations.",
    },
    {
      role: "B.Tech in Computer Science & Engineering",
      organization: "Aryan Institute of Engineering and Technology, Bhubaneswar",
      period: "2023 - 2027",
      description: "Core coursework in Computer Science, Data Structures, Algorithms, DBMS, and Web Technologies.",
    },
  ],
  contact: {
    formEndpoint: "https://formspree.io/f/[placeholder]",
  },
};
