import { Navbar } from "@/components/navbar";
import { FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";

type SkillItemProps = {
  icon: JSX.Element;
  title: string;
  descriptions: React.ReactNode[];
};

const SkillItem: React.FC<SkillItemProps> = ({ icon, title, descriptions }) => (
  <div className="skill-item">
    <div className="skill-icon">{icon}</div>
    <h3 className="skill-title">{title}</h3>
    {descriptions.map((desc, index) => (
      <p key={index} className="skill-desc">
        {desc}
      </p>
    ))}
  </div>
);

const Contact: React.FC = () => {
  return (
    <div className="flex bg-[#0f0f1a] flex-col items-center h-full">
      <Navbar />
      <section className="skills">
        <h2 className="section-title">Contact Me</h2>

        <div className="skill-grid">
          <SkillItem
            icon={<FaWhatsapp />}
            title="Whatsapp"
            descriptions={[
              "You Can Contact Me Between: 3:00PM - 9:00PM",
              "+92 3259975406",
            ]}
          />

          <SkillItem
            icon={<FaInstagram />}
            title="Instagram"
            descriptions={["Profile:", "@fahad.asghar_off"]}
          />

          <SkillItem
            icon={<FaPhone />}
            title="Phone"
            descriptions={["Call Me:", "+92 3369240911"]}
          />

          <SkillItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
              </svg>
            }
            title="Websites"
            descriptions={[
              <a
                key="site1"
                href="https://chat.techiefahad.site"
                className="skill-desc"
              >
                https://chat.techiefahad.site
              </a>,
              <a
                key="site2"
                href="https://techiefahad.site"
                className="skill-desc"
              >
                https://techiefahad.site
              </a>,
            ]}
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
