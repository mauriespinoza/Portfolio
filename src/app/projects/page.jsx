"use client";
import { motion } from "framer-motion";
import CardProjects from "@/components/CardProjects";
import proj1 from "../../../public/images/projects/candelabra.jpg";
import proj2 from "../../../public/images/projects/masterraul.png";
import proj3 from "../../../public/images/projects/apitiempo.jpg";
import proj4 from "../../../public/images/projects/portfolio.jpg";
import proj5 from "../../../public/images/projects/agency-website-cover-image.jpg";
import proj6 from "../../../public/images/projects/devdreaming.jpg";

const Projects = () => {
  return (
    <>
      <section className="bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] w-full pt-5 pb-5">
        <div className="">
          <h2 className="top-10 font-bold text-6xl mb-28 w-full text-center xl:text-6xl md:text-4xl xs:text-4xl md:mb-14">
            Proyectos
          </h2>
        </div>
        <div className=" flex flex-wrap gap-7 justify-center items-center mt-20 ">
          <CardProjects
            type="ECommerce"
            title="Candelabra E-Commerce"
            summary="Aplicación web de tienda virtual de Artículos Escolares y Oficina. Este sitio web Candelabra es un aplicación de tipo ECommerce que se desarrollo el BackEnd y FrontEnd con Stack MERN. Tiene para pago electrónico"
            img={proj1}
            link="https://sage-medovik-daf437.netlify.app/"
            github="https://github.com/mauriespinoza/AppLibreriaFrontEnd"
          />
          <CardProjects
            type="App Restaurant Master Raúl"
            title="App Restaurant Master Raúl"
            summary="App de Restaurante Master Raúl es un aplicación web para realizar busqueda de la Carta en tiempo real, Reserva de mesas, Contactar a sus dueños para consultas, recomendaciones, información de Blog para un Food Truck de comida rápida."
            img={proj2}
            link="https://helpful-gumption-17e3bd.netlify.app/"
            github="https://github.com/mauriespinoza/AppRestaurant"
          />
          <CardProjects
            type="App Weather"
            title="App Prevision del Tiempo"
            summary="Aplicación de previsión de tiempo utiliza el consumo de la API de Meteosource, para obtener información del tiempo de las Localidades consultadas, con previsión para 7 días con gráficos incluidos"
            img={proj3}
            link="https://mauriespinoza.github.io/AppPrevisionTiempoAPI/"
            github="https://github.com/mauriespinoza/AppPrevisionTiempoAPI"
          />
          <CardProjects
            type="Portfolio Website"
            title="Next JS Portfolio Website"
            summary="Un sitio web de Portafolio profesional desarrollado en NextJS, que utiliza componentes  Framer-motion y Tailwind. Tiene transiciones de página fluidas, diseño único y responde a dispositivos móviles."
            img={proj4}
            link="https://portfolioudd.vercel.app/"
            github="https://github.com/mauriespinoza/Portfolio"
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
