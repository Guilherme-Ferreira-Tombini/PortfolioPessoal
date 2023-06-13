import Projetos_pagina from "@/components/Projetos_pagina"
import Menu from "../../components/Menu"
export default function Projetos() {
  return (
   <div className="flex flex-row w-screen h-screen">

     <Menu/>

     {/* Meio da pagina */}
     <div className="w-[100%] h-[100vh] flex flex-col justify-center items-center">
       <Projetos_pagina/>

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
