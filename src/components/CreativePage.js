import React from 'react';
import { ArrowLeft, Music, Camera, Video, Palette, Sparkles } from 'lucide-react';

const CreativePage = ({ setCurrentPage }) => {
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
        { title: 'Seattle Photography', description: 'Urban landscape and street life captures', type: 'Photo Series' },
      ]
    },
    {
      category: 'Videos & Vlogs',
      icon: <Video className="w-8 h-8" />,
      isYoutube: true,
      youtubeId: '3zT2YE7rP7k',
      items: [
        { title: 'Portugal Travel Vlog', description: 'Epic adventure through Portugal - exploring cities, culture, and hidden gems', type: 'Travel Documentary', featured: true },
      ]
    },
    {
      category: 'Design Projects',
      icon: <Palette className="w-8 h-8" />,
      items: [
        // { title: 'Digital Art', description: 'Abstract digital compositions and illustrations', type: 'Art Gallery' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-cyan-900 to-green-900 text-white overflow-hidden">
      {/* Creative Background */}
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

      {/* Creative Navigation */}
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

      {/* Creative Hero */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="text-center z-10 px-6">
          <div className="transform transition-all duration-1000 translate-y-0 opacity-100">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white bg-clip-text text-transparent animate-pulse">
              Welcome to my brain!
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

      {/* Creative Projects Grid */}
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
                
                {/* Spotify Vinyl Animation */}
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
                
                {/* Synth Design Project */}
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
                
                {/* YouTube Video Embed */}
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

      {/* Creative CTA */}
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
};

export default CreativePage;
