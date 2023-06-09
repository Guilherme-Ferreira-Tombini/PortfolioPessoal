import Perfil from "@/components/Perfil"
import Menu from "../../components/Menu"

export default function Perfil_() {
  return (
   <div className="flex flex-row w-screen h-screen">

    {/* Componente do menu da pagina */}
     <Menu/>

     {/* Meio da Pagina */}
     <div className="w-[100%] h-[100vh] flex flex-col justify-center items-center">
        {/* Componente contendo o perfil */}
        <Perfil/>

        {/* Copyright */}
        <div className=" right-1 bottom-0 absolute flex flex-col justify-end items-end  p-4">
         <p className="text-green-800 text-base">
           Copyright © 2023 de Guilherme Tombini
         </p>
        </div>
      </div>

   </div>
  )
}
