'use client';

import { useState, useEffect } from 'react';
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Honeypot field
  });

  const [contactNotes, setContactNotes] = useState([
    { id: 1, text: 'Got a question?', style: {} },
    { id: 2, text: 'Want to team up? (I\'m picky)', style: {} },
    { id: 3, text: 'Just say hi! (Heads up, I\'m shy)', style: {} },
  ]);

  useEffect(() => {
    setContactNotes(contactNotes.map(note => ({
      ...note,
      style: {
        transform: `rotate(${Math.random() * 20 - 10}deg)`,
        backgroundColor: `hsl(${Math.random() * 360}, 70%, 80%)`,
      },
    })));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check honeypot field
    if (formData.honeypot) {
      console.log('Bot detected!');
      alert('Submission blocked: Spam detected.');
      return;
    }

    // Process form submission (e.g., send to an API endpoint)
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');
    setFormData({
      email: '',
      subject: '',
      message: '',
      honeypot: '',
    });
  };

  return (
    <main className="contact-page">
      <div className="contact-container">
        <div className="contact-notecard">
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            {/* Honeypot field */}
            <div className="form-group honeypot-field">
              <label htmlFor="honeypot">Leave this field empty:</label>
              <input
                type="text"
                id="honeypot"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
        {contactNotes.map((note, index) => (
          <div key={note.id} className={`contact-sticky-note contact-sticky-note-${index + 1}`} style={note.style}>
            <p>{note.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
