// SkillsPage.tsx
import React, { useEffect } from 'react';
import '../styles/globals.css';
import { Navbar } from '@/components/navbar';

// Define types for our skill data
interface TechnicalSkill {
  name: string;
  percentage: number;
}

interface SoftSkill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  icon: string;
}

interface Tool {
  name: string;
  level: number;
}

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

const SkillsPage: React.FC = () => {
  useEffect(() => {
    // Setup intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.1
    });
    
    // Observe all skill bars, cards and other animated elements
    document.querySelectorAll('.skill-bar, .skill-card, .skill-category-title, .experience-item').forEach((item) => {
      observer.observe(item);
    });
    
    return () => {
      // Cleanup
      observer.disconnect();
    };
  }, []);

  // Skill data
  const technicalSkills: TechnicalSkill[] = [
    { name: "HTML/CSS", percentage: 92 },
    { name: "JavaScript", percentage: 88 },
    { name: "React", percentage: 85 },
    { name: "TypeScript", percentage: 82 },
    { name: "Node.js", percentage: 40 },
    { name: "UI/UX Design", percentage: 90 }
  ];

  const softSkills: SoftSkill[] = [
    { name: "Problem Solving", level: "Intermediate", icon: "💡" },
    { name: "Communication", level: "Expert", icon: "💬" },
    { name: "Teamwork", level: "Advanced", icon: "👥" },
    { name: "Time Management", level: "Intermediate", icon: "⏱️" },
    { name: "Adaptability", level: "Expert", icon: "🔄" },
    { name: "Creativity", level: "Intermediate", icon: "🎨" }
  ];

  const tools: Tool[] = [
    { name: "Figma", level: 90 },
    { name: "VS Code", level: 95 },
    { name: "Git/GitHub", level: 90 },
  ];

  const experience: ExperienceItem[] = [
    {
      title: "Full Stack Developer",
      company: "Startien",
      period: "2024 - Present",
      description: "I have been working a full stack developer in an organization. Project was to make a shopping app where buyers connect with sellers."
    }
  ];

  return (
    <div className="skills-container">
      <header>
        <div className="logo">Portfolio</div>
        <Navbar/>
      </header>

      <section className="skills-hero">
        <div className="glowing-circle"></div>
        <h1>My <span>Skills</span></h1>
        <p className="skills-subtitle">Expertise & Experience</p>
      </section>

      <section className="skills-content">
        <div className="skills-section">
          <h2 className="skill-category-title">Technical Skills</h2>
          <div className="technical-skills">
            {technicalSkills.map((skill, index) => (
              <div className="skill-bar-container" key={index}>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h2 className="skill-category-title">Soft Skills</h2>
          <div className="soft-skills">
            {softSkills.map((skill, index) => (
              <div className="skill-card" key={index} style={{"--i": index} as React.CSSProperties}>
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.name}</h3>
                <span className={`skill-level ${skill.level.toLowerCase()}`}>{skill.level}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h2 className="skill-category-title">Tools & Software</h2>
          <div className="tools-skills">
            {tools.map((tool, index) => (
              <div className="tool-item" key={index}>
                <span className="tool-name">{tool.name}</span>
                <div className="tool-level-container">
                  <div className="tool-level" style={{ width: `${tool.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h2 className="skill-category-title">Work Experience</h2>
          <div className="experience-timeline">
            {experience.map((exp, index) => (
              <div className="experience-item" key={index}>
                <div className="experience-dot"></div>
                <div className="experience-content">
                  <h3>{exp.title}</h3>
                  <div className="experience-details">
                    <span className="company">{exp.company}</span>
                    <span className="period">{exp.period}</span>
                  </div>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;