"use client"
import api from "@/app/api/api";
import { useEffect, useState } from "react";

// Tipagem dos dados para a utilização das informações na linha 40
interface Dados{
  id: number,
  name: any,
  html_url: any,
  updated_at: any
}


export default function Card_projetos() {
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
   <>
   {
     // Utilização dos dados dos projetos
     Api.map((dado:Dados) =>{
       return(
         <div key={dado.id}>
             <h1>{dado.name}</h1>
         </div>
       )
     })
   }
   </>
  )
}

