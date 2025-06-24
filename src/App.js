import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Briefcase, GraduationCap, User, Download, Cpu, Zap, Database, Monitor, Music, Camera, Video, Palette, Sparkles, ArrowLeft } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState({});
  const [currentPage, setCurrentPage] = useState('main');

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
  }, [currentPage]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { name: 'React.js', level: 90, icon: <Code className="w-5 h-5" /> },
    { name: 'JavaScript/TypeScript', level: 85, icon: <Code className="w-5 h-5" /> },
    { name: 'Java', level: 80, icon: <Cpu className="w-5 h-5" /> },
    { name: 'Python', level: 75, icon: <Database className="w-5 h-5" /> },
    { name: 'C/C++', level: 85, icon: <Zap className="w-5 h-5" /> },
    { name: 'Rust', level: 70, icon: <Cpu className="w-5 h-5" /> }
  ];

  const experience = [
    {
      title: 'Software Engineer',
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

  const creativeProjects = [
    {
      category: 'Music',
      icon: <Music className="w-8 h-8" />,
      isSpotify: true,
      items: [
        { title: 'orange sunsets', description: 'Your most popular track with 3,927 plays - dreamy atmospheric vibes', type: 'Top Hit', plays: '3,927' },
        { title: 'strawberry skies', description: 'Second most popular with 2,796 plays - sweet melodic journey', type: 'Fan Favorite', plays: '2,796' },
        { title: 'carefree', description: 'Chill vibes with 2,538 plays - perfect for relaxation', type: 'Chill', plays: '2,538' },
        { title: 'summer nights', description: 'Warm nostalgic sounds capturing those perfect evenings', type: 'Seasonal', plays: '<1000' },
        { title: 'call u again', description: 'Emotional track with intimate vocals and production', type: 'Emotional', plays: '<1000' }
      ],
      synthProject: {
        title: 'Synth Design Final Project',
        description: 'Created synthesizer sounds from scratch using Eagen-Matrix software, including realistic bird sounds through wave generation and oscillation techniques',
        videoId: '2OVfK7s5saE',
        tech: ['Eagen-Matrix', 'Signal Processing', 'Audio Engineering', 'Wave Generation']
      }
    },
    {
      category: 'Photography',
      icon: <Camera className="w-8 h-8" />,
      items: [
        { title: 'Seattle Street Photography', description: 'Urban landscape and street life captures', type: 'Photo Series' },
        { title: 'Tech Event Coverage', description: 'Photography from hackathons and tech meetups', type: 'Event Photos' },
        { title: 'Portrait Experiments', description: 'Creative portrait photography with unique lighting', type: 'Studio Work' }
      ]
    },
    {
      category: 'Videos & Vlogs',
      icon: <Video className="w-8 h-8" />,
      isYoutube: true,
      youtubeId: '3zT2YE7rP7k',
      items: [
        { title: 'Portugal Travel Vlog', description: 'Epic adventure through Portugal - exploring cities, culture, and hidden gems', type: 'Travel Documentary', featured: true },
        { title: 'Code & Coffee', description: 'Daily coding vlogs with productivity tips', type: 'YouTube Channel' },
        { title: 'Tech Review Shorts', description: 'Quick reviews of developer tools and gadgets', type: 'Instagram Reels' }
      ]
    },
    {
      category: 'Design Projects',
      icon: <Palette className="w-8 h-8" />,
      items: [
        { title: 'UI/UX Explorations', description: 'Experimental interface designs and prototypes', type: 'Figma Concepts' },
        { title: 'Brand Identity Work', description: 'Logo and branding for local startups', type: 'Client Work' },
        { title: 'Digital Art', description: 'Abstract digital compositions and illustrations', type: 'Art Gallery' }
      ]
    }
  ];
if (currentPage === 'creative') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 text-white overflow-hidden">
        <div className="fixed inset-0 z-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            >
              <Sparkles className="w-4 h-4 text-pink-400/40" />
            </div>
          ))}
        </div>

        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/20">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <button 
                onClick={() => setCurrentPage('main')}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Professional
              </button>
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                Creative Universe
              </div>
            </div>
          </div>
        </nav>

        <section className="min-h-screen flex items-center justify-center relative pt-20">
          <div className="text-center z-10 px-6">
            <div className="transform transition-all duration-1000 translate-y-0 opacity-100">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
                Let's Get Weird
              </h1>
              <p className="text-2xl md:text-3xl mb-8 text-white/80">
                Where Engineering Meets Art
              </p>
              <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12">
                Beyond the code and circuits, I explore the creative realm through music, photography, design, and storytelling. 
                Here's where logic meets chaos and beautiful things happen.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {creativeProjects.map((category, index) => (
                <div 
                  key={category.category}
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-102"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-pink-400">{category.icon}</div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                      {category.category}
                    </h3>
                  </div>
                  
                  {category.isSpotify && (
                    <div className="mb-8 flex justify-center">
                      <div className="relative">
                        <div className="w-48 h-48 relative group cursor-pointer" onClick={() => window.open('https://open.spotify.com/artist/6w9ZfvOklF4IdoUWYuhqiZ?si=v1jxzfC5RPSqgfdnDfof-A', '_blank')}>
                          <div className="w-48 h-48 bg-gradient-to-br from-gray-900 to-black rounded-full shadow-2xl group-hover:animate-spin transition-all duration-500 border-4 border-gray-800">
                            <div className="absolute inset-4 border border-gray-700 rounded-full"></div>
                            <div className="absolute inset-8 border border-gray-700 rounded-full"></div>
                            <div className="absolute inset-12 border border-gray-700 rounded-full"></div>
                            <div className="absolute inset-16 border border-gray-700 rounded-full"></div>
                            
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center border-2 border-white">
                              <div className="w-3 h-3 bg-black rounded-full"></div>
                            </div>
                            
                            <div className="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">♪</span>
                            </div>
                          </div>
                          
                          <div className="absolute -top-4 -right-8 w-16 h-1 bg-gray-300 transform rotate-45 origin-left group-hover:rotate-[50deg] transition-all duration-500">
                            <div className="absolute right-0 w-2 h-2 bg-gray-400 rounded-full transform translate-y-[-2px]"></div>
                          </div>
                        </div>
                        
                        <div className="absolute -top-2 -left-2 text-pink-400 animate-bounce" style={{animationDelay: '0s'}}>♪</div>
                        <div className="absolute -top-4 left-8 text-orange-400 animate-bounce" style={{animationDelay: '0.5s'}}>♫</div>
                        <div className="absolute -top-6 left-16 text-pink-400 animate-bounce" style={{animationDelay: '1s'}}>♪</div>
                      </div>
                    </div>
                  )}
                  
                  {category.synthProject && (
                    <div className="mb-6">
                      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-400/30 mb-4">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                          <h4 className="text-xl font-bold text-purple-300">Engineering × Music</h4>
                        </div>
                        <div className="relative rounded-xl overflow-hidden shadow-2xl group mb-4">
                          <iframe
                            src={`https://www.youtube.com/embed/${category.synthProject.videoId}?rel=0&modestbranding=1`}
                            title="Synth Design Final Project"
                            className="w-full h-56 transition-all duration-300"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                        <h5 className="text-lg font-semibold text-white mb-2">{category.synthProject.title}</h5>
                        <p className="text-white/80 mb-3">{category.synthProject.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {category.synthProject.tech.map((tech, i) => (
                            <span 
                              key={i}
                              className="px-2 py-1 bg-purple-500/30 text-purple-200 rounded-lg text-xs border border-purple-400/40"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {category.isYoutube && (
                    <div className="mb-6">
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                        <iframe
                          src={`https://www.youtube.com/embed/${category.youtubeId}?rel=0&modestbranding=1`}
                          title="Portugal Travel Vlog"
                          className="w-full h-64 transition-all duration-300 group-hover:scale-105"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-4">
                    {category.items.map((item, i) => (
                      <div 
                        key={i}
                        className={`bg-white/5 rounded-2xl p-4 border border-white/10 hover:border-pink-400/30 transition-all duration-300 group cursor-pointer ${item.featured ? 'ring-2 ring-pink-400/30 bg-pink-500/10' : ''}`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className={`text-lg font-semibold group-hover:text-pink-400 transition-colors ${item.featured ? 'text-pink-300' : ''}`}>
                            {item.title}
                            {item.featured && <span className="ml-2 text-xs px-2 py-1 bg-pink-500/30 rounded-full">Featured</span>}
                          </h4>
                          <span className="text-xs px-2 py-1 bg-pink-500/20 text-pink-300 rounded-full border border-pink-500/30">
                            {item.type}
                          </span>
                        </div>
                        <p className="text-white/70 text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 text-center relative z-10">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
              Want to Collaborate on Something Wild?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Whether it's a music video for your startup, creative coding projects, or just jamming about the intersection of tech and art.
            </p>
            <button className="px-12 py-4 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full hover:from-pink-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 text-xl font-semibold">
              Let's Create Magic ✨
            </button>
          </div>
        </section>
      </div>
    );
  }
return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-semibold text-gray-900">
              Sasin Gudipati
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

      <section id="hero" className="min-h-screen flex items-center justify-center relative bg-white">
        <div className="text-center z-10 px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl font-light mb-6 text-gray-900">
              Sasin Gudipati
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-gray-600 font-light">
              Software Engineer
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-500">
              Full-Stack Development • Graphics Programming • Embedded Systems
            </p>
            <div className="flex items-center justify-center gap-2 mb-12 text-gray-500">
              <MapPin className="w-5 h-5" />
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

      <section id="about" className="py-20 relative z-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-light mb-12 text-center text-gray-900">
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
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="text-3xl font-light text-indigo-600">UIUC</div>
                    <div className="text-sm text-gray-500">Electrical Engineering</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
                  <User className="w-32 h-32 text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 relative z-10 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-light mb-12 text-center text-gray-900">
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

      <section id="experience" className="py-20 relative z-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.experience ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-light mb-12 text-center text-gray-900">
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

      <section id="projects" className="py-20 relative z-10 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-light mb-12 text-center text-gray-900">
              Featured Projects
            </h2>
            
            <div className="mb-12">
                <p className="text-gray-600 mb-4 text-lg">
                  Designed a smart home mirror with integrated interface using Raspberry Pi and Python. Features weather, news, time, calendar, Spotify, and Tile tracking capabilities.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">Raspberry Pi</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">Python</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">Smart Home Integration</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">Hardware Design</span>
                </div>
                
                <button 
                  onClick={() => window.open('https://youtu.be/B8GYi20Uxoo?si=XBE4lTxEXmhYO6gC', '_blank')}
                  className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors text-lg font-medium"
                >
                  <ExternalLink className="w-5 h-5" />
                  Watch Full Demo
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-indigo-600 group-hover:text-indigo-700 transition-colors">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900">Early Bird Alarm Clock Robot</h3>
                    <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded-full">In Progress</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-3">Designed, built and programmed an alarm clock robot that runs away when the alarm triggers and requires solving a math puzzle to deactivate. Features autonomous movement, object avoidance, and environment mapping.</p>
                <p className="text-gray-500 text-sm mb-4">Worked intensively with CAD to create PCB logic and modular design, ensuring hardware compatibility with external sensors. Integrated hardware and software using Embedded C/C++, with higher-level development in Java and Python for autonomous systems.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">Embedded C/C++</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">Java</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">Python</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">CAD Design</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">PCB Design</span>
                </div>
                <button className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </button>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 group">
                <div className="mb-4">
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                    <iframe
                      src="https://www.youtube.com/embed/fWywtZT0l1g?rel=0&modestbranding=1"
                      title="Self-Driving Car"
                      className="w-full h-48"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-indigo-600 group-hover:text-indigo-700 transition-colors">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">Self-Driving Car</h3>
                </div>
                <p className="text-gray-600 mb-3">Designed a self-driving car with custom chassis, implementing object avoidance system using PyCar. Features environment mapping, object detection, and autonomous navigation.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">Python</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">PyCar</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">Computer Vision</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">Autonomous Systems</span>
                </div>
                <button 
                  onClick={() => window.open('https://youtu.be/fWywtZT0l1g?si=aqJAxf-icr6pv_Ln', '_blank')}
                  className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Watch Demo
                </button>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 group">
                <div className="mb-4">
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                    <iframe
                      src="https://www.youtube.com/embed/r0RHaQCju-o?rel=0&modestbranding=1"
                      title="Simple Computer (SLC3)"
                      className="w-full h-48"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-indigo-600 group-hover:text-indigo-700 transition-colors">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">Simple Computer (SLC3)</h3>
                </div>
                <p className="text-gray-600 mb-3">Designed a simple microprocessor using SystemVerilog with 16-bit processor, program counter, instructions and registers handling LC-3 operations.</p>
                <p className="text-gray-500 text-sm mb-4">Programmed LC3 functions for memory loading, register selection, and multiplexer control, emulating fundamental computer operations at the hardware level.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">SystemVerilog</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">Digital Logic</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">Computer Architecture</span>
                </div>
                <button 
                  onClick={() => window.open('https://youtu.be/r0RHaQCju-o?si=uBi-JUreC188n4jn', '_blank')}
                  className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Watch Demo
                </button>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 group">
                <div className="mb-4">
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                    <iframe
                      src="https://www.youtube.com/embed/5x0ivhHzR3E?rel=0&modestbranding=1"
                      title="Superheterodyne AM Receiver"
                      className="w-full h-48"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-indigo-600 group-hover:text-indigo-700 transition-colors">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">Superheterodyne AM Receiver</h3>
                </div>
                <p className="text-gray-600 mb-3">Constructed an AM radio receiver on breadboard using M2K analog-to-digital converter. Features I-F filter, bandpass filter, and envelope detector for signal demodulation.</p>
                <p className="text-gray-500 text-sm mb-4">Implemented frequency shifting to lower spectrum ranges and used envelope detector to demodulate signals while connecting input peaks to add controlled audio distortion.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">Analog Circuits</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">Signal Processing</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">Python</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">RF Engineering</span>
                </div>
                <button 
                  onClick={() => window.open('https://youtu.be/5x0ivhHzR3E?si=suMkQ1u0_1-ePzrm', '_blank')}
                  className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Watch Demo
                </button>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-indigo-600 group-hover:text-indigo-700 transition-colors">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">Am I a Casual?</h3>
                </div>
                <p className="text-gray-600 mb-4">A responsive daily sports trivia web application with daily question rotation, answer validation, and real-time score tracking.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">TypeScript</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">React.js</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">Mantine Library</span>
                </div>
                <button className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </button>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-indigo-600 group-hover:text-indigo-700 transition-colors">
                    <User className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">ourmind</h3>
                </div>
                <p className="text-gray-600 mb-4">A daily journaling web application inspired by BeReal, allowing users to join groups and respond to daily questions together.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">TypeScript</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">React.js</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">Firebase</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">Chakra UI</span>
                </div>
                <button className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>

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

      <footer className="py-8 text-center text-gray-500 border-t border-gray-200 relative z-10 bg-white">
        <p>&copy; 2025 Sasin Gudipati. Built with React & passion for clean code.</p>
      </footer>
    </div>
  );
};

export default App;import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Briefcase, GraduationCap, User, Download, Cpu, Zap, Database, Monitor, Music, Camera, Video, Palette, Sparkles, ArrowLeft } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState({});
  const [currentPage, setCurrentPage] = useState('main');

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
  }, [currentPage]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { name: 'React.js', level: 90, icon: <Code className="w-5 h-5" /> },
    { name: 'JavaScript/TypeScript', level: 85, icon: <Code className="w-5 h-5" /> },
    { name: 'Java', level: 80, icon: <Cpu className="w-5 h-5" /> },
    { name: 'Python', level: 75, icon: <Database className="w-5 h-5" /> },
    { name: 'C/C++', level: 85, icon: <Zap className="w-5 h-5" /> },
    { name: 'Rust', level: 70, icon: <Cpu className="w-5 h-5" /> }
  ];

  const experience = [
    {
      title: 'Software Engineer',
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

  const creativeProjects = [
    {
      category: 'Music',
      icon: <Music className="w-8 h-8" />,
      isSpotify: true,
      items: [
        { title: 'orange sunsets', description: 'Your most popular track with 3,927 plays - dreamy atmospheric vibes', type: 'Top Hit', plays: '3,927' },
        { title: 'strawberry skies', description: 'Second most popular with 2,796 plays - sweet melodic journey', type: 'Fan Favorite', plays: '2,796' },
        { title: 'carefree', description: 'Chill vibes with 2,538 plays - perfect for relaxation', type: 'Chill', plays: '2,538' },
        { title: 'summer nights', description: 'Warm nostalgic sounds capturing those perfect evenings', type: 'Seasonal', plays: '<1000' },
        { title: 'call u again', description: 'Emotional track with intimate vocals and production', type: 'Emotional', plays: '<1000' }
      ],
      synthProject: {
        title: 'Synth Design Final Project',
        description: 'Created synthesizer sounds from scratch using Eagen-Matrix software, including realistic bird sounds through wave generation and oscillation techniques',
        videoId: '2OVfK7s5saE',
        tech: ['Eagen-Matrix', 'Signal Processing', 'Audio Engineering', 'Wave Generation']
      }
    },
    {
      category: 'Photography',
      icon: <Camera className="w-8 h-8" />,
      items: [
        { title: 'Seattle Street Photography', description: 'Urban landscape and street life captures', type: 'Photo Series' },
        { title: 'Tech Event Coverage', description: 'Photography from hackathons and tech meetups', type: 'Event Photos' },
        { title: 'Portrait Experiments', description: 'Creative portrait photography with unique lighting', type: 'Studio Work' }
      ]
    },
    {
      category: 'Videos & Vlogs',
      icon: <Video className="w-8 h-8" />,
      isYoutube: true,
      youtubeId: '3zT2YE7rP7k',
      items: [
        { title: 'Portugal Travel Vlog', description: 'Epic adventure through Portugal - exploring cities, culture, and hidden gems', type: 'Travel Documentary', featured: true },
        { title: 'Code & Coffee', description: 'Daily coding vlogs with productivity tips', type: 'YouTube Channel' },
        { title: 'Tech Review Shorts', description: 'Quick reviews of developer tools and gadgets', type: 'Instagram Reels' }
      ]
    },
    {
      category: 'Design Projects',
      icon: <Palette className="w-8 h-8" />,
      items: [
        { title: 'UI/UX Explorations', description: 'Experimental interface designs and prototypes', type: 'Figma Concepts' },
        { title: 'Brand Identity Work', description: 'Logo and branding for local startups', type: 'Client Work' },
        { title: 'Digital Art', description: 'Abstract digital compositions and illustrations', type: 'Art Gallery' }
      ]
    }
  ];

  if (currentPage === 'creative') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 text-white overflow-hidden">
        <div className="fixed inset-0 z-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            >
              <Sparkles className="w-4 h-4 text-pink-400/40" />
            </div>
          ))}
        </div>

        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/20">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <button 
                onClick={() => setCurrentPage('main')}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Professional
              </button>
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                Creative Universe
              </div>
            </div>
          </div>
        </nav>

        <section className="min-h-screen flex items-center justify-center relative pt-20">
          <div className="text-center z-10 px-6">
            <div className="transform transition-all duration-1000 translate-y-0 opacity-100">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
                Let's Get Weird
              </h1>
              <p className="text-2xl md:text-3xl mb-8 text-white/80">
                Where Engineering Meets Art
              </p>
              <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12">
                Beyond the code and circuits, I explore the creative realm through music, photography, design, and storytelling. 
                Here's where logic meets chaos and beautiful things happen.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {creativeProjects.map((category, index) => (
                <div 
                  key={category.category}
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-102"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-pink-400">{category.icon}</div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                      {category.category}
                    </h3>
                  </div>
                  
                  {category.isSpotify && (
                    <div className="mb-8 flex justify-center">
                      <div className="relative">
                        <div className="w-48 h-48 relative group cursor-pointer" onClick={() => window.open('https://open.spotify.com/artist/6w9ZfvOklF4IdoUWYuhqiZ?si=v1jxzfC5RPSqgfdnDfof-A', '_blank')}>
                          <div className="w-48 h-48 bg-gradient-to-br from-gray-900 to-black rounded-full shadow-2xl group-hover:animate-spin transition-all duration-500 border-4 border-gray-800">
                            <div className="absolute inset-4 border border-gray-700 rounded-full"></div>
                            <div className="absolute inset-8 border border-gray-700 rounded-full"></div>
                            <div className="absolute inset-12 border border-gray-700 rounded-full"></div>
                            <div className="absolute inset-16 border border-gray-700 rounded-full"></div>
                            
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center border-2 border-white">
                              <div className="w-3 h-3 bg-black rounded-full"></div>
                            </div>
                            
                            <div className="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">♪</span>
                            </div>
                          </div>
                          
                          <div className="absolute -top-4 -right-8 w-16 h-1 bg-gray-300 transform rotate-45 origin-left group-hover:rotate-[50deg] transition-all duration-500">
                            <div className="absolute right-0 w-2 h-2 bg-gray-400 rounded-full transform translate-y-[-2px]"></div>
                          </div>
                        </div>
                        
                        <div className="absolute -top-2 -left-2 text-pink-400 animate-bounce" style={{animationDelay: '0s'}}>♪</div>
                        <div className="absolute -top-4 left-8 text-orange-400 animate-bounce" style={{animationDelay: '0.5s'}}>♫</div>
                        <div className="absolute -top-6 left-16 text-pink-400 animate-bounce" style={{animationDelay: '1s'}}>♪</div>
                      </div>
                    </div>
                  )}
                  
                  {category.synthProject && (
                    <div className="mb-6">
                      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-400/30 mb-4">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                          <h4 className="text-xl font-bold text-purple-300">Engineering × Music</h4>
                        </div>
                        <div className="relative rounded-xl overflow-hidden shadow-2xl group mb-4">
                          <iframe
                            src={`https://www.youtube.com/embed/${category.synthProject.videoId}?rel=0&modestbranding=1`}
                            title="Synth Design Final Project"
                            className="w-full h-56 transition-all duration-300"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                        <h5 className="text-lg font-semibold text-white mb-2">{category.synthProject.title}</h5>
                        <p className="text-white/80 mb-3">{category.synthProject.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {category.synthProject.tech.map((tech, i) => (
                            <span 
                              key={i}
                              className="px-2 py-1 bg-purple-500/30 text-purple-200 rounded-lg text-xs border border-purple-400/40"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {category.isYoutube && (
                    <div className="mb-6">
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                        <iframe
                          src={`https://www.youtube.com/embed/${category.youtubeId}?rel=0&modestbranding=1`}
                          title="Portugal Travel Vlog"
                          className="w-full h-64 transition-all duration-300 group-hover:scale-105"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-4">
                    {category.items.map((item, i) => (
                      <div 
                        key={i}
                        className={`bg-white/5 rounded-2xl p-4 border border-white/10 hover:border-pink-400/30 transition-all duration-300 group cursor-pointer ${item.featured ? 'ring-2 ring-pink-400/30 bg-pink-500/10' : ''}`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className={`text-lg font-semibold group-hover:text-pink-400 transition-colors ${item.featured ? 'text-pink-300' : ''}`}>
                            {item.title}
                            {item.featured && <span className="ml-2 text-xs px-2 py-1 bg-pink-500/30 rounded-full">Featured</span>}
                          </h4>
                          <span className="text-xs px-2 py-1 bg-pink-500/20 text-pink-300 rounded-full border border-pink-500/30">
                            {item.type}
                          </span>
                        </div>
                        <p className="text-white/70 text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 text-center relative z-10">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
              Want to Collaborate on Something Wild?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Whether it's a music video for your startup, creative coding projects, or just jamming about the intersection of tech and art.
            </p>
            <button className="px-12 py-4 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full hover:from-pink-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 text-xl font-semibold">
              Let's Create Magic ✨
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-semibold text-gray-900">
              Sasin Gudipati
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

      <section id="hero" className="min-h-screen flex items-center justify-center relative bg-white">
        <div className="text-center z-10 px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl font-light mb-6 text-gray-900">
              Sasin Gudipati
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-gray-600 font-light">
              Software Engineer
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-500">
              Full-Stack Development • Graphics Programming • Embedded Systems
            </p>
            <div className="flex items-center justify-center gap-2 mb-12 text-gray-500">
              <MapPin className="w-5 h-5" />
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

      <section id="about" className="py-20 relative z-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-light mb-12 text-center text-gray-900">
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
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="text-3xl font-light text-indigo-600">UIUC</div>
                    <div className="text-sm text-gray-500">Electrical Engineering</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
                  <User className="w-32 h-32 text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 relative z-10 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-light mb-12 text-center text-gray-900">
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

      <section id="experience" className="py-20 relative z-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.experience ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-light mb-12 text-center text-gray-900">
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

      <section id="projects" className="py-20 relative z-10 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-light mb-12 text-center text-gray-900">
              Featured Projects
            </h2>
            
            <div className="mb-12">
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-indigo-600">
                    <Monitor className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900">
                    Smart Mirror Interface
                    <span className="ml-3 text-sm px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full">Featured</span>
                  </h3>
                </div>
                
                <div className="mb-6">
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.youtube.com/embed/B8GYi20Uxoo?rel=0&modestbranding=1"
                      title="Smart Mirror Interface Demo"
                      className="w-full h-64 md:h-80"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                
                <p className="text-
