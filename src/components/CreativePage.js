import React, { useRef, useState } from "react";
import { ArrowLeft, ArrowUpRight, Camera, Gamepad2, Music, Palette, Play, Video } from "lucide-react";

import ArcadePlatformer from "./ArcadePlatformer";
import ArcadeAtmosphere from "./ArcadeAtmosphere";

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
  const stage = useRef(null);
  const [activeVideos, setActiveVideos] = useState({});

  return (
    <div ref={stage} className="arcade-shell">
      <div className="arcade-clouds" aria-hidden="true"><span data-platform /><span data-platform /><span data-platform /></div>
      <header className="arcade-topbar arcade-container">
        <button className="arcade-exit" type="button" onClick={() => setCurrentPage("main")}>
          <ArrowLeft size={16} aria-hidden="true" /> Résumé
        </button>
        <span>Sasin Gudipati</span>
      </header>

      <main className="arcade-container">
        <section className="arcade-cabinet" data-platform data-platform-floor aria-labelledby="arcade-title">
          <div className="arcade-screen" data-platform data-platform-floor>
            <div>
              <h1 id="arcade-title">
                <span data-platform>Creative</span>
                <span data-platform className="arcade-title-accent">Arcade</span>
              </h1>
              <p data-platform>Original music, photography, and travel films.</p>
            </div>
            <div className="arcade-gamepad" data-platform aria-hidden="true"><Gamepad2 data-collision-outline strokeWidth={1.5} /></div>
          </div>
          <nav className="arcade-controls" aria-label="Explore creative work">
            <a data-platform href="#music"><Music size={17} aria-hidden="true" /> Music</a>
            <a data-platform href="#photography"><Camera size={17} aria-hidden="true" /> Photos</a>
            <a data-platform href="#film"><Video size={17} aria-hidden="true" /> Films</a>
          </nav>
          <ArcadePlatformer stage={stage} />
        </section>

        <div className="arcade-panels">
          <section id="music" className="arcade-panel arcade-music" data-platform data-platform-floor aria-labelledby="arcade-music-title">
            <h2 data-platform id="arcade-music-title"><Music size={22} aria-hidden="true" /> Music</h2>
            <p data-platform>Original tracks written, produced, and released by me.</p>
            <ul className="arcade-tracks" aria-label="Listen on Spotify">
              {tracks.map(([title, url]) => (
                <li data-platform key={title}>
                  <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`Listen to ${title} on Spotify`}>
                    <Play size={14} fill="currentColor" aria-hidden="true" /> {title}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section id="photography" className="arcade-panel arcade-photos" data-platform data-platform-floor aria-labelledby="arcade-photo-title">
            <h2 data-platform id="arcade-photo-title"><Camera size={22} aria-hidden="true" /> Photography</h2>
            <div className="arcade-photo-screen" data-platform>
              <p>Seoul · Busan · Gyeongju</p>
              <h3>Korea<br />in frames.</h3>
              <Camera size={72} strokeWidth={1.25} aria-hidden="true" />
            </div>
            <p data-platform>Street life, cafés, architecture, and the little details worth stopping for across Korea.</p>
            <div className="arcade-photo-links">
              <a data-platform href="https://www.instagram.com/p/DP4h3seklDf/?img_index=1" target="_blank" rel="noopener noreferrer">Instagram Set I <ArrowUpRight size={14} aria-hidden="true" /></a>
              <a data-platform href="https://www.instagram.com/p/DP4vB8Skt5t/?img_index=1" target="_blank" rel="noopener noreferrer">Instagram Set II <ArrowUpRight size={14} aria-hidden="true" /></a>
            </div>
          </section>

          <section id="film" className="arcade-panel arcade-films" data-platform data-platform-floor aria-labelledby="arcade-film-title">
            <h2 data-platform id="arcade-film-title"><Video size={22} aria-hidden="true" /> Travel Films</h2>
            <div className="arcade-video-list">
              {videos.map((video) => (
                <article key={video.id}>
                  <div className="arcade-video-preview" data-platform data-platform-floor>
                    <img src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt="" loading="lazy" />
                    {activeVideos[video.id] ? (
                      <iframe src={`https://www.youtube.com/embed/${video.id}?rel=0&autoplay=1`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={video.title} />
                    ) : (
                      <button data-platform className="arcade-youtube-play" type="button" aria-label={`Play ${video.title}`} onClick={() => setActiveVideos((current) => ({ ...current, [video.id]: true }))}>
                        <Play size={24} fill="currentColor" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                  <h3 data-platform><a href={video.url} target="_blank" rel="noopener noreferrer">{video.title} <ArrowUpRight size={16} aria-hidden="true" /></a></h3>
                  <p data-platform>{video.subtitle}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="more" className="arcade-panel arcade-more" data-platform data-platform-floor aria-labelledby="arcade-more-title">
            <h2 data-platform id="arcade-more-title"><Palette size={22} aria-hidden="true" /> Other Interests</h2>
            <p data-platform>Designing, tinkering, traveling, and following curiosity wherever it happens to go next.</p>
          </section>
        </div>
      </main>
      <div className="arcade-volcano-landscape" aria-hidden="true">
        <ArcadeAtmosphere />
        <div className="arcade-volcano-skyline">
          <span className="skyline-peak skyline-far-one" />
          <span className="skyline-peak skyline-far-two" />
          <span className="skyline-peak skyline-far-three" />
          <span className="skyline-peak skyline-near-one" />
          <span className="skyline-peak skyline-near-two" />
          <span className="skyline-peak skyline-near-three" />
        </div>
        <div className="arcade-volcano">
          <div className="arcade-volcano-mountain" data-platform data-platform-slope />
          <div className="arcade-volcano-crater" />
          <span data-platform data-moving-platform className="arcade-volcano-cloud volcano-cloud-one" />
          <span data-platform data-moving-platform className="arcade-volcano-cloud volcano-cloud-two" />
          <div className="arcade-eruption">
            {Array.from({ length: 9 }, (_, particle) => (
              <i key={particle} style={{ "--lava-x": `${(particle - 4) * 32}px`, "--lava-y": `${-100 - (4 - Math.abs(particle - 4)) * 24}px`, "--eruption-delay": `${particle * .06}s` }} />
            ))}
            <span className="arcade-volcano-smoke" />
          </div>
        </div>
        <div className="arcade-secret-portal" aria-hidden="true">
          <span className="arcade-secret-light" />
          <span className="arcade-secret-door">?</span>
          <span className="arcade-secret-label">UNKNOWN SIGNAL</span>
        </div>
      </div>
      <div className="arcade-ground" aria-hidden="true">
        {Array.from({ length: 24 }, (_, tile) => (
          <span className="arcade-ground-tile" key={tile}>
            <span className="arcade-grass-layer" />
            <span className="arcade-dirt-layer" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default CreativePage;
