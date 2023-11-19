
'use client'
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";
import { useState } from "react";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const [ref,setRef] = useState(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const [ref,setRef] = useState(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <main className="">

    
      <div className="pt-10 pb-10">
        <h2 className="top-10 font-bold text-6xl mb-28 w-full text-center xl:text-6xl md:text-4xl xs:text-4xl md:mb-14">
          Experiencia
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[80%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Software Engineer"
              company="Diebold Nixdorf"
              companyLink="https://dieboldnixdorf.com"
              time="2012-Presente"
              address="Santiago, Chile"
              work="Trabajó en un equipo responsable de desarrollo e implementacion de soluciones para el area Banking.
              Aptitudes: Visual Basic · Servicios web de RESTful · Desarrollo de API · Bases de datos · Desarrollo Full Stack · .NET Framework · Análisis de sistemas · C# · AngularJS · TypeScript"
            />

            <Details
              position="Analista de Sistemas"
              company="Univiveros"
              companyLink="https://univiveros.cl"
              time="2011 2012"
              address="Paine, Chile."
              work="Encargado del desarrollo de aplicaciones y soporte computacional.
              Aptitudes: Visual Basic · Servicios web de RESTful · Desarrollo de API · Bases de datos · Desarrollo Full Stack · .NET Framework · Análisis de sistemas · C# · AngularJS · TypeScript"
            />

            <Details
              position="Analista de Sistemas"
              company="Directiva Informatica"
              companyLink="https://www.directiva.cl/"
              time="2009-2011"
              address="Santiago, Chile."
              work="Trabajó en un equipo responsable de desarrollo e implementacion de soluciones para el area Banking y Seguridad Electronica.
              Aptitudes: Visual Basic · Servicios web de RESTful · Desarrollo de API · Bases de datos · Desarrollo Full Stack · .NET Framework · Análisis de sistemas · C# · AngularJS · TypeScript"
            />

            <Details
              position="Software Developer"
              company="Ilia"
              companyLink="https://ilia.cl/"
              time="2008-2009"
              address="Santiago, Chile."
              work="Trabajó en un equipo responsable de desarrollo e implementacion de soluciones para el area Banking y Seguridad Electronica.
              Aptitudes: Visual Basic · Servicios web de RESTful · Desarrollo de API · Bases de datos · Desarrollo Full Stack · .NET Framework · Análisis de sistemas · C# · AngularJS · TypeScript"
            />

            <Details
              position="Software Developer"
              company="Global Informatica"
              companyLink="https://mit.edu"
              time="2006-Present"
              address="Massachusetts Ave, Cambridge, MA."
              work="Este es mi emprendimiento personal de desarrollo e implementacion de soluciones para el area Banking y Seguridad Electronica.
              Aptitudes: Visual Basic · Servicios web de RESTful · Desarrollo de API · Bases de datos · Desarrollo Full Stack · .NET Framework · Análisis de sistemas · C# · AngularJS · TypeScript"
            />
          </ul>
        </div>
        </div>
        </main>
    );
};

export default Experience;