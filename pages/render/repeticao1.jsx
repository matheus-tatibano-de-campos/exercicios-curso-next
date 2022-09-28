import { INTERNALS } from "next/dist/server/web/spec-extension/request"

export default function Repeticao1() {
    const listaAprovados = [
        'joao',
        'maria',
        'pedro',
        'laura',
        'daniel',
        'carlos',
    ]

    function renderizarLista() {
      return listaAprovados.map(function(nome, i ) {
        return <li key={i}>{nome}</li>
      })

        }

    return (
        <ul>
            {renderizarLista()}
        </ul>
    )
}