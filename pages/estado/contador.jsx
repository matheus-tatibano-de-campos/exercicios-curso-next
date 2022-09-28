import {  useState } from "react"
import ContadorDisplay from "../../components/indireta1/ContadorDisplay"

export default function contador() {
    const [y, SetNumero] = useState(0)


    function Adiconar(){
        SetNumero(y + 1)
        
    }

    function Remover(){
        SetNumero (y - 1)
    }
    return (
        <div>
            <h1>Contador</h1>
            <ContadorDisplay numero ={y}/>
            <div>Valor </div>
            <button onClick={Adiconar}>Adiconar</button>
            <button onClick={Remover}>Remover</button>
        </div>
    )
}