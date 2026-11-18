import React, { useRef } from "react";
import { Download, Github, Linkedin, Mail, Phone, Sparkles } from "lucide-react";
import ProjectsSection from "./ProjectsSection";
import ThemeToggle from "./ThemeToggle";

const experience = [
  {
    title: "Senior Software Engineer",
    company: "General Motors · Simulation (formerly Cruise)",
    location: "Seattle, WA",
    period: "Starting Dec 2026",
    summary: "Upcoming role on the team building simulation tools for autonomous driving validation.",
    highlights: [
      "Help define the technical roadmap for the Simulation Scenario Definition platform and its TypeScript and Python SDK.",
      "Lead development of graphical tools engineers use to define traffic, environment, and sensor scenarios.",
      "Improve Python infrastructure for scenario serialization, validation, and integration with cloud compute.",
    ],
    stack: "TypeScript · Python",
  },
  {
    title: "Software Engineer II · Full-stack",
    company: "Boeing Co.",
    location: "Seattle, WA",
    period: "Feb 2023 — Present",
    summary: "Modernizing high-reliability flight deck simulation systems and developer workflows across avionics, UI, and simulation teams.",
    highlights: [
      "Served as Scrum Master for the Virtual Flight Deck modernization program, leading sprint planning, delivery timelines, and cross-team coordination; built a code review bot and automated release notes and documentation reports.",
      "Led a beta Virtual Flight Deck rebuild using TypeScript, React, Rust, and SQL, including panel layout management, an in-house SVG editor, and simulation debugging tools; cut simulation-to-frontend response time by 80%, from 900ms to 180ms.",
      "Built a Python GUI that simulates flight deck monitors over TUIO, enabling at-home testing and Playwright end-to-end testing in CI/CD.",
      "Reduced release cycles from two days to 30 minutes by automating CI/CD for Java, C#, and Python tools and creating export, build-health, and branch-summary tooling.",
      "Resolved a timing defect affecting 40% of cockpit controls with a full-stack Java fix, reducing response latency from 1.0ms to 0.6ms.",
      "Modernized legacy Fortran and C++ simulation models in Rust and Python, eliminating key crash conditions and improving flight deck input latency by 20%.",
    ],
    stack: "TypeScript · React · Rust · SQL · Java · C/C++ · Python · Fortran",
  },
  {
    title: "Software Engineer Intern",
    company: "Garmin International",
    location: "Kansas City, KS",
    period: "May — Aug 2022",
    summary: "Graphics infrastructure and developer tooling for Garmin's certified in-flight display systems.",
    highlights: [
      "Integrated the IMG-BXS-4-64 Vulkan graphics driver into Garmin's in-flight display, resolving 1,500 code coverage issues and meeting FAA certification standards.",
      "Developed a custom graphics simulation environment aligned with Vulkan API specifications and GPU rendering pipelines.",
      "Created a Python executable that organized hundreds of functions per file, cutting manual effort by 50%.",
    ],
    stack: "C/C++ · Python · XML · Vulkan API · Git",
  },
];

const skillGroups = [
  { label: "Languages", values: "TypeScript, JavaScript, Python, Java, Rust, C/C++, SQL, Swift" },
  { label: "Web & product", values: "React, Node.js, SwiftUI, HTML, CSS, Mantine, Chakra UI" },
  { label: "Systems & data", values: "Firebase, SystemVerilog, Assembly (LC-3), Vulkan, Git" },
];

