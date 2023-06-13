"use client"
import Image from 'next/image'
import api from "@/app/api/api";
import { useEffect, useState } from "react";

// Importação do Componente com os cards
import Card_projetos from './Card_projetos'


// Imagens das setas
import setaDireita from '../assets/botao-de-seta-para-a-direita-do-teclado.png'
import setaEsquerda from '../assets/botao-esquerda.png'


// Tipagem dos dados para a utilização das informações na linha 40
interface Dados{
  id: number,
  name: string,
  html_url: string,
  updated_at: string,
  language: string,
}


export default function Projetos_pagina() {
  // Variavel para armazenar os dados sobre os projetos do GitHub
 const [Api,setApi]=useState([]);

 // Execução da leitura da api para pegar os dados sobre os projetos
   useEffect(()=>{
     api.get("/users/Guilherme-Ferreira-Tombini/repos")
       .then(response =>{
        setApi(response.data)
       })
       .catch(err => {
         console.log("Deu ruim ", err)
       })
   }, [] )
 
   // Caso os dados ainda estejam carregando, ira mostrar a frase de carregamento
   if (!Api) {
     return (
       <h1>Carregando projetos...</h1>
     );
   }

  return (
   <div className="flex flex-row w-[100%] h-[85%]">
     
     {/* Seta da esquerda */}
     <div className=" flex flex-col items-center justify-center p-9 w-[10%] h-[100%]">
       <Image src={setaEsquerda} alt="seta esquerda"/>
     </div>



     {/* Meio do carrossel */}
     <div className="bg-green-300 flex flex-row flex-nowrap w-[80%] h-[100%]">
       {
         // Utilização dos dados dos projetos
         Api.map((dado:Dados) =>{
         return(
          <Card_projetos id={dado.id} name={dado.name} html_url={dado.html_url}  updated_at={dado.updated_at} language={dado.language}/>
         )
         })
       }
     </div>



     {/* Seta da direita */}
     <div className=" flex flex-col items-center justify-center p-9 w-[10%] h-[100%]">
       <Image src={setaDireita} alt="seta direita"/>
     </div>


   </div>
  )
}
