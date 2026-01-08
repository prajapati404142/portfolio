// src/data.js
export const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '30+', label: 'Happy Clients' },
  { number: '3+', label: 'Years Experience' },
  { number: '15+', label: 'Technologies' }
];

export const experiences = [
  { title: 'Senior MERN Developer', company: 'Tech Solutions Inc.', period: 'Jan 2023 - Present', description: 'Leading development...', skills: ['React','Node.js','MongoDB'] },
  { title: 'Full Stack Developer', company: 'Digital Innovations', period: 'Jun 2021 - Dec 2022', description: 'Developed and maintained...', skills: ['React','Express'] },
];

export const education = [
  { degree: 'Bachelor of Technology', field: 'Computer Science', institution: 'ABC University', year: '2016 - 2020', grade: 'CGPA: 8.5/10' },
];

export const skills = {
  Frontend: { items: ['React','Tailwind','JS'], percentage: 90 },
  Backend: { items: ['Node','Express','MongoDB'], percentage: 85 }
};

export const projects = [
  {
    title: "Personal Portfolio Website",
    category: "Frontend / MERN",
    description:
      "A modern and responsive personal portfolio website to showcase skills, projects, education, and contact details. Built with React and Tailwind CSS.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    tech: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Vite",
      "Responsive Design",
    ],
    github: "https://github.com/yourusername/portfolio",
    live: "https://your-portfolio-live-link.com",
  },

  {
    title: "Contact Management System",
    category: "MERN Stack",
    description:
      "A full-stack contact management system with user authentication, CRUD operations, and secure data storage using MongoDB.",
    image:
      "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=800",
    tech: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JWT",
      "REST API",
    ],
    github: "https://github.com/prajapati404142/Contact-Management-Application",
    live: "https://contact-management-live.com",
  },

  {
    title: "Todo Application",
    category: "Web App",
    description:
      "A task management application that allows users to add, update, delete, and track daily tasks with a clean UI.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800",
    tech: [
      "React",
      "JavaScript",
      "Local Storage",
      "Tailwind CSS",
    ],
    github: "https://github.com/yourusername/todo-app",
    live: "https://todo-app-live-link.com",
  },

  {
    title: "News Content Management System",
    category: "MERN Stack",
    description:
      "A news CMS where admins can publish, update, and delete news articles, and users can browse news by category.",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800",
    tech: [
      "MongoDB",
      "Express.js",
      "Node.js",
      "Admin Panel",
    ],
    github: "https://github.com/yourusername/news-cms",
    live: "https://news-cms-live-link.com",
  },

  {
    title: "Weather Application",
    category: "API Based App",
    description:
      "A weather forecasting app that shows real-time weather data using a public weather API with location search.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    tech: [
      "React",
      "JavaScript",
      "Weather API",
      "Axios",
      "CSS",
    ],
    github: "https://github.com/prajapati404142/Weather-App",
    // live: "https://weather-app-live-link.com",
  },
  {
    title: "Task Manager Application",
    category: "MERN Stack",
    description:
      "A task management application that allows users to add, update, delete, and track daily tasks with a clean UI.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    tech: [
      "React",
      "Express.js",
      "MySql",
       "Node.js",
      "Tailwind CSS",
    ],
    github: "https://github.com/prajapati404142",
    live: "https://task-manager-app-lcvx.onrender.com",
  },
];


export const testimonials = [
  { name:'Sarah Johnson', role:'Product Manager', image:'https://images.unsplash.com/…', text:'Exceptional developer...', rating:5 }
];