"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Mision",
    id: "Mision",
    content: (
      <ul className="list-none font-semibold pl-2">
        <li>Empoderar a los Profesionales con Soluciones Web Excepcionales</li>
      </ul>
    ),
  },
  {
    title: "Vision",
    id: "Vision",
    content: (
      <ul className="list-none font-semibold pl-2">
        <li>Ser la Elección Principal para el Desarrollo Web Profesional</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("Mision");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Nosotros</h2>
          <p className="text-base lg:text-lg">
          En Z Agency, somos especialistas en la creación de páginas web de alta calidad para profesionales. 
          Con más de 2 años de experiencia y más de 60 clientes satisfechos, 
          nos destacamos por ofrecer soluciones personalizadas y efectivas que mejoran la presencia digital de nuestros clientes. 
          Nos comprometemos a estar disponibles para ti las 24 horas del día, brindando soporte continuo y atención personalizada. 
          Deja que nuestro equipo de expertos te ayude a alcanzar tus objetivos online y a destacar en el competitivo mundo digital.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("Mision")}
              active={tab === "Mision"}
            >
              {" "}
              Misión{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Vision")}
              active={tab === "Vision"}
            >
              {" "}
              Visión{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
