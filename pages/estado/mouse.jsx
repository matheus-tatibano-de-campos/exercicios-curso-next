import { useState } from "react"

export default function mouse() {
     const [x, setX] = useState(0)

     const arrayY  = useState(0)
     let y = arrayY[0]
     const setY = arrayY[1]

  
    const estilo = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ' #222',
        color: '#fff',
        height:'100vh'
    }

    function quandoMover(ev){
        setX(ev.clientX)
        setY(ev.clientY)
        console.log(ev.clientX, ev.clientY)
    }

    return (
      <div style={estilo} onMouseMove={quandoMover}>
        <span>Eixo X:{x} ?</span>
        <span>Eixo Y: {y}</span>
        </div>
    )
}