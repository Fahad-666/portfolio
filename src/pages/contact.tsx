import { Navbar } from "@/components/navbar"
import {FaInstagram, FaPhone, FaWhatsapp} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex bg-[#0f0f1a] flex-col items-center h-full">
      <Navbar/>  
      <section className="skills">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="skill-grid">
          <div className="skill-item" style={{"--i": 1}}>
            <div className="skill-icon">
              <FaWhatsapp/>
            </div>
            <h3 className="skill-title">Whatsapp</h3>
            <p className="skill-desc">You Can Contact Me Between: 3:00PM - 9:00PM</p>
            <p className="skill-desc">+92 3259975406</p>
          </div>
          
          <div className="skill-item" style={{"--i": 2}}>
            <div className="skill-icon">
              <FaInstagram/>
            </div>
            <h3 className="skill-title">Instagram</h3>
            <p className="skill-desc">Profile:</p>
            <p className="skill-desc">@fahad.asghar_off</p>
          </div>
          
          <div className="skill-item" style={{"--i": 3}}>
            <div className="skill-icon">
              <FaPhone/>
            </div>
            <h3 className="skill-title">Phone:</h3>
            <p className="skill-desc">Call Me:</p>
            <p className="skill-desc">+92 3369240911</p>
          </div>
          
          <div className="skill-item" style={{"--i": 4}}>
            <div className="skill-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="skill-title">Websites</h3>
            <a href="https://chat.techiefahad.site"><p className="skill-desc">https://chat.techiefahad.site</p></a>
            <a href="https://techiefahad.site"><p className="skill-desc">https://techiefahad.site</p></a>
          </div>
        </div>
      </section>            
    </div>
  )
}

export default Contact