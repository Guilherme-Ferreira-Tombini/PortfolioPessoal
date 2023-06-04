import Image from "next/image"
import inicio from "../assets/pagina-inicial.png" 
import projetos from "../assets/programacao.png"
import perfil from "../assets/biografia.png"

export default function Menu_icon() {
  return (
  <>
  {/* Opções de pagina */}
  <div className="w-[64px] h-3/6 mt-9 flex flex-col flex-wrap">
     {/* Div para separar os icones */}
      <div className="flex flex-col justify-between h-[80%] p-3">
        <a href="/" className="transition duration-500 ease-in-out hover:scale-110">
          <Image src={inicio} alt="Icone da pagina inicial"/>
        </a>
        <a href="/projetos" className="transition duration-500 ease-in-out hover:scale-110">
          <Image src={projetos} alt="Icone da pagina de projetos"/>
        </a>
        <a href="/perfil" className="transition duration-500 ease-in-out hover:scale-110">
          <Image src={perfil} alt="Icone da pagina perfil"/>
        </a>
     </div>
    </div>
  </>
  )
}