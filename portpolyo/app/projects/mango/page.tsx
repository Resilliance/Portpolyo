import styles from "../../page.module.css";
import "../project-page.css";
import Image from 'next/image';

export default function Mango() {
  return (
    <main>
      <section className="project-section">
        <h2>Project MangoTree ERP: Overview</h2>
        <p>
          <strong>MangoTree ERP is a fully modular, tech-stack agnostic ERP system designed to give developers and businesses the freedom to build only what they need.</strong> Inspired by the rigid nature of monolithic systems like Odoo and SAP, MangoTree reimagines ERP as a flexible platform where services and features can be plugged in, swapped out, or extended on demand — like digital Lego bricks.
        </p>
        <p>
          <strong>The system is built with decentralization in mind.</strong> Each module operates independently, with the ability to define its own backend routes, frontend UI, and database schema. MangoTree enables seamless backend–frontend integration, dynamic route registration, and modular permission handling — all while remaining developer-friendly and scalable for real-world production use.
        </p>
      </section>

      <section className="project-section">
        <h2>Key Features</h2>
        <ul>
          <li><b>Full Modularity:</b> Modules can be installed, uninstalled, or extended dynamically — including both frontend (Svelte) and backend (Go) code.</li>
          <li><b>Tech Stack Agnostic:</b> Backend modules can be written in Go, Python, or any language that can interface via APIs or gRPC.</li>
          <li><b>Micro Frontend Ready:</b> Frontend modules inject their own routes and views into a shell Svelte app, supporting per-module UI logic.</li>
          <li><b>Dynamic Menu Registration:</b> Navigation auto-populates based on installed modules and user permissions (RBAC-aware).</li>
          <li><b>Secure & Scalable:</b> Supports CockroachDB for distributed SQL, Redis for caching/session handling, and mTLS for inter-service security.</li>
          <li><b>Multi-tenant & Multi-company:</b> Architected with tenant and company isolation in mind — future-proofed for SaaS deployment.</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Technologies Used</h2>
        <ul>
          <li><b>Backend:</b> Go (Fiber), REST/gRPC APIs, modular plugin pattern</li>
          <li><b>Frontend:</b> SvelteKit with dynamic route injection and custom UI per module</li>
          <li><b>Database:</b> CockroachDB (distributed SQL), PostgreSQL (optional), Redis (session/cache)</li>
          <li><b>Containerization:</b> Docker (module isolation), optional Kubernetes</li>
          <li><b>Other:</b> NGINX, MinIO for object storage, and shell scripts for module bootstrapping</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Screenshots / Mockups</h2>
        <div className="image-gallery">
          <Image src="/file.svg" alt="MangoTree Admin Interface Mockup" width={400} height={250} />
          <Image src="/globe.svg" alt="Module Management UI Concept" width={400} height={250} />
        </div>
        <p style={{ fontSize: "0.9rem", color: "#888" }}>
          (Mockups shown are placeholders. Actual screenshots will be uploaded once the MVP UI is finalized.)
        </p>
      </section>

      <section className="project-section">
        <h2>Links & Resources</h2>
        <p>
          <b>GitHub Repository:</b>{" "}
          <a href="https://github.com/yourusername/mangotree-erp" target="_blank" rel="noopener noreferrer">
            github.com/yourusername/mangotree-erp
          </a>
        </p>
        <p>
          <b>Live Demo:</b>{" "}
          <a href="https://mango.yourdomain.com" target="_blank" rel="noopener noreferrer">
            mango.yourdomain.com
          </a>
        </p>
        <p>
          <b>Documentation:</b>{" "}
          <a href="https://docs.yourdomain.com/mangotree" target="_blank" rel="noopener noreferrer">
            docs.yourdomain.com/mangotree
          </a>
        </p>
      </section>
    </main>
  );
}
