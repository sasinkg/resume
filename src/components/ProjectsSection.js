import React from "react";
import { ExternalLink, Film, MessageCircle, Table2, Trophy, Users } from "lucide-react";

const projects = [
  {
    title: "Blurb",
    icon: MessageCircle,
    url: "https://github.com/sasinkg/blurb",
    technologies: ["Swift", "SwiftUI", "Firebase", "iOS"],
    status: "In Development",
    featured: true,
    description:
      "A private, group-based social app that turns one daily prompt into meaningful conversations—from casual check-ins and deeper reflections to seasonal moments, trivia, and optional birthday questions. Designed with polished Apple-native interactions, Liquid Glass styling, group feeds, streaks, badges, and monthly reflection reports. The MVP is in development, with Firebase planned for authentication, groups, and real-time posts.",
  },
  { title: "What Are They In?", icon: Film, url: "https://what-are-they-in-2.vercel.app/", technologies: ["TypeScript", "React.js", "Neon"], description: "Ever watch a movie and wonder where you know an actor from? Search for actors and build a visual tree of everyone you've watched over time." },
  { title: "Premier League Challenge", icon: Table2, url: "https://premier-league-challenge.web.app/", technologies: ["TypeScript", "React.js", "Vite"], description: "A web game for predicting the Premier League table and comparing results with friends." },
  { title: "Am I a Casual?", icon: Trophy, url: "https://sasinkg.github.io/am-i-a-casual/", technologies: ["TypeScript", "React.js", "Mantine"], description: "A responsive daily sports trivia experience with rotating questions, answer validation, and real-time scoring." },
  { title: "ourmind", icon: Users, url: "https://github.com/sasinkg/ourmind", technologies: ["TypeScript", "React.js", "Chakra UI", "Firebase"], description: "A social journaling app where groups share daily responses and track reflection habits together, with authentication and real-time cross-device syncing." },
];

const ProjectsSection = ({ isVisible }) => (
  <section id="projects" className="py-20 relative z-10 bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
    <div className="max-w-6xl mx-auto px-6">
      <div className={`transform transition-all duration-1000 ${isVisible.projects ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-slate-100">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(({ title, icon: Icon, url, technologies, status, featured, description }) => (
            <article key={title} className={`bg-white dark:bg-slate-800/60 dark:backdrop-blur-sm rounded-lg p-7 border shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group ${featured ? "md:col-span-2 border-indigo-300 dark:border-indigo-500/60" : "border-gray-200 dark:border-slate-600/50"}`}>
              <div className="flex items-center gap-3 mb-4">
                <Icon className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-2xl font-medium text-gray-900 dark:text-slate-100">{title}</h3>
                {status && <span className="text-xs px-3 py-1 bg-indigo-100 dark:bg-indigo-500/30 text-indigo-700 dark:text-indigo-200 rounded-full">{status}</span>}
              </div>
              <p className="text-gray-600 dark:text-slate-300 mb-5 leading-relaxed">{description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {technologies.map((technology) => <span key={technology} className="px-3 py-1 bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-300 rounded-full text-sm border border-gray-200 dark:border-slate-600">{technology}</span>)}
              </div>
              <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors font-medium">
                <ExternalLink className="w-4 h-4" /> View Project
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProjectsSection;
