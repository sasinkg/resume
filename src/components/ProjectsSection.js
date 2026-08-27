import React from "react";
import { ArrowUpRight, Film, MessageCircle, Table2, Trophy, Users } from "lucide-react";

const projects = [
  { title: "Blurb", icon: MessageCircle, url: "https://github.com/sasinkg/blurb", technologies: ["SwiftUI", "Firebase", "iOS"], status: "Building now", featured: true, description: "A private social app that gives friend groups one thoughtful prompt a day. Designed with Apple-native interactions, group feeds, streaks, badges, and monthly reflection reports." },
  { title: "What Are They In?", icon: Film, url: "https://what-are-they-in-2.vercel.app/", technologies: ["TypeScript", "React", "Neon"], description: "Search for actors and map the films and shows where you've seen them into a visual tree that grows over time." },
  { title: "Premier League Challenge", icon: Table2, url: "https://premier-league-challenge.web.app/", technologies: ["TypeScript", "React", "Vite"], description: "A social prediction game for guessing the final Premier League table and comparing results with friends." },
  { title: "Am I a Casual?", icon: Trophy, url: "https://sasinkg.github.io/am-i-a-casual/", technologies: ["TypeScript", "React", "Mantine"], description: "Responsive daily sports trivia with rotating questions, answer validation, and real-time scoring." },
  { title: "ourmind", icon: Users, url: "https://github.com/sasinkg/ourmind", technologies: ["React", "Firebase", "Chakra UI"], description: "A social journaling app where groups share daily responses and track reflection habits across devices." },
];

const ProjectsSection = ({ isVisible }) => (
  <section id="projects" className="section-wrap px-6 py-24 md:px-10 md:py-32">
    <div className={`mx-auto max-w-6xl reveal ${isVisible.projects ? "is-visible" : ""}`}>
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2 className="section-title max-w-3xl">Ideas made useful, from flight decks to friend groups.</h2>
      </div>
      <div className="mt-16 grid gap-5 md:grid-cols-2">
        {projects.map(({ title, icon: Icon, url, technologies, status, featured, description }) => (
          <a key={title} href={url} target="_blank" rel="noopener noreferrer" className={`project-card group flex min-h-[310px] flex-col p-7 md:p-9 ${featured ? "featured-project md:col-span-2 md:min-h-[370px]" : ""}`}>
            <div className="flex items-start justify-between">
              <span className="project-icon"><Icon size={22} /></span>
              <span className="project-arrow"><ArrowUpRight size={19} /></span>
            </div>
            <div className="mt-auto max-w-3xl">
              {status && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#9c3cff]">{status}</p>}
              <h3 className={`font-semibold tracking-[-0.04em] ${featured ? "text-4xl md:text-5xl" : "text-3xl"}`}>{title}</h3>
              <p className="mt-4 max-w-2xl leading-relaxed text-[#626266] dark:text-[#b6b6bb]">{description}</p>
              <div className="mt-6 flex flex-wrap gap-2">{technologies.map((technology) => <span key={technology} className="tag">{technology}</span>)}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
