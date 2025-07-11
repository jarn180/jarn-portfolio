import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const createShockwave = (e) => {
      const shockwave = document.createElement("div");
      shockwave.className = "click-shockwave";
      shockwave.style.left = e.clientX - 10 + "px";
      shockwave.style.top = e.clientY - 10 + "px";
      document.body.appendChild(shockwave);

      setTimeout(() => {
        document.body.removeChild(shockwave);
      }, 600);

      const target = e.target.closest(
        "button, a, .project-card, .skill-tags span"
      );
      if (target) {
        target.classList.add("punch-effect");
        setTimeout(() => {
          target.classList.remove("punch-effect");
        }, 300);
      }
    };

    document.addEventListener("click", createShockwave);
    return () => document.removeEventListener("click", createShockwave);
  }, []);

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
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.style.background = darkMode
          ? "rgba(30, 41, 59, 0.98)"
          : "rgba(255, 255, 255, 0.98)";
        navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
      } else {
        navbar.style.background = darkMode
          ? "rgba(30, 41, 59, 0.95)"
          : "rgba(255, 255, 255, 0.95)";
        navbar.style.boxShadow = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [darkMode]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="nav-logo">Jarren Tobias</h1>
          <ul className={`nav-menu ${isMobileMenuOpen ? "nav-menu-open" : ""}`}>
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                  setIsMobileMenuOpen(false);
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                  setIsMobileMenuOpen(false);
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("experience");
                  setIsMobileMenuOpen(false);
                }}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                  setIsMobileMenuOpen(false);
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("skills");
                  setIsMobileMenuOpen(false);
                }}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                  setIsMobileMenuOpen(false);
                }}
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="nav-actions">
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <span
                className={`hamburger ${
                  isMobileMenuOpen ? "hamburger-open" : ""
                }`}
              >
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
            <button
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Jarren Tobias</h1>
          <h2>Computer Science Student & Software Engineer</h2>
          <p>
            Texas A&M University student passionate about full-stack
            development, data analytics, and creating innovative solutions
          </p>
          <div className="hero-buttons">
            <a
              href="#experience"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("experience");
              }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-circle"></div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a Computer Science student at Texas A&M University with
                hands-on experience in professional full-stack development, data
                analytics, and software engineering. I've worked as a Software
                Developer Intern at Paycom, where I developed candidate outreach
                platforms and won first place in a company-wide hackathon.
              </p>
              <p>
                I'm passionate about creating efficient web applications, data
                scraping solutions, and interactive platforms. When I'm not
                coding, you can find me lifting, fighting, or working on passion
                fueled tech projects.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>2026</h3>
                <p>Expected Graduation</p>
              </div>
              <div className="stat">
                <h3>3+</h3>
                <p>Major Projects</p>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <p>Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience">
        <div className="container">
          <h2>Work Experience</h2>
          <div className="experience-grid">
            <div className="experience-card">
              <div className="experience-header">
                <h3>Software Engineer Intern</h3>
                <div className="experience-company">Paycom • Dallas, TX</div>
                <div className="experience-date">Summer 2025 (Current)</div>
              </div>
              <div className="experience-content">
                <p>
                  Developing a full-stack Learning Management System (LMS) with
                  gamification features to enhance employee training engagement.
                  Building interactive components, progress tracking systems,
                  and achievement mechanics using modern web technologies.
                </p>
                <div className="experience-skills">
                  <span>Full-Stack Development</span>
                  <span>LMS Development</span>
                  <span>Gamification</span>
                  <span>UI/UX Design</span>
                </div>
              </div>
            </div>

            <div className="experience-card">
              <div className="experience-header">
                <h3>Software Engineer Intern</h3>
                <div className="experience-company">Paycom • Dallas, TX</div>
                <div className="experience-date">May 2024 – Aug. 2024</div>
              </div>
              <div className="experience-content">
                <p>
                  Developed a candidate outreach platform enabling recruiting
                  teams to re-engage with previous applicants for future
                  opportunities. Enabled the tracking of analytics of emails
                  sent through invisible pixels and tokenized tracking links.
                  Earned first place in a company-wide hackathon, developing and
                  presenting a robust frontend infrastructure on a project
                  placement application.
                </p>
                <div className="experience-skills">
                  <span>Frontend Development</span>
                  <span>Email Analytics</span>
                  <span>Hackathon Winner</span>
                  <span>Recruiting Platform</span>
                </div>
              </div>
            </div>

            <div className="experience-card">
              <div className="experience-header">
                <h3>Certified Clinical Medical Assistant</h3>
                <div className="experience-company">
                  Qurom Partners (Formerly Cardium, LLC) • The Woodlands, TX
                </div>
                <div className="experience-date">Aug. 2021 – May 2022</div>
              </div>
              <div className="experience-content">
                <p>
                  Managed the care of 100+ patients with remote patient
                  monitoring software. Collaborated with other interns to
                  monitor vitals of numerous hospitals in entire Greater Houston
                  area. Led the management and syncing of 4G cellular health
                  equipment for patient use.
                </p>
                <div className="experience-skills">
                  <span>Remote Patient Monitoring</span>
                  <span>Healthcare Technology</span>
                  <span>Team Leadership</span>
                  <span>Medical Equipment</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image"></div>
              <div className="project-content">
                <h3>BJJFlowmap</h3>
                <p>
                  An interactive flow map for Brazilian Jiu-Jitsu positions,
                  submissions, and moves with user-based tracking
                </p>
                <div className="project-tech">
                  <span>JavaScript</span>
                  <span>HTML/CSS</span>
                  <span>Interactive Design</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">
                    Live Demo
                  </a>
                  <a href="https://github.com/jarn180" className="project-link">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image"></div>
              <div className="project-content">
                <h3>Web Scraper Application</h3>
                <p>
                  Full-stack web scraping application with real-time SMS, email,
                  and push notifications
                </p>
                <div className="project-tech">
                  <span>Python</span>
                  <span>Selenium</span>
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>MySQL</span>
                  <span>AWS</span>
                  <span>Twilio</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">
                    Live Demo
                  </a>
                  <a href="https://github.com/jarn180" className="project-link">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image"></div>
              <div className="project-content">
                <h3>BJJ Heroes/BJJ Fanatics Data</h3>
                <p>
                  Python program for scraping BJJ competition statistics and
                  daily instructional sales with database storage
                </p>
                <div className="project-tech">
                  <span>Python</span>
                  <span>MongoDB</span>
                  <span>Streamlit</span>
                  <span>Requests</span>
                  <span>BeautifulSoup</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">
                    Live Demo
                  </a>
                  <a href="https://github.com/jarn180" className="project-link">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skill-tags">
                <span>Python</span>
                <span>C++</span>
                <span>JavaScript</span>
                <span>HTML/CSS</span>
                <span>C#</span>
                <span>SQL/MySQL</span>
                <span>React</span>
                <span>TypeScript</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Developer Tools</h3>
              <div className="skill-tags">
                <span>Git/GitHub</span>
                <span>VS Code</span>
                <span>Visual Studio</span>
                <span>Jupyter Notebook</span>
                <span>MongoDB</span>
                <span>Streamlit</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Libraries & Frameworks</h3>
              <div className="skill-tags">
                <span>pandas</span>
                <span>NumPy</span>
                <span>Matplotlib</span>
                <span>Requests</span>
                <span>BeautifulSoup</span>
                <span>PyMongo</span>
                <span>Selenium</span>
                <span>Twilio</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>
            I'm always open to discussing new opportunities and interesting
            projects.
          </p>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <h4>Email</h4>
                <p>jarren.tobias@tamu.edu</p>
              </div>
              <div className="contact-item">
                <h4>Phone</h4>
                <p>281-323-8423</p>
              </div>
              <div className="contact-item">
                <h4>LinkedIn</h4>
                <p>linkedin.com/in/jarrentobias</p>
              </div>
              <div className="contact-item">
                <h4>GitHub</h4>
                <p>github.com/jarn180</p>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Jarren Tobias. All rights reserved.</p>
          <div className="social-links">
            <a href="https://github.com/jarn180" aria-label="GitHub">
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jarrentobias"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a href="mailto:jarren.tobias@tamu.edu" aria-label="Email">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
