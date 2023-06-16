"use client"
import Image from 'next/image'
import api from "@/app/api/api";
import { useEffect, useState } from "react";

// Importação do Componente com os cards
import Card_projetos from './Card_projetos'


// Tipagem dos dados para a utilização das informações na linha 40
interface Dados{
  id: number,
  name: string,
  html_url: string,
  pushed_at: string,
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
   <div className="flex flex-row w-[95%] overflow-x-hidden overflow-y h-[84%]">
     
     {/* Meio do carrossel */}
     <div className="flex flex-row justify-center flex-wrap">
       {
         // Utilização dos dados dos projetos
         Api.map((dado:Dados) =>{
         return(
          <Card_projetos key={dado.id} name={dado.name} html_url={dado.html_url}  pushed_at={dado.pushed_at} language={dado.language}/>
         )
         })
       }
     </div>

   </div>
  )
}
