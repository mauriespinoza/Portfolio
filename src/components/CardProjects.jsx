import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";



 const CardProjects = ( {img, title, summary, link, github}) => {
  return (
    
    <div className="max-w-xs lg:max-w-lg bg-indigo-400 rounded-3xl shadow-2xl ">
    <Image
    width={500}
    height={500}
    className="w-[90%] h-60 lg:h-72 lg:ml-5 ml-4 py-5" src={img} alt="" />
    <h5  className="lg:text-4xl text-4xl  text-black px-2">
  {title}
    </h5>
    <p className="font-normal text-black py-3 px-2">
   {summary}
    </p>

    <div className="flex justify-start w-16 translate-y-[55%] translate-x-[30%] hover:scale-125">
      <Link href={github} className="w-8 md:w-6 cursor-pointer"> <GithubIcon/>
   </Link>
    </div>

<div className="flex justify-center mb-5">
  <Link
href={link} className="text-indigo-800 focus:ring-4 focus:outline-none  font-medium cursor-pointer hover:scale-110  h-auto flex items-center justify-center">Visita Página</Link>
    </div>
    </div>
    

  )
}

export default CardProjects;