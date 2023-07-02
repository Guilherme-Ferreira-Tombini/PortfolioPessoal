import inicio from "../assets/pagina-inicial.png" 
import projetos from "../assets/programacao.png"
import perfil from "../assets/biografia.png"
import Image from "next/image"

export default function Menu_mobile() {
  return (
  <div id="menu_mobile" className="bg-green-950 w-[100%] p-3 hidden absolute bottom-0">
     {/* Div para separar os icones */}
     <div className="flex flex-row items-center justify-around h-[80%]">
        <a href="/" className="transition duration-500 ease-in-out hover:scale-110 w-10 h-10">
          <Image src={inicio} alt="Icone da pagina inicial"/>
        </a>
        <a href="/projetos" className="transition duration-500 ease-in-out hover:scale-110 w-10 h-10">
          <Image src={projetos} alt="Icone da pagina de projetos"/>
        </a>
        <a href="/perfil" className="transition duration-500 ease-in-out hover:scale-110 w-10 h-10">
          <Image src={perfil} alt="Icone da pagina perfil"/>
        </a>
     </div>
  </div>
  )
}