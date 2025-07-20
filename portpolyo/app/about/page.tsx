'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from "../page.module.css";
import "./about.css";

export default function About() {
  const [funFacts, setFunFacts] = useState([
    { id: 1, text: 'I can solve a Rubik\'s Cube in under a minute.', style: {} },
    { id: 2, text: 'Salmon isn\'t safe from my gaze, sushi or cooked.', style: {} },
    { id: 3, text: 'I perfected the craft of cooking white rice (with a rice cooker) over my 28 years of life.', style: {} },
    { id: 4, text: 'My favorite food is STROMBOLLI.', style: {} },
    { id: 5, text: 'To live a year in Italy, Singapore, and/or Japan is one of my many dreams', style: {} },
    { id: 6, text: 'Am the biggest sucker for chocolate chunk cookies.', style: {} },
    { id: 7, text: 'I grow Basil to nurture my homemade pesto addiction', style: {} },
  ]);

  useEffect(() => {
    setFunFacts(funFacts.map(fact => ({
      ...fact,
      style: {
        transform: `rotate(${Math.random() * 22 - 8}deg)`,
        backgroundColor: `hsl(${Math.random() * 360}, 70%, 80%)`,
      },
    })));
  }, []);

  return (
    <main className="about-page">
      <div className="about-container">
        <div className="bio">
          <h2>About Me</h2>
		<p>
			<strong>I&apos;m a generalist at heart</strong> — a software engineer who enjoys learning new things and building across disciplines. I’ve worked on everything from modular backend systems to frontends that (hopefully) feel intuitive.
		</p>
		<p>
			<strong>Most of my ideas come from a mix of curiosity, creativity, and a tendency to dive deep when something grabs my interest.</strong> Whether it@apos;s game development, home-lab tinkering, or trying to make the perfect bowl of pasta, I enjoy figuring things out and seeing them come to life.
		</p>
		<p>
			<strong>I don’t have a singular focus, and I’m okay with that.</strong> I value process, iteration, and building things that feel meaningful — even if just to me.
		</p>
        </div>

        <div className="bio-card philosophy-card">
          <h2>My Philosophy</h2>
			<p>
				<strong>I believe in building things that matter</strong> — not because they’re trendy or optimized, but because they reflect real thought and intention. I@apos;m less concerned with perfection and more focused on progress, iteration, and momentum.
			</p>
			<p>
				<strong>Usually the things that matter pique my curiosity and drive me mentally.</strong> Whether I@apos;m learning a new framework, designing a system from scratch, or experimenting with music or food, I follow the thread wherever it leads — often to unexpected and fulfilling places.
			</p>
        </div>

		<div className="bio-card software-card">
			<h2>What I Like About Building Software</h2>
		  <p>
			<strong>For me, software is a playground for experimentation and rapid prototyping.</strong> It lets me take my half-baked ideas, or just “what if?” thoughts and turn them into a product or system. I’m drawn to niche ideas and try to blitz it@apos;s development — it@apos;s the place in my mind where convention fades and curiosity takes over.
		  </p>
		  <p>
			<strong>I enjoy combining tools and frameworks</strong> to hand craft software as if it@apos;s a sculpture and build things that maybe only I find useful — until they aren’t. 
		  </p>
        </div>

        {funFacts.map((fact, index) => (
          <div key={fact.id} className={`fun-fact fun-fact-${index + 1}`} style={fact.style}>
            <p>{fact.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
