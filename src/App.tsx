import { useEffect, useState } from "react";
import heroImage from "./assets/hero.png";
import posScreenshot from "./assets/pos-screenshot.png";
import inventoryDashboard from "./assets/inventory-dashboard.png";

const services = [
  {
    number: "01",
    eyebrow: "WEBSITES & WEB APPLICATIONS",
    title: "Web Development",
    text: "Production-ready websites and web applications built with clean interfaces, responsive layouts, and dependable backend features.",
    checklist: [
      "React interfaces",
      "Laravel APIs",
      "Responsive layouts",
      "MySQL integration",
    ],
    audience: "Businesses, portfolios, and online tools",
    action: "Start a web project",
  },
  {
    number: "02",
    eyebrow: "BUSINESS APPLICATIONS",
    title: "Application Development",
    text: "Practical systems for orders, inventory, dashboards, and workflows with stable performance and clear user experiences.",
    checklist: [
      "React dashboards",
      "Laravel business logic",
      "CRUD workflows",
      "Role-based features",
    ],
    audience: "Teams needing a custom internal tool",
    action: "Talk about your app",
  },
  {
    number: "03",
    eyebrow: "INTERFACE & EXPERIENCE DESIGN",
    title: "UI/UX Design",
    text: "Clear interfaces and reusable layouts that make full-stack products easier to understand, use, and maintain.",
    checklist: [
      "User interface design",
      "Responsive layouts",
      "Component planning",
      "Design handoff",
    ],
    audience: "Teams preparing to build or redesign",
    action: "Discuss design",
  },
  {
    number: "04",
    eyebrow: "CUSTOM SYSTEMS & INTEGRATIONS",
    title: "Custom Development Solutions",
    text: "Dashboards, databases, APIs, and internal tools tailored to the way your team actually works.",
    checklist: [
      "Custom web systems",
      "Database integration",
      "API development",
      "Operational dashboards",
    ],
    audience: "Operations, workflows, and internal tooling",
    action: "Plan a custom build",
  },
];

const projects = [
  {
    title: "Point of Sale System",
    type: "Business Application",
    image: posScreenshot,
    text: "A practical POS application for managing menu items, categories, customer orders, payment methods, and daily sales workflows.",
    tags: ["React", "TypeScript", "Laravel", "MySQL"],
  },
  {
    title: "Inventory Management Dashboard",
    type: "Admin Dashboard",
    image: inventoryDashboard,
    text: "An inventory platform for tracking products, stock movement, suppliers, purchase orders, warehouses, and low-stock records.",
    tags: ["React", "TypeScript", "Laravel", "MySQL"],
  },
];

const skills = [
  [
    "Frontend Development",
    "React",
    "Angular",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
  ],
  ["Backend Development", "Laravel"],
  ["Database", "MySQL"],
  ["Version Control", "Git", "GitHub"],
  ["Development Tools", "Visual Studio Code", "Postman"],
];

const toolLogos = [
  ["React", "https://cdn.simpleicons.org/react/61DAFB"],
  ["Angular", "https://cdn.simpleicons.org/angular/DD0031"],
  ["TypeScript", "https://cdn.simpleicons.org/typescript/3178C6"],
  ["JavaScript", "https://cdn.simpleicons.org/javascript/F7DF1E"],
  ["HTML", "https://cdn.simpleicons.org/html5/E34F26"],
  ["CSS", "https://cdn.simpleicons.org/css/1572B6"],
  ["Laravel", "https://cdn.simpleicons.org/laravel/FF2D20"],
  ["MySQL", "https://cdn.simpleicons.org/mysql/4479A1"],
  ["Git", "https://cdn.simpleicons.org/git/F05032"],
  ["GitHub", "https://cdn.simpleicons.org/github/FFFFFF"],
  [
    "Visual Studio Code",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  ],
  ["Postman", "https://cdn.simpleicons.org/postman/FF6C37"],
];

