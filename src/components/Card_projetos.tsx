// importação da função moment, para conversão da data
import moment from "moment"


// Componente relacionado ao card de cada projeto do GitHub, utilizando "props"
export default function Card_projetos(props:any) {
   // setando a data para ser do tipo brasileiro
   moment.locale('pt-br');
   // armazenando em uma variavel a data da ultima atualização do projeto do GitHub
   let data = props.pushed_at;

  return (
   <div className="bg-green-950 text-white m-6 p-4 w-[38%] h-[43%] rounded-xl flex flex-col" >
      <h1 className="text-xl flex flex-col justify-center items-center mb-2">{props.name}</h1>
      <h5 className="">Ultima edição: {moment(data).format('DD/MM/YYYY')}</h5>
      <h5 className="">Link Github: <a className="underline" href={props.html_url}>
                          Acessar projeto
                       </a>
      </h5>
      <h5 className="">Linguagem mais utilizada: {props.language}</h5>
      <h5 className="">Total de Linguagens:</h5>
   </div>
  )
}