const ProfessionalPage = ({ setCurrentPage }) => {
  const portrait = useRef(null);

  const movePortrait = (event) => {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const image = portrait.current;
    const frame = image.getBoundingClientRect();
    const horizontalWeight = Math.max(-1, Math.min(1, (event.clientX - frame.left - frame.width / 2) / frame.width));
    const verticalWeight = Math.max(-1, Math.min(1, (event.clientY - frame.top - frame.height / 2) / frame.height));

    image.style.setProperty("--portrait-x", `${horizontalWeight * 14}%`);
    image.style.setProperty("--portrait-y", `${verticalWeight * 14}%`);
    image.style.setProperty("--pointer-x", `${48 * ((event.clientX - bounds.left) / bounds.width - 0.5)}px`);
    image.style.setProperty("--pointer-y", `${48 * ((event.clientY - bounds.top) / bounds.height - 0.5)}px`);
  };

  const resetPortrait = () => {
    for (const variable of ["--portrait-x", "--portrait-y", "--pointer-x", "--pointer-y"]) {
      portrait.current.style.removeProperty(variable);
    }
  };

  return (
    <main className="resume-layout">
      <header className="resume-profile" onPointerMove={movePortrait} onPointerLeave={resetPortrait}>
        <div className="resume-profile-inner">
          <div>
            <h1>Sasin <span>Gudipati</span></h1>
            <p className="mt-3 resume-profile-location">Software Engineer · Seattle, WA</p>
          </div>
          <div className="resume-portrait" ref={portrait}>
            <div className="resume-sparkles" aria-hidden="true">
              <span>✦</span><span>✧</span><span>·</span><span>✦</span>
            </div>
            <img
              className="resume-headshot"
              src={`${process.env.PUBLIC_URL}/image.jpg`}
              alt="Sasin Gudipati"
              width="240"
              height="240"
            />
          </div>
          <div className="resume-profile-links">
            <a href="https://github.com/sasinkg" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/sasingudipati/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
            <a href="mailto:sasingudipati@gmail.com" aria-label="Email"><Mail size={20} /></a>
            <a href={`${process.env.PUBLIC_URL}/Resume.pdf`} target="_blank" rel="noopener noreferrer"><Download size={18} /> Résumé</a>
          </div>
        </div>
      </header>

      <div className="resume-content">
        <nav className="resume-toolbar" aria-label="Site controls">
          <button type="button" onClick={() => setCurrentPage("creative")} className="creative-button inline-flex items-center gap-2 rounded-full px-3 py-2">
            <Sparkles size={16} /> Creative Mode
          </button>
          <ThemeToggle />
        </nav>

        <section id="about" aria-labelledby="about-heading">
          <h2 id="about-heading">About</h2>
          <p>I’m joining General Motors’ Simulation team (formerly Cruise) in December 2026 as a <strong>Senior Software Engineer</strong>, building tools for autonomous driving simulation.</p>
          <p>At Boeing and Garmin, I worked on simulation, developer tooling, and systems performance. I work primarily in TypeScript, Python, and Rust.</p>

          <div className="resume-disclosures">
            <details id="experience">
              <summary>Experience</summary>
              {experience.map((job) => (
                <article key={job.company} className="resume-job">
                  <h3>{job.title} · {job.company}</h3>
                  <p className="resume-meta">{job.period} · {job.location}</p>
                  <p>{job.summary}</p>
                  <ul className="list-disc space-y-1 pl-5">
                    {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                  <p className="resume-meta">{job.stack}</p>
                </article>
              ))}
            </details>
            <details id="education">
              <summary>Education</summary>
              <p className="mt-2 font-semibold">University of Illinois Urbana-Champaign</p>
              <p>Grainger College of Engineering · B.S. Electrical Engineering · Minor in Computer Science</p>
              <p className="resume-meta">2019–2022 · GPA 3.6</p>
            </details>
            <details id="skills">
              <summary>Skills</summary>
              <dl className="mt-2 space-y-2">
                {skillGroups.map(({ label, values }) => (
                  <div key={label}><dt className="font-semibold">{label}</dt><dd>{values}</dd></div>
                ))}
              </dl>
            </details>
          </div>
        </section>

        <ProjectsSection />

        <footer id="contact" className="resume-contact">
          <a href="mailto:sasingudipati@gmail.com"><Mail size={16} /> Email me</a>
          <a href="tel:+14254433500"><Phone size={16} /> 425 443 3500</a>
        </footer>
      </div>
    </main>
  );
};

export default ProfessionalPage;