function App() {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);
  useEffect(() => {
    const sections = [
      "home",
      "about",
      "services",
      "projects",
      "skills",
      "contact",
    ]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleSection)
          setActive(
            visibleSection.target.id.charAt(0).toUpperCase() +
              visibleSection.target.id.slice(1),
          );
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="CHRIS home">
          <span>CH</span>
          <small>CHRIS</small>
        </a>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {[
            ["Home", "Home"],
            ["About", "About"],
            ["What I Do", "Services"],
            ["Projects", "Projects"],
            ["Skills", "Skills"],
            ["Contact", "Contact"],
          ].map(([label, section]) => (
            <a
              className={active === section ? "active" : ""}
              href={`#${section.toLowerCase()}`}
              onClick={() => {
                setActive(section);
                setMenuOpen(false);
              }}
              key={section}
            >
              {label}
            </a>
          ))}
        </div>
        <a className="talk" href="#contact" onClick={() => setMenuOpen(false)}>
          Let&apos;s Talk <span>↗</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <section className="hero shell" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            I am <strong>CHRIS</strong>
          </p>
          <h1>
            {/* Junior Full-Stack */}
            Software
            <br />
            <em>Developer</em>
          </h1>
          <p className="intro">
            Building thoughtful digital experiences across the stack, from
            polished interfaces to reliable backend systems and APIs.
          </p>
          <a className="button" href="/TorradoChrisCV.pdf" download="TorradoChrisCV.pdf">
            Download CV <span>↓</span>
          </a>
          <div className="socials"></div>
        </div>
        <div className="portrait-wrap" aria-hidden="true">
          <div className="portrait-glow" />
          <img src={heroImage} alt="" />
        </div>
        <a className="scroll-cue" href="#services">
          Scroll to explore
        </a>
      </section>
      <section className="section shell about" id="about">
        <SectionHeading
          title="About Me"
          subtitle="Building complete digital experiences across the stack"
        />
        <p className="about-text">
          I&apos;m a junior full-stack developer passionate about creating
          clean, intuitive, and reliable digital products. I combine thoughtful
          frontend design with practical backend development, APIs, and
          database-driven features to turn ideas into useful experiences.
        </p>
        <div className="approach">
          <h3>My Approach</h3>
          <div className="approach-grid">
            {[
              [
                "Discover",
                "Understand the goal, users, and key features before writing code.",
              ],
              [
                "Build",
                "Create the interface, Laravel logic, APIs, and database connections.",
              ],
              [
                "Refine",
                "Test the experience, fix issues, and polish the responsive details.",
              ],
              [
                "Deliver",
                "Share a dependable result with clear handoff and room to grow.",
              ],
            ].map(([title, text], index) => (
              <div key={title}>
                <b>0{index + 1}</b>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section shell" id="services">
        <SectionHeading
          title="What I Do"
          subtitle="Practical full-stack development support"
        />
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-number">{service.number}</span>
              <p className="service-eyebrow">{service.eyebrow}</p>
              <h3>{service.title}</h3>
              <p className="service-description">{service.text}</p>
              <ul className="service-checklist">
                {service.checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="service-audience">{service.audience}</p>
              <a className="service-action" href="mailto:hello@chris.dev">
                {service.action}
                <b>→</b>
              </a>
            </article>
          ))}
        </div>
      </section>
      <section className="section shell projects-section" id="projects">
        <SectionHeading
          title="Projects"
          subtitle="Selected full-stack applications built with React and Laravel"
        />
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <button
                className={`project-preview project-preview-${index + 1}`}
                type="button"
                aria-label={`View ${project.title} screenshot`}
                onClick={() => setSelectedProject(project)}
              >
                <img src={project.image} alt={`${project.title} interface`} />
              </button>
              <div className="project-content">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <div className="card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a href="#contact">
                  Discuss a similar project <b>↗</b>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section skills-section" id="skills">
        <div className="shell">
          <SectionHeading
            title="Skills"
            subtitle="Building complete digital experiences across the stack"
          />
        </div>
        <div className="marquee" aria-label="Tools and technologies">
          <div className="marquee-track">
            {[...toolLogos, ...toolLogos].map(([name, logo], index) => (
              <div className="tool-pill" key={`${name}-${index}`}>
                <img src={logo} alt="" />
                {name}
              </div>
            ))}
          </div>
        </div>
        <div className="marquee marquee-reverse" aria-hidden="true">
          <div className="marquee-track">
            {[
              ...toolLogos.slice().reverse(),
              ...toolLogos.slice().reverse(),
            ].map(([name, logo], index) => (
              <div className="tool-pill" key={`${name}-reverse-${index}`}>
                <img src={logo} alt="" />
                {name}
              </div>
            ))}
          </div>
        </div>
        <div className="shell">
          <div className="skills-grid">
            {skills.map(([title, ...items]) => (
              <article className="skill-card" key={title}>
                <h3>{title}</h3>
                <div>
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section shell contact-section" id="contact">
        <SectionHeading
          title="Start a Project"
          subtitle="Reach out directly by phone, email, or social media and let's discuss your next build."
        />
        <div className="contact-grid">
          <article className="contact-card">
            <span className="contact-label">MOBILE / WHATSAPP</span>
            <h3>Let&apos;s talk about your project</h3>
            <p>
              React interfaces, Laravel APIs, MySQL integrations, dashboards,
              and practical business tools.
            </p>
            <a
              href="https://wa.me/639930844787"
              target="_blank"
              rel="noreferrer"
            >
              Message on WhatsApp <b>↗</b>
            </a>
          </article>
          <article className="contact-card">
            <span className="contact-label">EMAIL</span>
            <h3>Send me an inquiry</h3>
            <p>
              Open to junior full-stack opportunities, freelance projects, and
              collaborative product work.
            </p>
            <a href="mailto:torradochris@gmail.com">
              torradochris@gmail.com <b>↗</b>
            </a>
          </article>
        </div>
        <div className="email-panel">
          <div>
            <span className="contact-label">CONNECT WITH CHRIS</span>
            <h3>Find me online.</h3>
            <div className="contact-socials">
              <a
                href="https://www.facebook.com/Torradochris"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/cristututu/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/wctorrado/edit/forms/position/new/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/kurisu29"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <a className="button" href="mailto:torradochris@gmail.com">
            torradochris@gmail.com <span>↗</span>
          </a>
        </div>
      </section>
      {selectedProject && (
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.title} screenshot preview`}
          onClick={() => setSelectedProject(null)}
        >
          <button
            className="lightbox-close"
            type="button"
            aria-label="Close screenshot preview"
            onClick={() => setSelectedProject(null)}
          >
            ×
          </button>
          <img
            src={selectedProject.image}
            alt={`${selectedProject.title} full screenshot`}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
      <footer className="shell">
        © 2026 CHRIS <span>Built with intention.</span>
      </footer>
    </main>
  );
}
function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <header className="section-heading">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </header>
  );
}
export default App;
