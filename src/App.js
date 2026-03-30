import "./App.css";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import {
  Mail,
  Phone,
  Link2,
  ExternalLink,
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  Code,
  Wrench,
  Library,
  ChevronRight,
  Menu,
  X,
  Sun,
  Moon,
  Send,
  Award,
  Users,
  Cpu,
  FolderGit2,
} from "lucide-react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobileMenuOpen && !e.target.closest(".nav-container")) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Paycom",
      location: "Dallas, TX",
      date: "May 2025 – Aug. 2025",
      description: [
        "Engineered a challenge-based gamification platform supporting 10+ challenge types deployed to enhance internal learning engagement by 18%.",
        "Designed and deployed real-time leaderboards and recognition systems serving over 20,000 active users allowing live updates for learning module progress.",
        "Led a cross-functional team to win 1st place in a company-wide hackathon from over 10 teams developing a full-stack challenge assignment system using React, .NET, and SQL within a 48-hour development window.",
      ],
      skills: ["React", ".NET", "SQL", "Gamification", "Leaderboards"],
    },
    {
      title: "Software Engineer Intern",
      company: "Paycom",
      location: "Dallas, TX",
      date: "May 2024 – Aug. 2024",
      description: [
        "Built a candidate re-engagement platform enabling 5+ technical recruiters to reconnect with 10,000+ previous applicants filtered by 8+ different identifying candidate metrics.",
        "Implemented email analytics tracking through invisible pixels and secure tokenized links, improving insight accuracy through thousands of internal and external emails.",
        "Won 1st place in Paycom Hackathon from over 10 teams delivering a scalable frontend infrastructure for an internal project placement app (React, TypeScript, C#, SQL Server) within a 48-hour development window.",
      ],
      skills: ["React", "TypeScript", "C#", "SQL Server", "Email Analytics"],
    },
    {
      title: "Certified Clinical Medical Assistant",
      company: "Qurom Partners (Formerly Cardium, LLC)",
      location: "The Woodlands, TX",
      date: "Aug. 2021 – May 2022",
      description: [
        "Oversaw care for 100+ patients using remote health monitoring software across 5+ Houston hospitals.",
        "Collaborated with multidisciplinary care teams to monitor and interpret patient vitals in real time.",
        "Led the deployment and syncing of 240+ 4G-connected medical devices, resolving connectivity and data-sync issues to ensure reliable real-time diagnostic data for continuous patient monitoring.",
      ],
      skills: ["Healthcare Tech", "Remote Monitoring", "Team Leadership", "Medical Devices"],
    },
  ];

  const projects = [
    {
      title: "jarnff.com",
      tech: "Python, Flask, REST APIs",
      date: "Aug. 2025 – Present",
      description: [
        "Built a full-stack Python/Flask app generating fantasy football projections from real-time NFL betting odds.",
        "Engineered statistical estimation models to infer missing player metrics from incomplete prop data.",
        "Designed a JSON-based caching architecture with Sleeper API integration to reduce API costs.",
      ],
      link: "https://jarnff.com",
    },
    {
      title: "Student Volunteer Platform",
      tech: "React Native, Backend APIs",
      date: "Jan. 2026 – Present",
      description: [
        "Developing a city-sponsored mobile platform connecting students to volunteer opportunities in real time.",
        "Implemented backend APIs for volunteer matching, service-hour verification, and notification delivery.",
        "Collaborated with a cross-functional team to translate municipal requirements into scalable application features.",
      ],
    },
    {
      title: "BJJFlowmap",
      tech: "React, TypeScript, Node.js",
      date: "Aug. 2023 – May 2024",
      description: [
        "Built a full-stack web application visualizing 100+ jiu-jitsu positions using an interactive graph interface.",
        "Implemented user profiles to track technical progression with clean state management.",
        "Designed data models to support future integration of competition-based move recommendations.",
      ],
      link: "https://github.com/jarn180",
    },
  ];

  const skills = {
    languages: ["Python", "C++", "JavaScript", "HTML/CSS", "C#", "MySQL/SQL", "React", "TypeScript"],
    tools: ["Git/GitHub", "VS Code", "Visual Studio", "Spyder", "Jupyter Notebook", "MongoDB", "Streamlit"],
    libraries: ["pandas", "NumPy", "Matplotlib", "Requests", "BeautifulSoup", "PyMongo", "Pygame", "Turtle Graphics"],
  };

  const navItems = ["Home", "About", "Experience", "Projects", "Skills", "Contact"];

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      {/* Decorative vertical lines - Owner's Manual style */}
      <div className="manual-lines">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
        <div className="line line-4"></div>
        <div className="line line-5"></div>
      </div>

      {/* Scroll progress indicator */}
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <motion.h1
            className="nav-logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="logo-year">2026</span>
            <span className="logo-name">Owner's<br/>Manual</span>
          </motion.h1>

          <ul className={`nav-menu ${isMobileMenuOpen ? "nav-menu-open" : ""}`}>
            {navItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className={activeSection === item.toLowerCase() ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.toLowerCase());
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>

          <div className="nav-actions">
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <motion.button
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="hero-badge" variants={fadeInUp}>
              <span className="badge-text">JARREN TOBIAS</span>
            </motion.div>
            <motion.h1 variants={fadeInUp}>
              Software<br />Engineer
            </motion.h1>
            <motion.p className="hero-subtitle" variants={fadeInUp}>
              For your safety and comfort, read carefully and keep in this vehicle.
            </motion.p>
            <motion.p className="hero-description" variants={fadeInUp}>
              Texas A&M University • Computer Science • Cybersecurity Minor
            </motion.p>
            <motion.div className="hero-buttons" variants={fadeInUp}>
              <motion.a
                href="#experience"
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("experience");
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Briefcase size={18} />
                View Experience
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={18} />
                Contact
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="manual-cover">
              <div className="cover-lines">
                <span></span><span></span><span></span><span></span><span></span>
              </div>
              <div className="cover-content">
                <div className="cover-logo">JT</div>
                <div className="cover-title">Portfolio</div>
                <div className="cover-year">2026</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span>Scroll</span>
          <ChevronRight className="rotate-90" size={20} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-number">01</span>
            <h2>About</h2>
          </motion.div>

          <div className="about-content">
            <motion.div
              className="about-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.p variants={fadeInUp}>
                I'm a Computer Science student at Texas A&M University with a Minor in Cybersecurity,
                graduating May 2026. I've completed two internships at Paycom as a Software Engineer,
                where I won 1st place in company-wide hackathons both years.
              </motion.p>
              <motion.p variants={fadeInUp}>
                My experience spans full-stack development with React, .NET, and SQL, building
                platforms that serve 20,000+ users. I'm passionate about creating efficient
                applications, from fantasy football projection tools to volunteer coordination platforms.
              </motion.p>
            </motion.div>

            <motion.div
              className="about-stats"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div className="stat-card" variants={slideIn}>
                <GraduationCap size={24} />
                <div className="stat-info">
                  <span className="stat-number">2026</span>
                  <span className="stat-label">Graduation</span>
                </div>
              </motion.div>
              <motion.div className="stat-card" variants={slideIn}>
                <Award size={24} />
                <div className="stat-info">
                  <span className="stat-number">2x</span>
                  <span className="stat-label">Hackathon Winner</span>
                </div>
              </motion.div>
              <motion.div className="stat-card" variants={slideIn}>
                <Users size={24} />
                <div className="stat-info">
                  <span className="stat-number">20K+</span>
                  <span className="stat-label">Users Served</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="organizations"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3>Organizations</h3>
            <div className="org-list">
              <span>Aggie Coding Club</span>
              <span>Texas A&M Computing Society</span>
              <span>Society of Asian Scientists and Engineers</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-number">02</span>
            <h2>Experience</h2>
          </motion.div>

          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="experience-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="exp-marker">
                  <div className="marker-dot"></div>
                  <div className="marker-line"></div>
                </div>
                <div className="exp-content">
                  <div className="exp-header">
                    <h3>{exp.title}</h3>
                    <div className="exp-meta">
                      <span className="exp-company">
                        <Briefcase size={14} />
                        {exp.company}
                      </span>
                      <span className="exp-location">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                      <span className="exp-date">
                        <Calendar size={14} />
                        {exp.date}
                      </span>
                    </div>
                  </div>
                  <ul className="exp-description">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="exp-skills">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-number">03</span>
            <h2>Projects</h2>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="project-header">
                  <div className="project-icon">
                    <Code size={24} />
                  </div>
                  <div className="project-links">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <h3>{project.title}</h3>
                <span className="project-tech">{project.tech}</span>
                <span className="project-date">{project.date}</span>
                <ul className="project-description">
                  {project.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-number">04</span>
            <h2>Technical Skills</h2>
          </motion.div>

          <div className="skills-grid">
            <motion.div
              className="skill-category"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="category-header">
                <Cpu size={20} />
                <h3>Languages</h3>
              </div>
              <div className="skill-tags">
                {skills.languages.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="skill-tag"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="skill-category"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <div className="category-header">
                <Wrench size={20} />
                <h3>Developer Tools</h3>
              </div>
              <div className="skill-tags">
                {skills.tools.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="skill-tag"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="skill-category"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <div className="category-header">
                <Library size={20} />
                <h3>Libraries</h3>
              </div>
              <div className="skill-tags">
                {skills.libraries.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="skill-tag"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-number">05</span>
            <h2>Contact</h2>
          </motion.div>

          <div className="contact-content">
            <motion.div
              className="contact-info"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.p className="contact-intro" variants={fadeInUp}>
                I'm always open to discussing new opportunities and interesting projects.
              </motion.p>

              <motion.a
                href="mailto:jarren.tobias@tamu.edu"
                className="contact-item"
                variants={slideIn}
                whileHover={{ x: 10 }}
              >
                <Mail size={20} />
                <span>jarren.tobias@tamu.edu</span>
              </motion.a>

              <motion.a
                href="tel:281-323-8423"
                className="contact-item"
                variants={slideIn}
                whileHover={{ x: 10 }}
              >
                <Phone size={20} />
                <span>281-323-8423</span>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/jarrentobias"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
                variants={slideIn}
                whileHover={{ x: 10 }}
              >
                <Link2 size={20} />
                <span>linkedin.com/in/jarrentobias</span>
              </motion.a>

              <motion.a
                href="https://github.com/jarn180"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
                variants={slideIn}
                whileHover={{ x: 10 }}
              >
                <FolderGit2 size={20} />
                <span>github.com/jarn180</span>
              </motion.a>
            </motion.div>

            <motion.form
              className="contact-form"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Your message" rows="5" required></textarea>
              </div>
              <motion.button
                type="submit"
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2026 Jarren Tobias. All rights reserved.</p>
            <div className="footer-links">
              <a href="https://github.com/jarn180" aria-label="GitHub">
                <FolderGit2 size={20} />
              </a>
              <a href="https://linkedin.com/in/jarrentobias" aria-label="LinkedIn">
                <Link2 size={20} />
              </a>
              <a href="mailto:jarren.tobias@tamu.edu" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <p className="footer-tagline">For your safety and comfort, read carefully.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
