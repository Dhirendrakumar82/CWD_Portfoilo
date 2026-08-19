import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = [
    "Hi I'm Dhirendra Kumar",
    "Python Full Stack Developer",
    "Problem Solver",
    "Continuous Learner",
  ];

  useEffect(() => {
    const currentWord = words[wordIndex];
    const speed = isDeleting ? 140 : 200;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length + 1 === currentWord.length) {
          setIsDeleting(true);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, !isDeleting && text.length === currentWord.length ? 3000 : speed);

    return () => clearTimeout(timer);
  }, [text, wordIndex, isDeleting]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="navbar">
        <a href="#" className="logo">
          <img src="/assets/img/logo.png" alt="logo" />
        </a>

        <nav>
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>about</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>skills</a></li>
            <li><a href="notes.html" target="_blank" rel="noreferrer">notes</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>projects</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>contact</a></li>
          </ul>
        </nav>

        <div className="menu-btn" onClick={() => setMenuOpen((prev) => !prev)}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="reveal">
              <div className="badge">
                <span></span>
                AVAILABLE FOR OPPORTUNITIES
              </div>

              <div className="container-typing">
                <h1 className="static-text">
                  <span className="typed-text">{text}</span>
                  <span className="cursor">|</span>
                </h1>
              </div>

              <h2>
                <span className="hero-im">I'm </span> 
                <strong className="hero-name">Dhirendra Kumar</strong> — 
                <span className="hero-role">Full Stack Developer</span>
              </h2>

              <p className="hero-description">
                I build scalable web applications, secure REST APIs, and modern
                digital experiences with Python, databases, JavaScript, and a
                security-first mindset.
              </p>

              <div className="buttons">
                <a href="#projects" className="btn btn-primary">
                  <i className="fa-solid fa-rocket"></i> View My Projects
                </a>
                <a href="#contact" className="btn btn-secondary">
                  <i className="fa-regular fa-paper-plane"></i> Let's Connect
                </a>
              </div>
            </div>

            <div className="hero-visual reveal">
              <div className="visual-glow"></div>
              <div className="image-frame">
                <img src="/assets/img/hero-developer1.png" alt="Python Full Stack Developer" />
              </div>
              <div className="floating-tech tech-python">
                <i className="fa-brands fa-python"></i>
              </div>
              <div className="floating-tech tech-code">&lt;/&gt;</div>
              <div className="floating-tech tech-api">API</div>
            </div>
          </div>

          <div className="stats reveal">
            <div className="stat"><h3>∞</h3><p>Learning Mindset</p></div>
            <div className="stat"><h3>24/7</h3><p>Problem Solving</p></div>
            <div className="stat"><h3>100%</h3><p>Passion for Code</p></div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="label">01 / ABOUT</div>
          <h2 className="title">My <span>Dhirendra Kumar.</span></h2>

          <div className="about-grid">
            <div className="about-text reveal">
              <p>I'm a <strong>MCA Student</strong> and aspiring Python Full Stack Developer passionate about creating scalable and secure digital solutions.</p>
              <br />
              <p>I enjoy working with backend architecture, REST APIs, authentication systems, databases, responsive frontend interfaces</p>
              <br />
              <p>My goal is to keep learning, build real-world projects, and contribute to products that solve meaningful problems.</p>
            </div>

            <div className="command-box reveal">
              <div className="command"><span>aasif@dev:~$</span> whoami</div>
              <div className="output">
                Python Full Stack Developer<br />
                MCA Student<br />
                
                Problem Solver<br />
                Continuous Learner
              </div>
              <br />
              <div className="command"><span>aasif@dev:~$</span> status</div>
              <div className="output">Open to exciting opportunities 🚀</div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <div className="label">02 / CAPABILITIES</div>
          <h2 className="title">My <span>Tech Stack.</span></h2>

          <div className="skills">
            <SkillCard icon="fa-solid fa-server" title="Backend & APIs" skills={["Python","FastAPI","Django","DRF","REST APIs","JWT"]} />
            <SkillCard icon="fa-solid fa-database" title="Databases" skills={["MySQL","PostgreSQL","SQLite","SQLAlchemy","Django ORM"]} />
            <SkillCard icon="fa-solid fa-code" title="Frontend & Tools" skills={["HTML","CSS","JavaScript","Bootstrap","React.js","Git","Linux"]} />
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <div className="label">03 / SELECTED WORK</div>
          <h2 className="title">Things I've <span>Built.</span></h2>

          <div className="projects">
            <Project title="Secure SaaS Auth & Billing API" description="High-performance REST API with JWT authentication, role-based access control, rate limiting, and secure backend architecture." tech={["Python","FastAPI","PostgreSQL","Docker"]} />
            <Project title="Full-Stack Management Platform" description="Scalable web application with relational database architecture, optimized queries, and interactive dashboard tracking." tech={["Django","MySQL","JavaScript","Bootstrap"]} />
            <Project title="Food Ordering Web Application" description="Full-stack food ordering web application with user authentication, cart management, CRUD operations, and REST APIs for efficient order processing." tech={["Python", "Django", "MySQL", "HTML", "CSS", "JavaScript"]}/>
           <Project title="Employee Management System" description="Developed a secure employee management platform with user authentication, role-based access control, employee CRUD operations, and MySQL database management."tech={["Python", "Django", "MySQL", "HTML", "CSS", "JavaScript"]}/>
            <Project title="Face Recognition Attendance System"description="Developed an AI-powered attendance system using Python and OpenCV for real-time face recognition, automated attendance tracking, database management, and Excel-based attendance reporting."tech={["Python", "OpenCV", "MySQL", "Excel"]}/>
            <Project title="News Risk Analysis System"description="Developed a Django-based news analysis platform to process, analyze, and categorize news articles, with database integration for efficient storage and retrieval of news data."tech={["Python", "Django", "SQL", "HTML", "CSS", "JavaScript"]}/>
            <Project title="More Projects Coming Soon" description="Build. Learn. Improve. Repeat." tech={["Build","Learn","Impact"]} />
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="contact-box reveal">
            <div className="label">04 / CONTACT</div>
            <h2>Let's build something <span>great.</span></h2>
            <p>I'm open to backend and full-stack development opportunities, internships, collaborations, and exciting projects.</p>

            <a href="mailto:dhirendrak2348@gmail.com" className="email">dhirendrak2348@gmail.com</a>
            <br />
            <a href="mailto:dhirendrak2348@gmail.com" className="btn btn-primary">
              <i className="fa-solid fa-paper-plane"></i> Start a Conversation
            </a>

            <div className="social">
              <a href="https://github.com/Dhirendrakumar82" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
              <a href="https://www.linkedin.com/in/dhirendra-kumar-7987b735a " target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dhirendrak2348@gmail.com" target="_blank" rel="noreferrer"><i className="fa-solid fa-envelope"></i></a>
            </div>
          </div>
        </div>
      </section>

      <footer>© {new Date().getFullYear()} Code With Dhirendra — Built with code, creativity & consistency.</footer>
    </>
  );
}

function SkillCard({ icon, title, skills }) {
  return (
    <div className="skill-card reveal">
      <div className="skill-icon"><i className={icon}></i></div>
      <h3>{title}</h3>
      <div className="skill-list">
        {skills.map((skill) => <span key={skill}>{skill}</span>)}
      </div>
    </div>
  );
}

function Project({ title, description, tech }) {
  return (
    <div className="project reveal">
      <div className="project-top">
        <i className="fa-regular fa-folder project-icon"></i>
        <div className="project-links">
          <a href="#" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
          <a href="#" aria-label="Open project"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tech">
        {tech.map((item) => <span key={item}>{item}</span>)}
      </div>
    </div>
  );
}

export default App;
