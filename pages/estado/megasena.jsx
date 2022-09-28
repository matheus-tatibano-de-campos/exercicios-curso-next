import { useState } from "react"
import ContadorDisplay from "../../components/indireta1/ContadorDisplay"
import { mega } from "../../functions/mega"

export default function megasena() {
    
    const [qtde, setQtde] = useState(6)
    const [numeros, setNumeros] = useState([])

     function renderNumeros() {
        return numeros.map(
             numero => <ContadorDisplay key={numero} numero={numero} />)
     }

    return (
        <div style={{display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
        }}>
            <h1>Mega sena</h1>
            <div style={{
                display: 'flex',
                justifyContent: "center",
               flexWrap: 'wrap',
               }}>
                {renderNumeros()}
            </div>
            <div>
            <input type='number' min = {6} max = {20} value={qtde}
            onChange={ev => setQtde(ev.target.value)}></input>
            <button onClick={() => setNumeros(mega(qtde))}>
                Gerar Aposta
                </button>
            </div>
        </div>
    )
}