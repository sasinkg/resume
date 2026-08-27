import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Camera,
  Music,
  Palette,
  Play,
  Sparkles,
  Video,
} from "lucide-react";

const tracks = [
  ["orange sunsets", "https://open.spotify.com/track/43Wv9YF5KtIx4p3EtXXqsU"],
  ["strawberry skies", "https://open.spotify.com/track/3nZVMIgupH06Jcha9N1Ech"],
  ["carefree", "https://open.spotify.com/track/3nXHFW7xHLPjndReY66Mz4"],
  ["summer nights", "https://open.spotify.com/track/3yOMxSYz4P52C6mLTV6KmL"],
  ["you're already gone", "https://open.spotify.com/track/4W8uYeGtHH5PRd8nbIuOyU"],
  ["friendzone", "https://open.spotify.com/track/6keOxUdbjgqBafKmxKHZOU"],
];

const videos = [
  { title: "Portugal Travel Vlog", subtitle: "Que lindo.", type: "Travel documentary", id: "3zT2YE7rP7k", url: "https://www.youtube.com/watch?v=3zT2YE7rP7k" },
  { title: "Costa Rica Vlog", subtitle: "Pura vida.", type: "Travel vlog", id: "sruyn4g74ps", url: "https://www.youtube.com/watch?v=sruyn4g74ps" },
];

