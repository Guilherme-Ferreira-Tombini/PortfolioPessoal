'use client'
import Image from "next/image"
import api from '../app/api/api'
import { useEffect, useState } from 'react'

import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'

// Interface para dizer que a variavel é do tipo string
interface Dado{
  Api: string
}

export default function Perfil() {
  //variaveis para pegar o link gerado na requisição da API
  const [Api,setApi] = useState<Dado>()

  // Execução da leitura da api para pegar o link da imagem do perfil
  useEffect(function async(){
    api.get("/users/Guilherme-Ferreira-Tombini")
      .then(response =>{
       setApi(response.data.avatar_url)
        
      })
      .catch(err => {
        console.log("Deu ruim ", err)
      })
  }, [] )

  // Caso a imagem ainda não tiver carregado, aparece a palavra "Carregando...". Caso carregue, ele apresenta a imagem do perfil
  if (!Api) {
    return (
      <h1>Carregando...</h1>
    );
  }

  return (
    <div id="divPerfil"className="bg-green-700 rounded-xl flex flex-col items-center justify-center w-[70%] p-4">
      {/* Imagem do Perfil que vem do Github */}
      <div className="w-[100%] flex flex-col justify-center items-center">
        <div className="bg-white rounded-full p-1 ">
          <Image id="imagemPerfil" loading='lazy' className="rounded-full" src={Api+''} alt="legal" width={120} height={100} quality={100}/>
        </div>
      </div>
      
      {/* Texto sobre aprendizagem e tecnologias */}
      <p id="textoPerfil" className="p-4 text-justify text-white w-[92%] text-[15px]">
      Minha jornada na programação começou no ano de 2019, com programas baseado em blocos. 
      A partir do ano de 2020, entrei no IFMS e lá acabei entrando no mundo do Front-end e Back-end<br/><br/>

      Agora, após ter terminado o IFMS, procuro melhorar na questão de design das minhas aplicações, 
      para me ajudar na criação de aplicações web mais sufisticadas.<br/><br/>

      Atualmente estou cursando na Universidade Estadual de Mato Grosso do Sul no curso de Sistemas de informação, 
      procurando melhorar minha lógica e conhecimentos de programação.
      </p>

    {/* Icones de contato */}
      <div className="w-[100%] flex flex-col justify-center items-center p-1">
        <div className="w-32 flex flex-row justify-between">

          <a href='https://www.linkedin.com/in/guilherme-ferreira-tombini-593015247/' 
             className="transition duration-500 ease-in-out hover:scale-110"
             target="_blank"
          >
             <Image id="imagemLinkedin" src={linkedin} alt="Linkedin" className="w-[55px] h-[55px]"/>
          </a>

          <a href='https://www.instagram.com/guilhermetombini/' 
             className="transition duration-500 ease-in-out hover:scale-110"
             target="_blank"
           >
             <Image id="imagemInstagram" src={instagram} alt="Instagram" className="w-[55px] h-[55px]"/>
          </a>

        </div>
      </div>


    </div>
  )
}