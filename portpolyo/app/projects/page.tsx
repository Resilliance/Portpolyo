'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from "../page.module.css";
import "./projects.css";

export default function Projects() {
  const [projectNotes, setProjectNotes] = useState([
    {
      id: 1,
      route: '/projects/mango',
      title: 'MangoTree ERP',
      description: "ERP idea where I can attach any apps/services to a central app. Full Modularity, tech stack agnostic, and potentially disruptive.",
      style: {},
    },
    {
      id: 2,
      route: '/projects/graphite',
      title: 'Graphite Dashboards',
      description: 'Description of project 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      style: {},
    },
    {
      id: 3,
      route: '/projects/domain-force',
      title: 'Domain Force',
      description: 'Description of project 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      style: {},
    },
    {
      id: 4,
      route: '/projects/peacewalk',
      title: 'PeaceWalk',
      description: 'My first iOS app and first published game! Pretty peaceful, I think.',
      style: {},
    },
    {
      id: 5,
      route: '/projects/catchef',
      title: 'CatChef',
      description: 'My 2nd iOS app and first published game! Pretty peaceful, I think.',
      style: {},
    },
    {
      id: 6,
      route: '/projects/cellio',
      title: 'Cell.io',
      description: 'Cell.io inspired by Agar.io',
      style: {},
    },
    {
      id: 7,
      route: '/projects/odoomcp',
      title: 'Odoo MCP',
      description: 'Some Executive wanted me to integrate AI into their system for easy trend checking',
      style: {},
    },
    {
      id: 8,
      route: '/projects/odoogrpc',
      title: 'Odoo gRPC',
      description: 'In an attempt to make Odoo MCP consume more data I bypass Odoos XMLRPC',
      style: {},
    },
    {
      id: 9,
      route: '/projects/recycpal',
      title: 'RecycPal',
      description: 'AI Assistant in helping identify recyclable materials',
      style: {},
    },
  ]);

  useEffect(() => {
    setProjectNotes(projectNotes.map(note => ({
      ...note,
      style: {
        transform: `rotate(${Math.random() * 10 - 5}deg)`,
        backgroundColor: `hsl(${Math.random() * 360}, 70%, 80%)`,
      },
    })));
  }, []);

  return (
    <main>
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectNotes.map(note => (
          <Link href={note.route} key={note.id}>
            <div className="project-note" style={note.style}>
              <h3>{note.title}</h3>
              <p>{note.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