const CreativePage = ({ setCurrentPage }) => {
  const [visible, setVisible] = useState({ "creative-hero": true });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setVisible((current) => ({ ...current, [entry.target.id]: true }));
      }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".creative-reveal[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const reveal = (id) => `creative-reveal ${visible[id] ? "is-visible" : ""}`;

  return (
    <div className="creative-shell min-h-screen overflow-hidden text-[#171219]">
      <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4" aria-label="Creative navigation">
        <div className="creative-nav mx-auto flex max-w-6xl items-center justify-between rounded-full px-3 py-2.5 md:px-4">
          <button onClick={() => setCurrentPage("main")} className="creative-back inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold">
            <ArrowLeft size={17} /><span className="hidden sm:inline">Professional</span>
          </button>
          <a href="#creative-hero" className="font-bold tracking-[-0.03em]">Sasin's <span className="creative-gradient-text">playground</span></a>
          <a href="#creative-work" className="creative-action rounded-full px-4 py-2 text-sm font-semibold">Explore</a>
        </div>
      </nav>

      <main>
        <section id="creative-hero" className={`relative flex min-h-[94vh] items-center px-6 pb-20 pt-32 md:px-10 ${reveal("creative-hero")}`}>
          <div className="creative-orb orb-one" aria-hidden="true" />
          <div className="creative-orb orb-two" aria-hidden="true" />
          <div className="creative-doodle doodle-one" aria-hidden="true">✦</div>
          <div className="creative-doodle doodle-two" aria-hidden="true">●</div>
          <div className="relative mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1fr_.5fr] lg:items-end">
            <div>
              <p className="creative-kicker mb-7"><Sparkles size={14} /> Off the clock, on the record</p>
              <h1 className="creative-title max-w-5xl text-[clamp(4.3rem,11vw,9.5rem)] font-black leading-[.79] tracking-[-.075em]">
                Serious about<br /><span className="creative-gradient-text">making weird stuff.</span>
              </h1>
            </div>
            <div className="lg:pb-4">
              <p className="max-w-md text-xl font-medium leading-relaxed tracking-[-.025em] text-[#544b56] md:text-2xl">
                Music, photographs, travel films, and whatever else refuses to stay an idea.
              </p>
              <a href="#creative-work" className="creative-cta mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 font-bold">Enter the playground <ArrowUpRight size={18} /></a>
            </div>
          </div>
        </section>

        <section id="creative-work" className="creative-work-wrap px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div id="music" className={`grid gap-8 lg:grid-cols-[.42fr_.58fr] ${reveal("music")}`}>
              <div>
                <p className="creative-kicker mb-5"><Music size={14} /> Music</p>
                <h2 className="creative-section-title">Songs for windows down and nowhere to be.</h2>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-[#655b67]">Original tracks written, produced, and released one feeling at a time.</p>
              </div>
              <div className="music-card p-5 md:p-7">
                <div className="mb-5 flex items-center justify-between"><span className="text-sm font-bold uppercase tracking-[.12em]">Listen on Spotify</span><Music size={20} /></div>
                <div className="divide-y divide-black/10">
                  {tracks.map(([title, url], index) => (
                    <a key={title} href={url} target="_blank" rel="noopener noreferrer" className="track-row group flex items-center gap-4 py-4">
                      <span className="track-number">{String(index + 1).padStart(2, "0")}</span>
                      <span className="flex-1 text-lg font-bold tracking-[-.025em]">{title}</span>
                      <span className="track-play"><Play size={14} fill="currentColor" /></span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div id="photography" className={`mt-28 grid gap-8 lg:grid-cols-[.58fr_.42fr] lg:items-center ${reveal("photography")}`}>
              <div className="photo-card relative min-h-[470px] overflow-hidden p-7 md:p-10">
                <div className="photo-shape photo-shape-one" /><div className="photo-shape photo-shape-two" />
                <div className="relative flex h-full min-h-[390px] flex-col justify-between">
                  <div className="flex items-center justify-between"><span className="creative-pill">Instagram series</span><Camera size={24} /></div>
                  <div><p className="mb-4 font-mono text-sm uppercase tracking-[.16em]">Seoul · Busan · Gyeongju</p><h3 className="text-5xl font-black leading-[.9] tracking-[-.055em] md:text-7xl">Korea<br />in frames.</h3></div>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://www.instagram.com/p/DP4h3seklDf/?img_index=1" target="_blank" rel="noopener noreferrer" className="photo-link">Set I <ArrowUpRight size={16} /></a>
                    <a href="https://www.instagram.com/p/DP4vB8Skt5t/?img_index=1" target="_blank" rel="noopener noreferrer" className="photo-link">Set II <ArrowUpRight size={16} /></a>
                  </div>
                </div>
              </div>
              <div className="lg:pl-8"><p className="creative-kicker mb-5"><Camera size={14} /> Photography</p><h2 className="creative-section-title">Quiet moments. Loud color.</h2><p className="mt-6 text-lg leading-relaxed text-[#655b67]">Street life, cafés, architecture, and the little details worth stopping for across Korea.</p></div>
            </div>

            <div id="film" className={`mt-28 ${reveal("film")}`}>
              <p className="creative-kicker mb-5"><Video size={14} /> Videos & vlogs</p>
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><h2 className="creative-section-title max-w-3xl">Postcards that move.</h2><p className="max-w-sm text-lg text-[#655b67]">Short travel films from places that deserved more than a camera roll.</p></div>
              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                {videos.map((video) => (
                  <article key={video.id} className="video-card overflow-hidden">
                    <div className="aspect-video overflow-hidden bg-black"><iframe src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`} className="h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={video.title} /></div>
                    <div className="flex items-end justify-between gap-5 p-6"><div><p className="mb-2 text-xs font-bold uppercase tracking-[.13em] text-[#655b67]">{video.type}</p><h3 className="text-2xl font-black tracking-[-.035em]">{video.title}</h3><p className="mt-1 text-[#655b67]">{video.subtitle}</p></div><a href={video.url} target="_blank" rel="noopener noreferrer" className="video-link" aria-label={`Watch ${video.title}`}><ArrowUpRight size={19} /></a></div>
                  </article>
                ))}
              </div>
            </div>

            <div id="more" className={`mt-28 ${reveal("more")}`}>
              <div className="more-card relative overflow-hidden p-8 md:p-14">
                <div className="more-grid" aria-hidden="true" />
                <div className="relative grid gap-10 lg:grid-cols-[1fr_.45fr] lg:items-end"><div><p className="creative-kicker mb-6 text-white/65"><Palette size={14} /> Other cool things I do…</p><h2 className="max-w-4xl text-5xl font-black leading-[.9] tracking-[-.06em] text-white md:text-7xl">Always experimenting.<br /><span className="text-[#c8ff63]">Never quite finished.</span></h2></div><p className="text-lg leading-relaxed text-white/70">Designing, tinkering, traveling, and following curiosity wherever it happens to go next.</p></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 py-10 md:px-10"><div className="mx-auto flex max-w-6xl flex-col gap-5 border-t border-black/10 pt-7 text-sm text-[#6d636f] sm:flex-row sm:items-center sm:justify-between"><p>Made with equal parts curiosity and caffeine.</p><button onClick={() => setCurrentPage("main")} className="inline-flex items-center gap-2 font-bold text-[#171219] hover:text-[#7346e8]"><ArrowLeft size={16} /> Back to the résumé</button></div></footer>
    </div>
  );
};

export default CreativePage;
