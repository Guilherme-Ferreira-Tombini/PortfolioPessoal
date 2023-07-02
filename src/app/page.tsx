import Menu from "@/components/Menu"
import Texto from "../components/Texto_Inicial" 
import Image from "next/image"
import MenuMobile from "../components//Menu_mobile"

import Nuvem_superior from "../assets/nuvem-cantoSuperior.png"
import Nuvem_inferior from "../assets/nuvem-cantoInferior.png"

export default function Home() {
  return (
   <div className="flex flex-row w-screen h-screen">
    {/* Menu em componente */}
     <Menu/>

     {/* Menu para o modo mobile */}
     <MenuMobile/>

     {/* Meio da Pagina */}
     <div className="w-[100%] h-[100vh] flex flex-col justify-center items-center">

       {/* Nuvem de efeito da pagina - Superior */}
       <Image id="nuvem1" 
       className="absolute right-0 top-0" 
       src={Nuvem_superior} 
       alt="Nuvem superior da pagina"/>


       {/* Nuvem de efeito a pagina - Superior - modo mobile */}
       <Image id="nuvem_mobile" 
       className="absolute right-0 top-0 hidden" 
       src={Nuvem_superior} 
       alt="Nuvem superior da pagina"
       width={120} height={120}/>


      {/* Texto referente a apresentação do portfolio  */}
       <Texto/>

      {/* Nuvem de efeito da pagina - Inferior */}
       <Image id="nuvem1" 
       className="absolute left-[88px] bottom-0" 
       src={Nuvem_inferior} 
       alt="Nuvem inferior da pagina"/> 


        {/* Copyright */}
      <div className="w-[100%] flex flex-col items-end p-4">
       <p id="copyright" className="text-green-800 text-base">
         Copyright © 2023 de Guilherme Tombini
       </p>
      </div>

     </div>

   </div>
  )
}
