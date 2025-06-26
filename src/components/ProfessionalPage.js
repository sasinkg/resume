import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Github, Linkedin, Download, Code, Cpu, Zap, Database, Sparkles } from 'lucide-react';
import ProjectsSection from './ProjectsSection';

const ProfessionalPage = ({ setCurrentPage }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { name: 'React.js', level: 95, icon: <Code className="w-5 h-5" /> },
    { name: 'JavaScript/TypeScript', level: 90, icon: <Code className="w-5 h-5" /> },
    { name: 'Java', level: 80, icon: <Cpu className="w-5 h-5" /> },
    { name: 'Python', level: 75, icon: <Database className="w-5 h-5" /> },
    { name: 'C/C++', level: 85, icon: <Zap className="w-5 h-5" /> },
    { name: 'Rust', level: 70, icon: <Cpu className="w-5 h-5" /> }
  ];

  const experience = [
    {
      title: 'Software Engineer 2',
      company: 'Boeing',
      location: 'Seattle, WA',
      period: 'February 2023 - Present',
      description: 'Enhanced JavaScript React.js simulation apps, automated CI/CD pipelines reducing release time from 2 days to 30 minutes, and engineered full-stack Java solutions for Virtual Flight Deck systems.',
      highlights: [
        'Cut simulation build expenditure by 4% through recursion-based algorithms',
        'Improved VFD button response time from 1ms to 0.8ms',
        'Developed flight deck panels using Rust, Java, and C++'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'Garmin International',
      location: 'Kansas City, KS',
      period: 'May 2022 - August 2022',
      description: 'Integrated Vulkan-enabled drivers into Garmin In-Flight Display 3, resolved 1500 coverage holes, and developed Python tools saving engineers 50% time.',
      highlights: [
        'Successfully transitioned graphics from OpenGL to Vulkan API',
        'Designed graphical simulation adhering to Vulkan standards',
        'Developed automated function sorting tools'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-semibold text-gray-900">
              Sasin
            </div>
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-indigo-600 ${
                    activeSection === section ? 'text-indigo-600 font-medium' : 'text-gray-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gray">
        <div className="text-center z-10 px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gray-900">
              Sasin Gudipati
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-gray-600 font-light">
              Software Engineer
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-500">
              Full-Stack Development • Graphics Programming • Embedded Systems
            </p>
            <div className="flex items-center justify-center gap-2 mb-12 text-gray-500">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  {/* Antenna/Needle tip */}
                  <rect x="11.8" y="1" width="0.4" height="4"/>
                  
                  {/* Top structure */}
                  <rect x="10.5" y="5" width="3" height="1"/>
                  
                  {/* Upper deck */}
                  <ellipse cx="12" cy="7" rx="4" ry="1.5"/>
                  
                  {/* Main observation deck */}
                  <ellipse cx="12" cy="9.5" rx="6" ry="2"/>
                  
                  {/* Support legs */}
                  <path d="M9 11.5 L10.5 22 L11.5 22 L12 12 Z"/>
                  <path d="M15 11.5 L13.5 22 L12.5 22 L12 12 Z"/>
                  
                  {/* Center column */}
                  <rect x="11.7" y="11.5" width="0.6" height="10.5"/>
                </svg>
              <span>Seattle, WA</span>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get In Touch
              </button>
              <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Resume
              </button>
            </div>
            <button 
              onClick={() => setCurrentPage('creative')}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white rounded-full hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 transition-all duration-500 transform hover:scale-110 shadow-xl hover:shadow-2xl font-bold text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Let's Get Weird 
                <Sparkles className="w-5 h-5 group-hover:animate-spin" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
          <div className="animate-bounce mt-8">
            <ChevronDown 
              className="w-8 h-8 mx-auto cursor-pointer hover:text-indigo-600 transition-colors text-gray-400"
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  I'm a passionate Software Engineer with expertise spanning web development, graphics programming, and embedded systems. Currently working at Boeing, I specialize in React.js applications, automation, and performance optimization.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  My experience includes everything from enhancing flight simulation systems to developing engaging web applications. I love tackling complex technical challenges and creating efficient, scalable solutions.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="text-3xl font-light text-indigo-600">2+</div>
                    <div className="text-sm text-gray-500">Years Experience</div>
                  </div>
                  <div className="text-center p-6 bg-indigo-900 rounded-lg shadow-sm border border-gray-200">
                    <div className="text-3xl font-light text-orange-600">UIUC</div>
                    <div className="text-sm text-white">Electrical Engineering</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gray-100 rounded-3xl overflow-hidden flex items-center justify-center border border-gray-200">
                  <img 
                  src = {`${process.env.PUBLIC_URL}/image.jpg`}
                  alt = "Sasin"
                  className = "w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative z-10 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">
              Skills & Technologies
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-indigo-600">{skill.icon}</div>
                    <h3 className="text-lg font-medium text-gray-900">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-indigo-600 h-2 rounded-full transition-all duration-1000"
                      style={{ 
                        width: isVisible.skills ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                  <div className="text-right text-sm text-gray-500 mt-2">{skill.level}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative z-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.experience ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">
              Experience
            </h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-medium text-gray-900">{job.title}</h3>
                      <p className="text-xl text-gray-600">{job.company}</p>
                      <p className="text-gray-500">{job.location}</p>
                    </div>
                    <div className="text-indigo-600 font-medium mt-2 md:mt-0">
                      {job.period}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <ul className="space-y-2">
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection isVisible={isVisible} />

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-light mb-12 text-center text-gray-900">
              Let's Connect
            </h2>
            <div className="text-center space-y-8">
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                I'm always interested in discussing new opportunities, innovative projects, or just talking about technology. Feel free to reach out!
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <a 
                  href="mailto:sasingudipati@gmail.com"
                  className="flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                  sasingudipati@gmail.com
                </a>
                <div className="flex gap-4">
                  <button className="p-4 bg-white rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-110 border border-gray-200 shadow-sm">
                    <Github className="w-6 h-6 text-gray-600" />
                  </button>
                  <button className="p-4 bg-white rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-110 border border-gray-200 shadow-sm">
                    <Linkedin className="w-6 h-6 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-200 relative z-10 bg-white">
        <p>&copy; 2025 Sasin Gudipati. Built with React & passion for clean code.</p>
      </footer>
    </div>
  );
};

export default ProfessionalPage;
