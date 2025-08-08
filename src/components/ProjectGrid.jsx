"use client";
import { useMemo, useState } from "react";
import { Section } from "./Section";
import SectionTitle from "./SectionTitle";
import ProjectFilters from "./ProjectFilters";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsGrid() {
  const [filter, setFilter] = useState("All");
  const stacks = useMemo(() => Array.from(new Set(projects.flatMap(p => p.stack))), []);
  const filtered = useMemo(() => filter === "All" ? projects : projects.filter(p => p.stack.includes(filter)), [filter]);

  return (
    <Section id="projects">
      <SectionTitle eyebrow="Proyectos" title="Lo que he construido" />
      <ProjectFilters stacks={stacks} onChange={setFilter} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => <ProjectCard key={p.slug} p={p} />)}
      </div>
    </Section>
  );
}