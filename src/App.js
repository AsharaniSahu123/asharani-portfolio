import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">Asharani Sahu</h1>
          <p className="header-subtitle">MCA Student | Full-Stack Developer | Data Science Enthusiast</p>
        </div>
      </header>

      <nav className="navbar" aria-label="Main navigation">
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main>
        <section id="about" className="section about">
          <div className="section-container">
            <h2>About Me</h2>
            <div className="about-container">
              <img 
                src="asha_photo.png" 
                alt="Asharani Sahu" 
                className="about-pic" 
                width="150"
                height="150"
              />
              <div className="about-content">
                <p>
                  Hi, I'm Asharani Sahu, an MCA student at NIST University, with a strong interest in full-stack development and data science.
                  I enjoy creating new solutions and working with others to bring ideas to life. I'm a quick learner with a curious mind and love solving problems using technology.
                </p>
                <p>
                  My experience in machine learning, deep learning, and web development has helped me develop useful technical skills and creative thinking.
                  I aim to build efficient and scalable solutions while always learning and improving.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section education">
          <div className="section-container">
            <h2>Education</h2>
            <div className="card">
              <ul className="education-list">
                <li><strong>MCA:</strong> NIST University (CGPA: 9.28)</li>
                <li><strong>BCA:</strong> Academy of Technocrats (84.65%)</li>
                <li><strong>Intermediate:</strong> Mahamayee Mahila Mahavidyalaya (55.83%)</li>
                <li><strong>Matriculation:</strong> U.G. High School, Govindnagar (60.16%)</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="experience" className="section experience">
          <div className="section-container">
            <h2>Experience</h2>
            <div className="card">
              <ul className="experience-list">
                <li>
                  <strong>Project Coordinator</strong> - Rajiv Memorial Institute of Technology (RMIT)<br />
                  Guided 15 BCA student projects successfully.
                </li>
                <li>
                  <strong>Summer Internship</strong> - Data Science using ML and DL<br />
                  Worked on data analysis, machine learning, and deep learning techniques.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-container">
            <h2>Projects</h2>
            <div className="projects-grid">
              <article className="project-card">
                <h3>Women SafeLine Surveillance</h3>
                <div className="project-content">
                  <ul className="project-features">
                    <li><strong>Person Detection & Gender Classification:</strong> Using the YOLOv4 algorithm, the system detects persons in the video feed and classifies their gender.</li>
                    <li><strong>Gender Distribution:</strong> The system counts and tracks the number of men and women present in the scene.</li>
                    <li><strong>Weapon Detection:</strong> Identifies weapons in the video feed and triggers an alert if any weapon is detected.</li>
                    <li><strong>Alert Message Generation:</strong> Generates alerts based on gender ratios or weapon detection, sent via MQTT protocol.</li>
                    <li><strong>Real-Time Monitoring:</strong> Processes live video using YOLOv4 for immediate alerts.</li>
                  </ul>
                  <p className="project-summary">
                    An AI-powered real-time monitoring system designed to enhance women's safety in public spaces. 
                    Integrates computer vision, IoT, and deep learning technologies.
                  </p>
                </div>
              </article>

              <article className="project-card">
                <h3>e-Learning Website</h3>
                <div className="project-content">
                  <ul className="project-features">
                    <li><strong>Student Enrollment:</strong> Students can browse and enroll in various subjects.</li>
                    <li><strong>PDF Downloads:</strong> Provides downloadable PDF materials for offline access.</li>
                    <li><strong>User Management:</strong> Secure login with role-based access control.</li>
                    <li><strong>Assessments:</strong> Integrated quizzes with grading system.</li>
                    <li><strong>Database Integration:</strong> MySQL backend for data management.</li>
                  </ul>
                  <p className="project-summary">
                    A comprehensive e-learning platform with course management, materials distribution, 
                    and assessment features.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills">
          <div className="section-container">
            <h2>Skills</h2>
            <div className="card">
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Languages</h4>
                  <ul>
                    <li>C</li>
                    <li>C++</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Frameworks</h4>
                  <ul>
                    <li>HTML/CSS</li>
                    <li>React</li>
                    <li>Node.js</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Tools</h4>
                  <ul>
                    <li>Git</li>
                    <li>Google Colab</li>
                    <li>Visual Studio Code</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Technologies</h4>
                  <ul>
                    <li>Machine Learning</li>
                    <li>Deep Learning</li>
                    <li>YOLOv8</li>
                    <li>Data Science</li>
                    <li>IoT</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
        <h2>Contact</h2>
        <div className="card">
          <p><strong>Email:</strong> <a href="mailto:asharanisahu720@gmail.com">asharanisahu720@gmail.com</a></p>
          <p><strong>GitHub: </strong><a href="https://github.com/AsharaniSahu123" target="_blank" rel="noopener noreferrer">github.com/AsharaniSahu123</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/asharani-sahu-7bb65a259" target="_blank" rel="noopener noreferrer">linkedin.com/in/asharani-sahu-7bb65a259</a></p>
        </div>
      </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Asharani Sahu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;