"use client";

import { TbMail, TbMapPin, TbPhoneCall, TbWorld } from "react-icons/tb";

const ContactServices = () => {
  return (
    <section id="contact" className="relative z-50 my-12 lg:my-24 px-4 md:px-10">
      <div className="max-w-4xl mx-auto bg-[#10172d] border border-[#353a52] rounded-lg p-6 md:p-10 text-white shadow-lg">
        <h2 className="text-3xl font-bold text-[#16f2b3] mb-6 uppercase">À propos de moi</h2>
        <p className="text-base mb-6 text-[#d3d8e8] leading-relaxed">
          Ingénieur Logiciel et Développeur Full-Stack passionné, je conçois et optimise des solutions numériques innovantes.
          Fort de plusieurs années d’expérience, je mets mes compétences au service de projets variés dans le développement web,
          les systèmes d’information et la gestion logicielle.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-[#16f2b3] mb-3">Mes services</h3>
            <ul className="list-disc list-inside space-y-2 text-[#d3d8e8]">
              <li>Développement Web Full-Stack (PHP, JavaScript, Python)</li>
              <li>Création de sites et applications avec React, Vue, Angular</li>
              <li>Conception de modules ERP (Comptabilité, Paie, Gescom)</li>
              <li>Intégration d’API, Webhooks, WebSocket</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#16f2b3] mb-3"> </h3>
            <ul className="list-disc list-inside space-y-2 text-[#d3d8e8]">
              <li>Développement WordPress et Elementor</li>
              <li>Déploiement Des applications</li>
              <li>Modélisation UML, Architecture logicielle</li>
              <li>Maintenance, audit technique et formation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactServices;
