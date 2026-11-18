import React from "react";

const projects = [
  { title: "Blurb", url: "https://github.com/sasinkg/blurb", description: "A private social app that gives friend groups one thoughtful prompt a day. Designed with Apple-native interactions, group feeds, streaks, badges, and monthly reflection reports." },
  { title: "What Are They In?", url: "https://what-are-they-in-2.vercel.app/", description: "Search for actors and map the films and shows where you've seen them into a visual tree that grows over time." },
  { title: "Premier League Challenge", url: "https://premier-league-challenge.web.app/", description: "A social prediction game for guessing the final Premier League table and comparing results with friends." },
  { title: "Am I a Casual?", url: "https://sasinkg.github.io/am-i-a-casual/", description: "Responsive daily sports trivia with rotating questions, answer validation, and real-time scoring." },
  { title: "ourmind", url: "https://github.com/sasinkg/ourmind", description: "A social journaling app where groups share daily responses and track reflection habits across devices." },
];

const ProjectsSection = () => (
  <section id="projects" aria-labelledby="projects-heading">
    <h2 id="projects-heading">Projects</h2>
    <ul className="resume-projects">
      {projects.map(({ title, url, description }) => (
        <li key={title}>
          <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
          <span> · {description}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default ProjectsSection;
