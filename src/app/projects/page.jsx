"use client";
import { motion } from "framer-motion";
import CardProjects from "@/components/CardProjects";
import proj1 from "../../../public/images/projects/candelabra.jpg";
import proj2 from "../../../public/images/projects/masterraul.png";
import proj3 from "../../../public/images/projects/apitiempo.jpg";
import proj4 from "../../../public/images/projects/portfolio-cover-image.jpg";
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
            summary="Aplicación web de tienda virtual de Articulos Escolares y Oficina. Este sitio web Candelabra es un aplicación de tipo ECommerce que se desarrollo el BackEnd y FrontEnd con Stack MERN."
            img={proj1}
            link="https://sage-medovik-daf437.netlify.app/"
            github="https://github.com/mauriespinoza/AppLibreriaFrontEnd"
          />
          <CardProjects
            type="App Restaurant Master Raúl"
            title="App Restaurant Master Raúl"
            summary="Aplicacion de Restaurante Master Raúl es un aplicación web para realizar busqueda de la Carta en tiempo real, Reserva de mesas, Contactar a sus dueños para consultas, recomendaciones, información de Blog para un Food Truck de comida rápida."
            img={proj2}
            link="https://helpful-gumption-17e3bd.netlify.app/"
            github="https://github.com/mauriespinoza/AppRestaurant"
          />
          <CardProjects
            type="App Weather"
            title="App Prevision del Tiempo"
            summary="Aplicacion de prevision de tiempo utilizando el consumo de la API de Meteosource, para obtener informacion del tiempo de las Localidaes consultadas."
            img={proj3}
            link="https://mauriespinoza.github.io/AppPrevisionTiempoAPI/"
            github="https://github.com/mauriespinoza/AppPrevisionTiempoAPI"
          />
          <CardProjects
            type="Portfolio Website"
            title="React Portfolio Website"
            summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
            img={proj4}
            link="https://devdreaming.com/videos/build-stunning-portfolio-website-react-js-framer-motion"
            github="https://github.com/codebucks27/react-portfolio-final"
          />
        </div>
        <div className="lg:p-20 p-[15%] mt-3 lg:px lg:mt-10 flex justify-center items-center">
          {/* <GoButton/> */}
        </div>
      </section>
    </>
  );
};

export default Projects;
