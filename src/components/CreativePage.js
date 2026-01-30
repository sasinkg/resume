import React from "react";
import {
  ArrowLeft,
  Music,
  Camera,
  Video,
  Palette,
  Sparkles,
  Link
} from "lucide-react";

const CreativePage = ({ setCurrentPage }) => {
  const creativeProjects = [
    {
      category: "Music",
      icon: <Music className="w-8 h-8" />,
      isSpotify: true,
      items: [
        {
          title: "orange sunsets",
          description:
            "Your most popular track with 3,927 plays - dreamy atmospheric vibes",
          type: "Top Hit",
          plays: "3,927",
          url: "https://open.spotify.com/track/43Wv9YF5KtIx4p3EtXXqsU",
        },
        {
          title: "strawberry skies",
          description:
            "Second most popular with 2,796 plays - sweet melodic journey",
          type: "Fan Favorite",
          plays: "2,796",
          url: "https://open.spotify.com/track/3nZVMIgupH06Jcha9N1Ech",
        },
        {
          title: "carefree",
          description: "Chill vibes with 2,538 plays - perfect for relaxation",
          type: "Chill",
          plays: "2,538",
          url: "https://open.spotify.com/track/3nXHFW7xHLPjndReY66Mz4",
        },
        {
          title: "summer nights",
          description: "Warm nostalgic sounds capturing those perfect evenings",
          type: "Seasonal",
          plays: "<1000",
          url: "https://open.spotify.com/track/3yOMxSYz4P52C6mLTV6KmL",
        },
        {
          title: "you're already gone",
          description: "A softer one — bittersweet, reflective, and airy.",
          type: "Emotional",
          plays: "<1000",
          url: "https://open.spotify.com/track/4W8uYeGtHH5PRd8nbIuOyU",
        },
        {
          title: "friendzone",
          description: "Sad banger energy. Heartbreak but make it catchy.",
          type: "Emotional",
          plays: "<1000",
          url: "https://open.spotify.com/track/6keOxUdbjgqBafKmxKHZOU",
        },
      ],
    },
    {
      category: "Photography",
      icon: <Camera className="w-8 h-8" />,
      items: [
        {
          title: "Korea Photography",
          description:
            "Street life, cafes, architecture, and quiet moments across Seoul, Busan, and Gyeongju.",
          type: "Instagram Series",
          links: [
            {
              label: "Set I",
              url: "https://www.instagram.com/p/DP4h3seklDf/?img_index=1",
            },
            {
              label: "Set II",
              url: "https://www.instagram.com/p/DP4vB8Skt5t/?img_index=1",
            },
          ],
        },
      ],
    },
    {
      category: "Videos & Vlogs",
      icon: <Video className="w-8 h-8" />,
      isYoutube: true,
      youtubeIds: ["3zT2YE7rP7k", "sruyn4g74ps"],
      items: [
        {
          title: "Portugal Travel Vlog",
          description: "Que lindo.",
          type: "Travel Documentary",
          featured: true,
          url: "https://www.youtube.com/watch?v=3zT2YE7rP7k",
        },
        {
          title: "Costa Rica Vlog",
          description: "Pura vida.",
          type: "Travel Vlog",
          url: "https://www.youtube.com/watch?v=sruyn4g74ps",
        },
      ],
    },
    {
      category: "Other cool things I do…",
      icon: <Palette className="w-8 h-8" />,
      items: [],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-cyan-900 to-green-900 text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          >
            <Sparkles className="w-4 h-4 text-pink-400/40" />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => setCurrentPage("main")}
            className="flex items-center gap-2 text-white/80 hover:text-white"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Professional
          </button>
          <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
            Creative Universe
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-20 relative z-10">
        <div className="text-center px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-pulse">
            Welcome to my brain!
          </h1>
          <p className="text-2xl md:text-3xl mb-6 text-white/80">
            Where Engineering Meets Art
          </p>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Beyond the code and circuits, I explore the creative realm through
            music, photography, design, and storytelling.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {creativeProjects.map((category) => (
            <div
              key={category.category}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-pink-400">{category.icon}</div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                  {category.category}
                </h3>
              </div>

              {/* YouTube embeds */}
              {category.isYoutube && category.youtubeIds && (
                <div className="mb-6 space-y-6">
                  {category.youtubeIds.map((id) => (
                    <iframe
                      key={id}
                      src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
                      className="w-full h-64 rounded-2xl shadow-2xl"
                      allowFullScreen
                      title="YouTube video"
                    />
                  ))}
                </div>
              )}

              {/* Cards */}
              <div className="space-y-4">
                {category.items.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => item.url && window.open(item.url, "_blank")}
                    role={item.url ? "button" : undefined}
                    tabIndex={item.url ? 0 : undefined}
                    className={`bg-white/5 rounded-2xl p-4 border transition-all ${
                      item.url
                        ? "cursor-pointer hover:border-pink-400/30"
                        : "border-white/10"
                    } ${item.featured ? "ring-2 ring-pink-400/30" : ""}`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <span className="text-xs px-2 py-1 bg-pink-500/20 rounded-full">
                        {item.type}
                      </span>
                    </div>

                    <p className="text-white/70 text-sm">{item.description}</p>

                    {item.plays && (
                      <div className="mt-2 text-xs text-white/50">
                        Plays: {item.plays}
                      </div>
                    )}

                    {item.links && (
                      <div className="mt-3 flex gap-4 text-sm">
                        {item.links.map((link, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(link.url, "_blank");
                            }}
                            className="text-pink-300 hover:text-pink-400 hover:underline"
                          >
                            <div className = "flex flex-wrap gap-2 mb-4"><Link className="w-5 h-5"></Link> {link.label}</div>
                            
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CreativePage;
