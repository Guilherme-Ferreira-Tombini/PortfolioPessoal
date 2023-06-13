import Image from 'next/image'

// Importação do Componente com os cards
import Card_projetos from './Card_projetos'

// Imagens das setas
import setaDireita from '../assets/botao-de-seta-para-a-direita-do-teclado.png'
import setaEsquerda from '../assets/botao-esquerda.png'

export default function Projetos_pagina() {
  return (
   <div className="flex flex-row w-[100%] h-[85%]">
     
     {/* Seta da esquerda */}
     <div className=" flex flex-col items-center justify-center p-9 w-[10%] h-[100%]">
       <Image src={setaEsquerda} alt="seta esquerda"/>
     </div>

     {/* Meio do carrossel */}
     <div className="bg-green-300 w-[80%] h-[100%]">
     <Card_projetos/>
     </div>

     {/* Seta da direita */}
     <div className=" flex flex-col items-center justify-center p-9 w-[10%] h-[100%]">
       <Image src={setaDireita} alt="seta direita"/>
     </div>


   </div>
  )
}
