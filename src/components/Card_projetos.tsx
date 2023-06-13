// Componente relacionado ao card de cada projeto do GitHub, utilizando "props"
export default function Card_projetos(props:any) {
  return (
   <div className="bg-black text-white m-6 p-4 w-[38%] h-[43%] rounded-xl" key={props.id}>
      <h1>{props.name}</h1>
      <h5>Ultima edição: {props.updated_at}</h5>
      <h5>Link Github: <a className="underline" href={props.html_url}>
                          Acessar projeto
                       </a>
      </h5>
      <h5>Linguagem mais utilizada: {props.language}</h5>
      <h5>Total de Linguagens:</h5>
   </div>
  )
}

