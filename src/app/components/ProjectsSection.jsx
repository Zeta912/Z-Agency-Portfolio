"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Proyecto 1",
    image: "/images/projects/1.png",
    tag: ["Todos", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Portafolio para Fotografia",
    image: "/images/projects/2.png",
    tag: ["Todos", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Sitio Web Cafeteria",
    description: "Modelo de sitio web para una cafeteria",
    image: "/images/coderswe.jpeg",
    tag: ["Todos", "Web"],
    gitUrl: "/",
    previewUrl: "https://coders-coffee.netlify.app",
  },
  {
    id: 4,
    title: "Sitio Web Aplicacion de Delivery",
    description: "Modelo de aplicacion delivery",
    image: "/images/projects/4.png",
    tag: ["Todos", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Sitio Web Aplicacion de Viajeros",
    description: "Modelo de sitio web de aplicacion para viajeros",
    image: "/images/projects/travelweb.jpeg",
    tag: ["Todos", "Web"],
    gitUrl: "/",
    previewUrl: "https://camptraveler.com",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Proyecto 5",
    image: "/images/projects/6.png",
    tag: ["Todos", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Nuestros Proyectos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
