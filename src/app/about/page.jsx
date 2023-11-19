'use client';

import { useState } from "react";
import Image from "next/image";

const About =() => {
    const [imageSrc, setImageSrc] = useState("https://picsum.photos/200/300");
    const [text, setText] = useState("");

  return (
    <>
     {/* <div  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
     <h2 style={{marginTop:"10px"}}>Acerca de Mi</h2>
    <div className="">
    <div className="">
            <Image  src='/images/yoda.webp' className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" width={250} height={250} alt="Mauricio Espinoza mode relaxing" />
        </div>
        <div className="">
            <p>
              Como desarrollador, siempre me ha apasionado crear soluciones elegantes y eficaces a problemas complejos. Tengo una base sólida en el desarrollo de software, con enfoque en tecnologías web como HTML, CSS y JavaScript. Disfruto trabajando tanto en el front-end como en el back-end de las aplicaciones y siempre estoy buscando formas de optimizar el rendimiento, mejorar la experiencia del usuario y garantizar el más alto nivel de calidad del código.
            </p>
            <p>A lo largo de mi carrera, he trabajado en una amplia gama de proyectos, desde simples sitios web estáticos hasta complejas aplicaciones de nivel empresarial en el area Banking y Seguridad Electrónica. Tengo experiencia trabajando con una variedad de marcos y herramientas de desarrollo, incluidos React, Angular, Node.js, Java, ASP.Net, C#, Visual Basic. Siempre estoy ansioso por aprender y explorar nuevas tecnologías, y busco constantemente oportunidades para mejorar mis habilidades y conocimientos.

</p>
        </div>
        
    </div>
</div> */}
 <section>
            <div className="min-h-screen flex flex-col md:flex-row pt-20 pb-10 px-10 md:px-20 pt-4 bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]">
                <div className="w-full pr-5 md:w-1/2 items-center" >
                    <Image src="/images/profile/profile.jpeg" alt="imagen Mauricio Espinoza" width={640} height={570}/>
                    <br/>
                </div>
                <div className="w-full md:w-1/2 text-lg md:pr-10  pb-10">
                    <h2 className="font-bold text-6xl mb-28 w-full text-left xl:text-6xl md:text-4xl xs:text-4xl md:mb-14"><strong>Mauricio Espinoza</strong></h2>
                    <br/>
                    <br/>
                    Profesional con más de 15 años de experiencia en el area de Desarrollo de Software.
                    <br/>
                    <br/>
                    Formación:<br/>
                    <strong> - Ingeniero en Computación e informática (2007-2009)</strong><br/>
                    <strong> - Analista de Sistemas (2004-2006)</strong><br/>
                    <strong> - Certificacion ASP.Net, C# Framework 4.0 (2012)</strong><br/>
                    <strong> - Certificacion Angular 8, Typescript</strong> <br/>
                    <strong> - Full Stack Developer (2023)</strong>
                    <br/>
                    <br/>
                    Como desarrollador, siempre me ha apasionado crear soluciones elegantes y eficaces a problemas complejos. Tengo una base sólida en el desarrollo de software, con enfoque en tecnologías web como HTML, CSS y JavaScript. Disfruto trabajando tanto en el front-end como en el back-end de las aplicaciones y siempre estoy buscando formas de optimizar el rendimiento, mejorar la experiencia del usuario y garantizar el más alto nivel de calidad del código.
                    <br />
                    <br />
                    A lo largo de mi carrera, he trabajado en una amplia gama de proyectos, desde simples sitios web estáticos hasta complejas aplicaciones de nivel empresarial en el area Banking y Seguridad Electrónica. Tengo experiencia trabajando con una variedad de marcos y herramientas de desarrollo, incluidos React, Angular, Node.js, Java, ASP.Net, C#, Visual Basic. Siempre estoy ansioso por aprender y explorar nuevas tecnologías, y busco constantemente oportunidades para mejorar mis habilidades y conocimientos.
                    <br/>
                    <br/>
                    
                </div>
            </div>
        </section>
    </>
  );
}
 
export default About;
