'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import styles from "./page.module.css";
import "./home.css";

export default function Home() {
  const [featuredProjects, setFeaturedProjects] = useState([
    {
      id: 1,
      route: '/projects/mango',
      title: 'MangoTree ERP',
      description: "ERP idea where I can attach any apps/services to a central app. Full Modularity, tech stack agnostic, and potentially disruptive.",
      style: {},
    },
    {
      id: 2,
      route: '/projects/peacewalk',
      title: 'PeaceWalk',
      description: 'My first iOS app and first published game! Pretty peaceful, I think.',
      style: {},
    },
    {
      id: 3,
      route: '/projects/catchef',
      title: 'CatChef',
      description: 'My 2nd iOS app and first published game! Pretty peaceful, I think.',
      style: {},
    },
  ]);

  useEffect(() => {
    setFeaturedProjects(featuredProjects.map(note => ({
      ...note,
      style: {
		marginTop: "10px",
		padding: "10px",
        transform: `rotate(${Math.random() * 10 - 5}deg)`,
        backgroundColor: `hsl(${Math.random() * 360}, 70%, 80%)`,
      },
    })));
  }, []);

  return (
    <main>
      <section className="hero-section">
        <h1>Welcome to Justin&apos;s R&D Lab</h1>
        <p>Exploring novel ideas and building semi-innovative projects</p>
      </section>

      <section className="featured-projects-section">
        <h2><strong>Featured Projects</strong></h2>
        <div className="projects-carousel">
          {featuredProjects.map(note => (
            <Link href={note.route} key={note.id}>
              <div className="project-note" style={note.style}>
                <h3>{note.title}</h3>
                <p>{note.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Link href="/about">
        <section>
          <h2>About Me</h2>
          <p>Get to know the inner machinations of my mind.</p>
        </section>
      </Link>
      <Link href="/projects">
        <section>
          <h2>All Projects</h2>
          <p>Novel and border line nutty ideas.</p>
        </section>
      </Link>
      <Link href="/contact">
        <section>
          <h2>Contact</h2>
          <p>Not sure why you would, but you can send me an email</p>
        </section>
      </Link>
    </main>
  );
}
