import { useEffect, useRef } from 'react';
import '../styles/globals.css';
import { Navbar } from '@/components/navbar';

const AboutPage = () => {
  const blobRef = useRef(null);

  useEffect(() => {
    let angle = 0;
    
    const updateBlob = () => {
      if (blobRef.current) {
        angle += 0.2;
        const rx1 = 60 + Math.sin(angle * 0.1) * 10;
        const ry1 = 40 + Math.sin(angle * 0.2) * 10;
        const rx2 = 30 + Math.sin(angle * 0.3) * 10;
        const ry2 = 70 + Math.sin(angle * 0.4) * 10;
        const borderRadius = `${rx1}% ${100-rx1}% ${rx2}% ${100-rx2}% / ${ry1}% ${ry2}% ${100-ry2}% ${100-ry1}%`;
        
        blobRef.current.style.borderRadius = borderRadius;
      }
      requestAnimationFrame(updateBlob);
    };
    
    updateBlob();
    
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
    
    // Observe all skill items
    document.querySelectorAll('.skill-item').forEach((item) => {
      observer.observe(item);
    });
    
    return () => {
      // Cleanup
      observer.disconnect();
    };
  }, []);

  return (
    <div className="container">
      <header>
        <div className="logo">Portfolio</div>
        <Navbar/>
      </header>
      
      <section className="hero">
        <div className="hero-content">
          <div className="small-text">HELLO THERE, I'M</div>
          <h1>Fahad Asghar<span>.</span></h1>
          <p className="bio">I'm a passionate designer and developer with over 2 years of experience creating digital experiences that users love. I specialize in UI design, Front-End Development(React.js), Back-End Development(Python), and creative problem-solving.</p>
          
          <div className="stats">
            <div className="stat-item" style={{"--i": 1}}>
              <div className="stat-number">2+</div>
              <div className="stat-text">YEARS EXPERIENCE</div>
            </div>
            <div className="stat-item" style={{"--i": 2}}>
              <div className="stat-number">5+</div>
              <div className="stat-text">PROJECTS COMPLETED</div>
            </div>
            <div className="stat-item" style={{"--i": 3}}>
              <div className="stat-number">0+</div>
              <div className="stat-text">HAPPY CLIENTS</div>
            </div>
          </div>
        </div>
        
        <div className="profile-image">
          <div className="profile-blob" ref={blobRef}></div>
          <div className="profile-circle"></div>
          <div className="profile-photo">
            <img src="/api/placeholder/300/300" alt="John Doe" />
          </div>
        </div>
      </section>
      
      <div className="scroll-icon"></div>
      
      <section className="skills">
        <h2 className="section-title">My Expertise</h2>
        
        <div className="skill-grid">
          <div className="skill-item" style={{"--i": 1}}>
            <div className="skill-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="skill-title">Web Design</h3>
            <p className="skill-desc">Creating beautiful, responsive websites with modern UI principles</p>
          </div>
          
          <div className="skill-item" style={{"--i": 2}}>
            <div className="skill-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="skill-title">Development</h3>
            <p className="skill-desc">Building performant applications with modern frameworks and best practices</p>
          </div>
          
          <div className="skill-item" style={{"--i": 3}}>
            <div className="skill-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="skill-title">UI Design</h3>
            <p className="skill-desc">Creating intuitive user experiences through research and iteration</p>
          </div>
          
          <div className="skill-item" style={{"--i": 4}}>
            <div className="skill-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="skill-title">Responsive Design</h3>
            <p className="skill-desc">Ensuring websites work perfectly across all device sizes</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;