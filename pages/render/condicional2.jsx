import Lf from "../../components/Lf"

export default function condicional2() {
    const numero = 11
    return (
        <div>
            <Lf teste={numero %2 === 0}>
            <h1>O Numero {numero} é par</h1>
            </Lf>
            <Lf teste={numero %2 === 1}>
            <h1>O Numero {numero} é impar</h1>
            </Lf>
        </div>

    )
}