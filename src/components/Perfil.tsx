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
    <div className="bg-green-700 rounded-xl flex flex-col items-center justify-center w-[70%] p-4">
      {/* Imagem do Perfil que vem do Github */}
      <div className="w-[100%] flex flex-col justify-center items-center">
        <div className="bg-white rounded-full p-1 ">
          <Image loading='lazy' className="rounded-full" src={Api+''} alt="legal" width={150} height={100}/>
        </div>
      </div>
      
      {/* Texto sobre aprendizagem e tecnologias */}
      <p className="p-4 text-justify text-white w-[90%]">
      Minha jornada na programação começou no ano de 2019, com programa baseado em blocos. 
      A partir do ano de 2020, entrei no IFMS e lá acabei entrando no mundo do JavaScript, 
      HTML, CSS, Bootstrap, React.js, React Native, Next.js, SQL, Sequelize e RiveScript.<br/><br/>

      Agora, após ter terminado o IFMS, procuro melhorar na questão de design do Front-end, aprender 
      mais a fundo o TypeScript e Prisma.<br/><br/>

      Além disso, estou cursando o ensino superior na UEMS no curso
      Sistema de Informação, onde estou aprendendo a programar na linguagem C. 
      </p>

    {/* Icones de contato */}
      <div className="w-[100%] flex flex-col justify-center items-center p-1">
        <div className="w-32 flex flex-row justify-between">
           <Image src={linkedin} alt="Linkedin" className="w-[55px] h-[55px]"/>
           <Image src={instagram} alt="Instagram" className="w-[55px] h-[55px]"/>
        </div>
      </div>


    </div>
  )
}