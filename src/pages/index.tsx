"use client";
import { useState, useEffect } from 'react';
import { FiBriefcase, FiHome, FiUser, FiMenu, FiX, FiGithub, FiExternalLink, FiMail, FiLinkedin } from 'react-icons/fi';

const navItems = [
  { name: 'Home', href: '#home', icon: FiHome },
  { name: 'Projects', href: '#projects', icon: FiBriefcase },
  { name: 'Resume', href: '#resume', icon: FiUser },
  { name: 'Contact', href: '#contact', icon: FiMail },
];

const projects = [
  {
    title: 'Smart Surveillance System using Raspberry Pi',
    description: 'A smart security solution built with Raspberry Pi that uses motion detection and camera integration to monitor real-time activities. The system captures images upon detecting movement and sends alerts to users, enhancing home and office security through an affordable and efficient setup.',
    technologies: ['Raspberry Pi', 'Python', 'OpenCV', 'Motion Detection'],
    github: '#',
    live: '#',
    image: 'https://images.unsplash.com/photo-1678225867994-e7a5b071ebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard built with React.js and Material-UI, fetching real-time data from the OpenWeatherMap API. Users can search for cities and view current conditions, as well as a 5-day forecast.',
    technologies: ['React.js', 'Material-UI', 'OpenWeatherMap API'],
    github: '#',
    live: '#',
    image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80  ',
  },
  {
    title: 'Recipe Sharing Platform',
    description: 'A full-stack recipe sharing platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js). Users can create, share, and save recipes, with authentication handled by JWT and Passport.js.',
    technologies: ['MongoDB', 'React.js', 'Node.js'],
    github: '#',
    live: '#',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const experiences = [
  {
    title: 'IoT Solutions Developer',
    company: 'SmartTech Innovations',
    duration: '2023 - Present',
    description:
      'Designed and developed a Smart Surveillance System using Raspberry Pi, integrating motion detection, image capturing, and real-time alerts. Worked on optimizing hardware-software interaction using Python and OpenCV. Collaborated with a team to deploy scalable and affordable security solutions for residential and commercial use.',
    logo: 'https://plus.unsplash.com/premium_photo-1688678097473-2ce11d23e30c?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%27',
  },
  {
    title: 'Frontend Developer',
    company: 'SkyWeather Solutions',
    duration: '2022 - 2023',
    description:
      'Built and maintained a responsive Weather Dashboard application using React.js and Material-UI. Integrated real-time data fetching from the OpenWeatherMap API and enhanced user experience with dynamic search and 5-day forecast features. Focused on optimizing app performance and accessibility.',
    logo: 'https://images.unsplash.com/photo-1707396172160-448cab6de831?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%27',
  },
  {
    title: 'MERN Stack Developer Intern',
    company: 'FlavorVerse',
    duration: '2021 - 2022',
    description:
      'Contributed to the development of a full-stack Recipe Sharing Platform using the MERN stack (MongoDB, Express.js, React.js, Node.js). Implemented user authentication with JWT and Passport.js, developed RESTful APIs, and worked on building interactive UI components to improve user engagement.',
    logo: 'https://images.unsplash.com/photo-1621921644855-9b890783dbe3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%27',
  },
];

const educations = [
  {
    degree: 'B-Tech',
    school: 'Presidency University',
    duration: '2020 - 2024',
    logo: 'https://images.unsplash.com/photo-1607013407627-6ee814329547?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%27',
  },
  {
    degree: 'Diploma',
    school: 'Government Tool Room & Training Centre Kalaburagi',
    duration: '2017 - 2020',
    logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80%27',
  },
];

const skills = [
  { name: 'JavaScript (ES6+)', level: 65 },
  { name: 'React.js', level: 60 },
  { name: 'Next.js', level: 70 },
  { name: 'Node.js', level: 75 },
  { name: 'Express.js', level: 60 },
  { name: 'MongoDB', level: 65 },
  { name: 'Firebase Firestore', level: 75 },
  { name: 'HTML5', level: 80 },
  { name: 'CSS3', level: 80 },
  { name: 'Tailwind CSS', level: 70 },
  { name: 'Git', level: 80 },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
        }
        return false;
      }) || 'home';

      setActiveSection(currentSection);
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const SkillBar = ({ name, level }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full" 
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50 font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap');
        
        :root {
          --font-heading: 'Poppins', sans-serif;
          --font-body: 'Manrope', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: var(--font-heading);
        }
        
        body, p, span, a, div {
          font-family: var(--font-body);
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
      `}</style>

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg rounded-lg px-4 py-3 border border-gray-200 dark:border-gray-700 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
            <h1 className="text-xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Bhagyavardhan
              </span>
            </h1>
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-colors"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <FiX size={24} className="text-white" /> : <FiMenu size={24} className="text-white" />}
            </button>
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'bg-gradient-to-r from-indigo-500/10 to-purple-600/10 text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900 md:hidden">
          <div className="flex flex-col p-4 space-y-4">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                  Bhagyavardhan
                </span>
              </h1>
              <button
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-colors"
                onClick={toggleMobileMenu}
                aria-label="Close menu"
              >
                <FiX size={24} className="text-white" />
              </button>
            </div>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-colors ${
                  activeSection === item.href.substring(1)
                    ? 'bg-gradient-to-r from-indigo-500/10 to-purple-600/10 text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                onClick={toggleMobileMenu}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
            <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-4 justify-center">
                <a href="https://github.com/Bhagyavardhan8664" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
                  <FiGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/bhagyavardhan-bagali-3a171732b" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
                  <FiLinkedin size={24} />
                </a>
                <a href="mailto:bhagyavardhangttc@gmail.com" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
                  <FiMail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 pt-24 pb-16 md:pt-32 md:pb-24 space-y-8"
      >
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start space-y-12 md:space-y-0 md:space-x-12">
          <div className="relative flex-1">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
            <div className="relative bg-white dark:bg-gray-800 backdrop-blur-md rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all">
              <div className="mb-6">
                <div className="w-24 h-24 rounded-full border-4 border-indigo-500 mb-6 bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                   src="/img1.jpeg" 
                   alt="Profile" 
                   className="w-full h-full object-cover"
                 />
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                  Bhagyavardhan
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
                Passionate Frontend Developer for building beautiful and functional web applications.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <FiBriefcase size={18} />
                  <span>View My Work</span>
                </a>
                <a
                  href="#resume"
                  className="inline-flex items-center space-x-2 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 px-6 py-3 rounded-lg transition-colors"
                >
                  <FiUser size={18} />
                  <span>Resume</span>
                </a>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex space-x-6">
                  <a href="https://github.com/Bhagyavardhan8664" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
                    <FiGithub size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/bhagyavardhan-bagali-3a171732b" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
                    <FiLinkedin size={24} />
                  </a>
                  <a href="mailto:bhagyavardhangttc@gmail.com" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
                    <FiMail size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 bg-white dark:bg-gray-800 rounded-full backdrop-blur-md border border-gray-200 dark:border-gray-700 flex items-center justify-center animate-float">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                <div className="text-center p-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">Frontend Developer</h3>
                  <p className="text-sm md:text-base mb-4">Specializing in React & Next.js</p>
                  <div className="flex flex-wrap justify-center gap-2 mt-2">
                    <div className="px-3 py-1 bg-white/20 rounded-full text-xs">React.js</div>
                    <div className="px-3 py-1 bg-white/20 rounded-full text-xs">Next.js</div>
                    <div className="px-3 py-1 bg-white/20 rounded-full text-xs">Tailwind</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full max-w-6xl mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <h4 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">2+</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">Years Experience</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <h4 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">5+</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">Projects Completed</p>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A selection of my recent work, showcasing my skills in frontend development and UI/UX design.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-6">
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                      >
                        <FiGithub size={18} />
                      </a>
                      <a
                        href={project.live}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                      >
                        <FiExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold tracking-tight mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resume" className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Resume
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A summary of my professional experience, education, and skills.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold tracking-tight mb-6 flex items-center">
                <FiBriefcase size={18} className="mr-2 text-indigo-600 dark:text-indigo-400" />
                Professional Experience
              </h3>
              {experiences.map((exp, index) => (
                <div key={index} className="mb-6 relative">
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-indigo-500 to-purple-600" />
                  <div className="ml-6">
                    <div className="flex items-start mb-2">
                      <div className="mr-4">
                        <img 
                          src={exp.logo || `/api/placeholder/40/40`} 
                          alt={exp.company} 
                          className="w-10 h-10 rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h4 className="text-lg font-bold">{exp.title}</h4>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</span>
                        </div>
                        <h5 className="text-base font-medium text-gray-600 dark:text-gray-400 mb-2">{exp.company}</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold tracking-tight mb-6 flex items-center">
                <FiUser size={18} className="mr-2 text-indigo-600 dark:text-indigo-400" />
                Education & Skills
              </h3>
              <div className="mb-6">
                <h4 className="text-lg font-bold mb-4">Education</h4>
                {educations.map((edu, index) => (
                  <div key={index} className="mb-4 relative">
                    <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-indigo-500 to-purple-600" />
                    <div className="ml-6">
                      <div className="flex items-start">
                        <div className="mr-4">
                          <img 
                            src={edu.logo} 
                            alt={edu.school} 
                            className="w-10 h-10 rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h5 className="text-base font-bold">{edu.degree}</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{edu.duration}</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{edu.school}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Skills</h4>
                <div className="space-y-2">
                  {skills.slice(0, 8).map((skill, index) => (
                    <SkillBar key={index} name={skill.name} level={skill.level} />
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm font-medium rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Interested in working together? Feel free to contact me for any project or collaboration.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300">
                    <FiMail size={20} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Email</p>
                    <a href="mailto:bhagyavardhangttc@gmail.com" className="text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                      bhagyavardhangttc@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300">
                    <FiLinkedin size={20} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/bhagyavardhan-bagali-3a171732b" 
                      className="text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/bhagyavardhan-bagali
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300">
                    <FiGithub size={20} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">GitHub</p>
                    <a 
                      href="https://github.com/Bhagyavardhan8664" 
                      className="text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/Bhagyavardhan8664
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Send a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        placeholder="Bhagyavardhan"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        placeholder="bhagyavrdhan@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      placeholder="Your message here..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-white dark:bg-gray-800 py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">
                <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                  Bhagyavardhan
                </span>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Frontend Developer | React & Next.js
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/Bhagyavardhan8664" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
                <FiGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/bhagyavardhan-bagali-3a171732b" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="mailto:bhagyavardhangttc@gmail.com" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
                <FiMail size={20} />
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Bhagyavardhan Bagali. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}