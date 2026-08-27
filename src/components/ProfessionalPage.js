import React, { useEffect, useState } from "react";
import {
  ArrowDownRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";
import ProjectsSection from "./ProjectsSection";
import ThemeToggle from "./ThemeToggle";

const experience = [
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
  const [visible, setVisible] = useState({ hero: true });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setVisible((current) => ({ ...current, [entry.target.id]: true }));
      }),
      { threshold: 0.12 },
    );
    document.querySelectorAll("section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const reveal = (id) => `reveal ${visible[id] ? "is-visible" : ""}`;

  return (
    <div className="site-shell min-h-screen overflow-hidden text-[#1d1d1f] dark:text-[#f5f5f7]">
      <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4" aria-label="Primary navigation">
        <div className="nav-shell mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 md:px-5">
          <a href="#hero" className="flex items-center gap-2.5 font-semibold tracking-[-0.02em]">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#1d1d1f] text-xs text-white dark:bg-white dark:text-[#1d1d1f]">SG</span>
            <span className="hidden sm:inline">Sasin Gudipati</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-[#6e6e73] md:flex dark:text-[#a1a1a6]">
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#about" className="nav-link">About</a>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage("creative")}
              className="creative-button inline-flex h-9 items-center gap-2 rounded-full px-2.5 lg:px-3.5"
              aria-label="Open Creative Mode"
              title="Creative Mode"
            >
              <Sparkles size={16} />
              <span className="hidden lg:inline">Creative Mode</span>
            </button>
            <ThemeToggle />
            <a href="mailto:sasingudipati@gmail.com" className="button-primary px-4 py-2 text-sm">Let's talk</a>
          </div>
        </div>
      </nav>

      <main>
        <section id="hero" className="relative flex min-h-[92vh] items-center px-6 pb-20 pt-32 md:px-10">
          <div className="hero-glow" aria-hidden="true" />
          <div className={`relative mx-auto grid w-full max-w-6xl items-end gap-14 lg:grid-cols-[1fr_0.72fr] ${reveal("hero")}`}>
            <div>
              <p className="eyebrow mb-7"><span className="status-dot" /> Seattle, Washington</p>
              <h1 className="max-w-4xl text-[clamp(3.6rem,9vw,7.8rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
                Building tools<br />that make complex<br /><span className="gradient-text">feel simple.</span>
              </h1>
            </div>
            <div className="pb-2 lg:pb-3">
              <p className="mb-8 max-w-xl text-xl leading-relaxed tracking-[-0.025em] text-[#515154] md:text-2xl dark:text-[#b6b6bb]">
                I'm Sasin, a software engineer focused on systems performance, developer tooling, and reliable simulation software.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#projects" className="button-primary inline-flex items-center gap-2 px-5 py-3">View my work <ArrowDownRight size={17} /></a>
                <a href={`${process.env.PUBLIC_URL}/Resume.pdf`} target="_blank" rel="noopener noreferrer" className="button-secondary inline-flex items-center gap-2 px-5 py-3"><Download size={17} /> Résumé</a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-wrap px-6 py-24 md:px-10 md:py-32">
          <div className={`mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.72fr_1fr] lg:items-center ${reveal("about")}`}>
            <div className="portrait-frame mx-auto w-full max-w-md lg:mx-0">
              <img src={`${process.env.PUBLIC_URL}/image.jpg`} alt="Sasin Gudipati" className="aspect-[4/5] w-full object-cover" />
            </div>
            <div>
              <p className="eyebrow mb-5">About</p>
              <h2 className="section-title mb-8">Software should be fast, dependable, and quietly excellent.</h2>
              <div className="space-y-5 text-lg leading-relaxed text-[#5f5f63] dark:text-[#b6b6bb]">
                <p>I specialize in systems performance and developer tooling for simulation and high-reliability systems, working primarily in TypeScript, Python, and Rust.</p>
                <p>At Boeing and Garmin, I've improved automation, reliability, and simulation fidelity. I care about modernizing legacy systems and building efficient software that teams can trust.</p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="metric-card"><strong>3+</strong><span>Years building production software</span></div>
                <div className="metric-card"><strong>80%</strong><span>Faster simulation response</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="px-6 py-24 md:px-10 md:py-32">
          <div className={`mx-auto max-w-6xl ${reveal("experience")}`}>
            <div className="section-heading"><p className="eyebrow">Experience</p><h2 className="section-title max-w-3xl">Engineering where precision matters.</h2></div>
            <div className="mt-16 border-t border-black/10 dark:border-white/10">
              {experience.map((job, index) => (
                <article key={job.company} className="experience-row grid gap-8 py-12 lg:grid-cols-[0.32fr_0.68fr]">
                  <div>
                    <p className="mb-2 text-sm text-[#86868b]">{job.period}</p>
                    <h3 className="text-xl font-semibold tracking-[-0.025em]">{job.company}</h3>
                    <p className="mt-1 text-sm text-[#6e6e73] dark:text-[#a1a1a6]">{job.location}</p>
                  </div>
                  <div>
                    <h3 className="mb-3 text-2xl font-semibold tracking-[-0.03em]">{job.title}</h3>
                    <p className="mb-7 max-w-3xl text-lg leading-relaxed text-[#5f5f63] dark:text-[#b6b6bb]">{job.summary}</p>
                    <ul className="space-y-4">
                      {job.highlights.map((item) => <li key={item} className="flex gap-4 leading-relaxed text-[#515154] dark:text-[#c7c7cc]"><span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-[#b64eff]" />{item}</li>)}
                    </ul>
                    <p className="mt-7 text-sm font-medium text-[#86868b]">{job.stack}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ProjectsSection isVisible={visible} />

        <section id="skills" className="px-6 py-24 md:px-10 md:py-32">
          <div className={`mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.38fr_0.62fr] ${reveal("skills")}`}>
            <div><p className="eyebrow mb-5">Toolkit</p><h2 className="section-title">Broad enough to build. Deep enough to optimize.</h2></div>
            <div className="divide-y divide-black/10 border-y border-black/10 dark:divide-white/10 dark:border-white/10">
              {skillGroups.map((group) => <div key={group.label} className="grid gap-3 py-7 sm:grid-cols-[0.28fr_0.72fr]"><h3 className="font-semibold">{group.label}</h3><p className="leading-relaxed text-[#6e6e73] dark:text-[#a1a1a6]">{group.values}</p></div>)}
            </div>
          </div>
        </section>

        <section id="education" className="section-wrap px-6 py-24 md:px-10 md:py-32">
          <div className={`mx-auto max-w-6xl ${reveal("education")}`}>
            <p className="eyebrow mb-8">Education</p>
            <div className="education-card grid gap-7 p-7 md:grid-cols-[1fr_auto] md:p-10">
              <div><h2 className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">B.S. Electrical Engineering</h2><p className="mt-2 text-lg gradient-text font-semibold">Minor in Computer Science</p><p className="mt-5 text-[#6e6e73] dark:text-[#a1a1a6]">University of Illinois Urbana-Champaign · Grainger College of Engineering</p></div>
              <div className="md:text-right"><p>2019 — 2022</p><p className="mt-1 text-[#6e6e73] dark:text-[#a1a1a6]">GPA 3.6</p></div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-24 md:px-10 md:py-36">
          <div className={`contact-card relative mx-auto max-w-6xl overflow-hidden p-8 md:p-16 ${reveal("contact")}`}>
            <div className="contact-glow" aria-hidden="true" />
            <div className="relative max-w-3xl"><p className="eyebrow mb-6">Let's connect</p><h2 className="section-title mb-6">Have an interesting problem? I'd love to hear about it.</h2><p className="mb-9 text-lg text-[#5f5f63] dark:text-[#b6b6bb]">Open to thoughtful conversations about software, systems, and ambitious product ideas.</p>
              <div className="flex flex-wrap gap-3"><a href="mailto:sasingudipati@gmail.com" className="button-primary inline-flex items-center gap-2 px-5 py-3"><Mail size={17} /> Email me</a><a href="tel:+14254433500" className="button-secondary inline-flex items-center gap-2 px-5 py-3"><Phone size={17} /> 425 443 3500</a></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 pb-10 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 border-t border-black/10 pt-7 text-sm text-[#6e6e73] sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:text-[#a1a1a6]">
          <p>© {new Date().getFullYear()} Sasin Gudipati · Seattle, WA</p>
          <div className="flex items-center gap-5"><a className="footer-link" href="https://github.com/sasinkg" target="_blank" rel="noopener noreferrer"><Github size={17} /> GitHub</a><a className="footer-link" href="https://www.linkedin.com/in/sasingudipati/" target="_blank" rel="noopener noreferrer"><Linkedin size={17} /> LinkedIn</a><button className="footer-link" onClick={() => setCurrentPage("creative")}><Sparkles size={17} /> Play</button></div>
        </div>
      </footer>
    </div>
  );
};

export default ProfessionalPage;
