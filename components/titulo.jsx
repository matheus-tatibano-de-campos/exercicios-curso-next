export default function titulo(props) {
    return props.pequeno ? (
        <>
        <p>{props.principal}</p>
        <p>{props.secundario}</p>
        </>
    ) : (
        <>
        <h1>{props.principal}</h1>
        <h1>{props.secundario}</h1>
        </>

    )
}