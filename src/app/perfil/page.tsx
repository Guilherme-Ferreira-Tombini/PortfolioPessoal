import Perfil from "@/components/Perfil"
import Menu from "../../components/Menu"
import MenuMobile from "../../components/Menu_mobile"
import Nuvem_superior from "../../assets/nuvem-cantoSuperior.png"
import Image from "next/image"

export default function Perfil_() {
  return (
   <div className="flex flex-row w-screen h-screen">

    {/* Componente do menu da pagina */}
     <Menu/>

      {/* Menu para o modo mobile */}
      <MenuMobile/>

     {/* Meio da Pagina */}
     <div className="w-[100%] h-[100vh] flex flex-col justify-center items-center">
       {/* Nuvem de efeito a pagina - Superior - modo mobile */}
       <Image id="nuvem_mobile" 
       className="absolute right-0 top-0 hidden" 
       src={Nuvem_superior} 
       alt="Nuvem superior da pagina"
       width={120} height={120}/>
        {/* Componente contendo o perfil */}
        <Perfil/>

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
