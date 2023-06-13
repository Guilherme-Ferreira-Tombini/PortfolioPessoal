// Componente relacionado ao card de cada projeto do GitHub, utilizando "props"
export default function Card_projetos(props:any) {
  return (
   <div className="bg-black text-white m-2" key={props.id}>
      <h1>{props.name}</h1>
      <h5>Ultima edição: {props.updated_at}</h5>
      <h5>Link Github: {props.html_url}</h5>
      <h5>Linguagem mais utilizada: {props.language}</h5>
      <h5>Total de Linguagens:</h5>
   </div>
  )
}

