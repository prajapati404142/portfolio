import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Code, Award, Briefcase, GraduationCap, Calendar, Star, ChevronRight, Send } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Education', 'Testimonials', 'Contact'];

  const experiences = [
    {
      title: 'Senior MERN Developer',
      company: 'Tech Solutions Inc.',
      period: 'Jan 2023 - Present',
      description: 'Leading development of enterprise applications using MERN stack. Managed team of 5 developers and implemented CI/CD pipelines.',
      skills: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker']
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations',
      period: 'Jun 2021 - Dec 2022',
      description: 'Developed and maintained multiple web applications. Improved application performance by 40% through optimization.',
      skills: ['React', 'Express', 'PostgreSQL', 'Redux']
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Labs',
      period: 'Jan 2020 - May 2021',
      description: 'Built responsive web interfaces and RESTful APIs. Collaborated with design team to implement pixel-perfect designs.',
      skills: ['JavaScript', 'Node.js', 'MongoDB', 'HTML/CSS']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science',
      institution: 'ABC University',
      year: '2016 - 2020',
      grade: 'CGPA: 8.5/10'
    },
    {
      degree: 'Full Stack Development',
      field: 'MERN Stack Specialization',
      institution: 'Online Bootcamp',
      year: '2020',
      grade: 'Certification'
    }
  ];

  const skills = {
    'Frontend': {
      items: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Material-UI', 'Redux', 'Context API', 'React Router'],
      percentage: 90
    },
    'Backend': {
      items: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL', 'JWT Authentication', 'OAuth', 'WebSocket', 'Socket.io', 'Microservices'],
      percentage: 85
    },
    'Database': {
      items: ['MongoDB', 'Mongoose', 'MySQL', 'PostgreSQL', 'Redis', 'Firebase', 'Database Design', 'Query Optimization'],
      percentage: 80
    },
    'DevOps & Tools': {
      items: ['Git', 'GitHub', 'Docker', 'AWS', 'Heroku', 'Vercel', 'Netlify', 'CI/CD', 'Linux', 'Nginx', 'Jest', 'Postman'],
      percentage: 75
    }
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      description: 'Complete e-commerce solution with admin panel, user authentication, payment gateway integration, order management, and real-time inventory tracking.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'JWT'],
      github: 'https://github.com',
      live: 'https://example.com',
      features: ['Payment Gateway', 'Admin Dashboard', 'Real-time Updates', 'Email Notifications']
    },
    {
      title: 'Social Media Application',
      category: 'Web App',
      description: 'Full-featured social networking platform with posts, stories, real-time chat, notifications, and advanced search functionality.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Cloudinary', 'JWT'],
      github: 'https://github.com',
      live: 'https://example.com',
      features: ['Real-time Chat', 'Push Notifications', 'Image Upload', 'User Profiles']
    },
    {
      title: 'Project Management Tool',
      category: 'SaaS',
      description: 'Collaborative project management system with Kanban boards, Gantt charts, team collaboration, and productivity analytics.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      tech: ['React', 'Express', 'MongoDB', 'Redux', 'Chart.js', 'WebSocket'],
      github: 'https://github.com',
      live: 'https://example.com',
      features: ['Drag & Drop', 'Analytics', 'Team Collaboration', 'File Sharing']
    },
    {
      title: 'Video Streaming Platform',
      category: 'Media',
      description: 'Netflix-style streaming service with video upload, HLS streaming, user subscriptions, recommendations, and watch history.',
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'FFmpeg', 'Redis'],
      github: 'https://github.com',
      live: 'https://example.com',
      features: ['Video Streaming', 'Subscriptions', 'Recommendations', 'Watch History']
    },
    {
      title: 'Blog & CMS Platform',
      category: 'Content',
      description: 'Modern content management system with rich text editor, SEO optimization, analytics, multi-author support, and commenting system.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'MDX', 'Prisma', 'NextAuth'],
      github: 'https://github.com',
      live: 'https://example.com',
      features: ['SEO Optimized', 'Analytics', 'Comments', 'Categories & Tags']
    },
    {
      title: 'Real Estate Marketplace',
      category: 'Marketplace',
      description: 'Property listing platform with advanced filters, virtual tours, booking system, agent profiles, and integrated mapping.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Mapbox', 'Stripe', 'JWT'],
      github: 'https://github.com',
      live: 'https://example.com',
      features: ['Interactive Maps', 'Virtual Tours', 'Booking System', 'Agent Profiles']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager at TechCorp',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      text: 'Exceptional developer who consistently delivers high-quality code. Their expertise in MERN stack helped us launch our product ahead of schedule.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO at StartupHub',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      text: 'A true professional with deep technical knowledge. They transformed our ideas into a scalable application that exceeded expectations.',
      rating: 5
    },
    {
      name: 'Emma Davis',
      role: 'Lead Designer at Creative Studio',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      text: 'Great collaboration skills and attention to detail. They brought our designs to life with pixel-perfect implementation.',
      rating: 5
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '3+', label: 'Years Experience' },
    { number: '15+', label: 'Technologies' }
  ];

  return (
    <div className="bg-gray-950 text-white">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg shadow-blue-500/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold">
                <span className="text-white">Dev</span>
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Folio</span>
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activeSection === item.toLowerCase()
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center gap-2">
                <Download size={18} />
                Resume
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeSection === item.toLowerCase()
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2">
                <Download size={18} />
                Download Resume
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                Available for opportunities
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                Hi, I'm <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">John Doe</span>
              </h1>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300 mb-6">
                MERN Stack Developer
              </h2>
              
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Passionate about creating beautiful, functional, and user-friendly websites. I specialize in building modern web applications using MongoDB, Express.js, React, and Node.js.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold flex items-center gap-2 shadow-lg shadow-blue-500/25"
                >
                  View My Work
                  <ChevronRight size={20} />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 border-2 border-gray-700 rounded-lg hover:border-blue-500 transition-all font-semibold"
                >
                  Get In Touch
                </button>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-gray-400">Connect:</span>
                <div className="flex gap-3">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-lg transition-all">
                    <Github size={20} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-lg transition-all">
                    <Linkedin size={20} />
                  </a>
                  <a href="mailto:your@email.com" className="w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-lg transition-all">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative">
                  <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&h=500&fit=crop"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl transform rotate-12">
                    <Code size={40} className="-rotate-12" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">I'm a MERN Stack Developer with a passion for innovation</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                With over 3 years of experience in web development, I've had the privilege of working on diverse projects ranging from e-commerce platforms to social media applications. My journey in software development has been driven by a constant desire to learn and adapt to new technologies.
              </p>
              <p className="text-gray-400 mb-4 leading-relaxed">
                I specialize in the MERN stack but I'm always exploring new frameworks and tools to expand my skill set. My approach to development focuses on writing clean, maintainable code while ensuring optimal performance and user experience.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source projects, writing technical blogs, or mentoring aspiring developers.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone size={20} className="text-blue-500" />
                  <span>+91 1234567890</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail size={20} className="text-blue-500" />
                  <span>your@email.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin size={20} className="text-blue-500" />
                  <span>India</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-blue-600/10 rounded-lg flex items-center justify-center">
                    <Award className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Problem Solver</h4>
                    <p className="text-gray-400">Expert at breaking down complex problems into simple, efficient solutions.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-purple-600/10 rounded-lg flex items-center justify-center">
                    <Code className="text-purple-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Clean Code Advocate</h4>
                    <p className="text-gray-400">Writing maintainable, scalable code following industry best practices.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-pink-600/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="text-pink-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Team Player</h4>
                    <p className="text-gray-400">Excellent collaboration and communication skills in agile environments.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Work Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-8 pb-12 border-l-2 border-gray-800 last:pb-0">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-gray-950"></div>
                
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar size={18} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, j) => (
                      <span key={j} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, data], i) => (
              <div key={i} className="bg-gray-900 p-8 rounded-xl border border-gray-800">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">{category}</h3>
                  <span className="text-3xl font-bold text-blue-500">{data.percentage}%</span>
                </div>
                
                <div className="w-full bg-gray-800 rounded-full h-3 mb-6">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${data.percentage}%` }}
                  ></div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {data.items.map((skill, j) => (
                    <span key={j} className="px-3 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm hover:bg-gray-700 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Showcase of my recent work and personal projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech, j) => (
                      <span key={j} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {education.map((edu, i) => (
              <div key={i} className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all">
                <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="text-blue-500" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-blue-400 font-semibold mb-2">{edu.field}</p>
                <p className="text-gray-400 mb-2">{edu.institution}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{edu.year}</span>
                  <span className="text-green-400">{edu.grade}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Client Testimonials</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              What clients and colleagues say about working with me
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={18} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let's work together to bring your ideas to life
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Your Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium mb-2 text-gray-300">Subject</label>
                <input
                  type="text"
                  placeholder="Project Discussion"
                  className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                <textarea
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  alert('Thank you! Your message has been sent. (Demo)');
                }}
                className="w-full mt-6 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
              >
                <Send size={20} />
                Send Message
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-gray-900 rounded-xl border border-gray-800">
                <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-blue-500" size={24} />
                </div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-gray-400 text-sm">your@email.com</p>
              </div>
              <div className="text-center p-6 bg-gray-900 rounded-xl border border-gray-800">
                <div className="w-12 h-12 bg-purple-600/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-purple-500" size={24} />
                </div>
                <h4 className="font-semibold mb-2">Phone</h4>
                <p className="text-gray-400 text-sm">+91 1234567890</p>
              </div>
              <div className="text-center p-6 bg-gray-900 rounded-xl border border-gray-800">
                <div className="w-12 h-12 bg-pink-600/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-pink-500" size={24} />
                </div>
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-gray-400 text-sm">India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 John Doe. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:your@email.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}