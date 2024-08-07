"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const EmailSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hqzjxek', '87vXdN33_QsZ1bYv3', form.current, {
        publicKey: '87vXdN33_QsZ1bYv3',
      })
      .then(
        () => {
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Escribinos!
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Contáctanos hoy para llevar tu presencia online al siguiente nivel. 
          En Z Agency, combinamos creatividad y experiencia para ofrecerte soluciones web a medida que realmente funcionan. 
          Con atención personalizada las 24 horas y un historial comprobado de éxito con más de 60 clientes,
          estamos para ayudarte a alcanzar tus objetivos
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Zeta912">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/company/100152365">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
          <form className="flex flex-col" onSubmit={sendEmail}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Email
              </label>
              <input
                name="user_email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="*******@email.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Asunto
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Mensaje
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Contanos en que te podemos ayudar..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Enviar Mensaje
            </button>
          </form>
      </div>
    </section>
  );
}
export default EmailSection;
