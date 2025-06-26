import React from 'react';
import { ExternalLink, Monitor, Cpu, Zap, User } from 'lucide-react';

const ProjectsSection = ({ isVisible }) => {
  return (
    <section id="projects" className="py-20 relative z-10 bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transform transition-all duration-1000 ${isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-center text-gray-900 dark:text-slate-100">
            Featured Projects
          </h2>
          
          {/* Featured Smart Mirror Project */}
          <div className="mb-12">
            <div className="bg-white dark:bg-slate-800/50 dark:backdrop-blur-sm rounded-lg p-8 border border-gray-200 dark:border-slate-600/50 shadow-sm hover:shadow-md dark:hover:shadow-xl dark:hover:shadow-indigo-500/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-indigo-600 dark:text-indigo-400">
                  <Monitor className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 dark:text-slate-100">
                  Smart Mirror Interface
                  <span className="ml-3 text-sm px-3 py-1 bg-indigo-100 dark:bg-indigo-500/30 text-indigo-700 dark:text-indigo-200 rounded-full">Featured</span>
                </h3>
              </div>
              
              <div className="mb-6">
                <div className="relative rounded-lg overflow-hidden shadow-lg dark:shadow-xl dark:shadow-slate-900/50">
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
              
              <p className="text-gray-600 dark:text-slate-300 mb-4 text-lg">
                Designed a smart home mirror with integrated interface using Raspberry Pi and Python. Features weather, news, time, calendar, Spotify, and Tile tracking capabilities.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-300 rounded-full text-sm border border-gray-200 dark:border-slate-600">Raspberry Pi</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-300 rounded-full text-sm border border-gray-200 dark:border-slate-600">Python</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-300 rounded-full text-sm border border-gray-200 dark:border-slate-600">Smart Home Integration</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-300 rounded-full text-sm border border-gray-200 dark:border-slate-600">Hardware Design</span>
              </div>
              
              <button 
                onClick={() => window.open('https://youtu.be/B8GYi20Uxoo?si=XBE4lTxEXmhYO6gC', '_blank')}
                className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors text-lg font-medium"
              >
                <ExternalLink className="w-5 h-5" />
                Watch Full Demo
              </button>
            </div>
          </div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Early Bird Alarm Clock */}
            <div className="bg-white dark:bg-slate-800/60 dark:backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-slate-600/50 shadow-sm hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-indigo-500/10 transition-all duration-300 transform hover:scale-105 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-slate-100">Early Bird Alarm Clock Robot</h3>
                  <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-500/30 text-orange-700 dark:text-orange-300 rounded-full">In Progress</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-slate-300 mb-3">Designed, built and programmed an alarm clock robot that runs away when the alarm triggers and requires solving a math puzzle to deactivate. Features autonomous movement, object avoidance, and environment mapping.</p>
              <p className="text-gray-500 dark:text-slate-400 text-sm mb-4">Worked intensively with CAD to create PCB logic and modular design, ensuring hardware compatibility with external sensors. Integrated hardware and software using Embedded C/C++, with higher-level development in Java and Python for autonomous systems.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-300 rounded-full text-sm border border-gray-200 dark:border-slate-600">Embedded C/C++</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-300 rounded-full text-sm border border-gray-200 dark:border-slate-600">Java</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-300 rounded-full text-sm border border-gray-200 dark:border-slate-600">Python</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-300 rounded-full text-sm border border-gray-200 dark:border-slate-600">CAD Design</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-300 rounded-full text-sm border border-gray-200 dark:border-slate-600">PCB Design</span>
              </div>
              <button className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                <ExternalLink className="w-4 h-4" />
                View Project
              </button>
            </div>

            {/* Self-Driving Car */}
            <div className="bg-white dark:bg-slate-800/60 dark:backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-slate-600/50 shadow-sm hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-indigo-500/10 transition-all duration-300 transform hover:scale-105 group">
              <div className="mb-4">
                <div className="relative rounded-lg overflow-hidden shadow-md dark:shadow-lg dark:shadow-slate-900/50">
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
                <div className="text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-slate-100">Self-Driving Car</h3>
              </div>
              <p className="text-gray-600 dark:text-slate-300 mb-3">Designed a self-driving car with custom chassis, implementing object avoidance system using PyCar. Features environment mapping, object detection, and autonomous navigation.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-300 rounded-full text-sm border border-gray-200 dark:border-slate-600">Python</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-300 rounded-full text-sm border border-gray-200 dark:border-slate-600">PyCar</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-300 rounded-full text-sm border border-gray-200 dark:border-slate-600">Computer Vision</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-300 rounded-full text-sm border border-gray-200 dark:border-slate-600">Autonomous Systems</span>
              </div>
              <button 
                onClick={() => window.open('https://youtu.be/fWywtZT0l1g?si=aqJAxf-icr6pv_Ln', '_blank')}
                className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Watch Demo
              </button>
            </div>

            {/* Simple Computer */}
            <div className="bg-white dark:bg-slate-800/60 dark:backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-slate-600/50 shadow-sm hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-indigo-500/10 transition-all duration-300 transform hover:scale-105 group">
              <div className="mb-4">
                <div className="relative rounded-lg overflow-hidden shadow-md dark:shadow-lg dark:shadow-slate-900/50">
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
                <div className="text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-slate-100">Simple Computer (SLC3)</h3>
              </div>
              <p className="text-gray-600 dark:text-slate-300 mb-3">Designed a simple microprocessor using SystemVerilog with 16-bit processor, program counter, instructions and registers handling LC-3 operations.</p>
              <p className="text-gray-500 dark:text-slate-400 text-sm mb-4">Programmed LC3 functions for memory loading, register selection, and multiplexer control, emulating fundamental computer operations at the hardware level.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-300 rounded-full text-sm border border-gray-200 dark:border-slate-600">SystemVerilog</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-300 rounded-full text-sm border border-gray-200 dark:border-slate-600">Digital Logic</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-300 rounded-full text-sm border border-gray-200 dark:border-slate-600">Computer Architecture</span>
              </div>
              <button 
                onClick={() => window.open('https://youtu.be/r0RHaQCju-o?si=uBi-JUreC188n4jn', '_blank')}
                className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Watch Demo
              </button>
            </div>

            {/* AM Receiver */}
            <div className="bg-white dark:bg-slate-800/60 dark:backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-slate-600/50 shadow-sm hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-indigo-500/10 transition-all duration-300 transform hover:scale-105 group">
              <div className="mb-4">
                <div className="relative rounded-lg overflow-hidden shadow-md dark:shadow-lg dark:shadow-slate-900/50">
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
                <div className="text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-slate-100">Superheterodyne AM Receiver</h3>
              </div>
              <p className="text-gray-600 dark:text-slate-300 mb-3">Constructed an AM radio receiver on breadboard using M2K analog-to-digital converter. Features I-F filter, bandpass filter, and envelope detector for signal demodulation.</p>
              <p className="text-gray-500 dark:text-slate-400 text-sm mb-4">Implemented frequency shifting to lower spectrum ranges and used envelope detector to demodulate signals while connecting input peaks to add controlled audio distortion.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-300 rounded-full text-sm border border-gray-200 dark:border-slate-600">Analog Circuits</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-300 rounded-full text-sm border border-gray-200 dark:border-slate-600">Signal Processing</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-300 rounded-full text-sm border border-gray-200 dark:border-slate-600">Python</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-300 rounded-full text-sm border border-gray-200 dark:border-slate-600">RF Engineering</span>
              </div>
              <button 
                onClick={() => window.open('https://youtu.be/5x0ivhHzR3E?si=suMkQ1u0_1-ePzrm', '_blank')}
                className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Watch Demo
              </button>
            </div>

            {/* Web Projects */}
            <div className="bg-white dark:bg-slate-800/60 dark:backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-slate-600/50 shadow-sm hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-indigo-500/10 transition-all duration-300 transform hover:scale-105 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
                  <Monitor className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-slate-100">Am I a Casual?</h3>
                  <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-500/30 text-orange-700 dark:text-orange-300 rounded-full">In Progress</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-slate-300 mb-4">A responsive daily sports trivia web application with daily question rotation, answer validation, and real-time score tracking.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-300 rounded-full text-sm border border-gray-200 dark:border-slate-600">TypeScript</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-300 rounded-full text-sm border border-gray-200 dark:border-slate-600">React.js</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-300 rounded-full text-sm border border-gray-200 dark:border-slate-600">Mantine Library</span>
              </div>
              <button className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                <ExternalLink className="w-4 h-4" />
                View Project
              </button>
            </div>

            <div className="bg-white dark:bg-slate-800/60 dark:backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-slate-600/50 shadow-sm hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-indigo-500/10 transition-all duration-300 transform hover:scale-105 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-slate-100">ourmind</h3>
                  <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-500/30 text-orange-700 dark:text-orange-300 rounded-full">In Progress</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-slate-300 mb-4">A daily journaling web application inspired by BeReal, allowing users to join groups and respond to daily questions together.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-300 rounded-full text-sm border border-gray-200 dark:border-slate-600">TypeScript</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-300 rounded-full text-sm border border-gray-200 dark:border-slate-600">React.js</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-300 rounded-full text-sm border border-gray-200 dark:border-slate-600">Firebase</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-300 rounded-full text-sm border border-gray-200 dark:border-slate-600">Chakra UI</span>
              </div>
              <button className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                <ExternalLink className="w-4 h-4" />
                View Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;