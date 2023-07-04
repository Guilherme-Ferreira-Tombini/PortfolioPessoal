import Projetos_pagina from "@/components/Projetos_pagina"
import Menu from "../../components/Menu"
import Image from "next/image"
import Nuvem_superior from "../../assets/nuvem-cantoSuperior.png"
import MenuMobile from "../../components//Menu_mobile"

export default function Projetos() {
  return (
   <div className="flex flex-row w-screen h-screen">
    {/* Menu em componente */}
     <Menu/>

      {/* Menu para o modo mobile */}
      <MenuMobile/>

     {/* Meio da pagina */}
     <div className="w-[100%] h-[100vh] flex flex-col justify-center items-center">
       {/* Projetos carregados do github */}
        <Projetos_pagina/>
       
       {/* Nuvem de efeito a pagina - Superior - modo mobile */}
       <Image id="nuvem_mobile" 
       className="absolute right-0 top-0 hidden" 
       src={Nuvem_superior} 
       alt="Nuvem superior da pagina"
       width={120} height={120}/>

       {/* Copyright */}
       <div className=" right-1 bottom-0 absolute flex flex-col justify-end items-end  p-4">
         <p id="copyright" className="text-green-800 text-base">
           Copyright © 2023 de Guilherme Tombini
         </p>
        </div>
     </div>
     

   </div>
  )
}
