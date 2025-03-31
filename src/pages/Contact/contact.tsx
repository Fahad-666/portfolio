import Navbar from "@/components/Navbar/Navbar";
import "./contact.css";
import { Button } from "@heroui/react";
import { useState } from "react";
import { IoMailOutline, IoCallOutline, IoLocationOutline } from "react-icons/io5";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-container">
      <Navbar />
      
      <div className="contact-box">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">Let's start working on another interesting project!</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <IoMailOutline className="contact-icon" />
              <p>itfahad102@gmail.com</p>
            </div>
            <div className="contact-item">
              <IoCallOutline className="contact-icon" />
              <p>+92 325 9975406</p>
            </div>
            <div className="contact-item">
              <IoLocationOutline className="contact-icon" />
              <p>Wah, Punjab, Pakistan</p>
            </div>
          </div>

          <form className="contact-form">
            <div className="input-group">
              <input type="text" name="name" required onChange={handleChange} value={form.name} />
              <label>Name</label>
            </div>

            <div className="input-group">
              <input type="email" name="email" required onChange={handleChange} value={form.email} />
              <label>Email</label>
            </div>

            <div className="input-group">
              <textarea name="message" required onChange={handleChange} value={form.message}></textarea>
              <label>Message</label>
            </div>

            <Button variant="solid" color="primary" className="submit-button">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
