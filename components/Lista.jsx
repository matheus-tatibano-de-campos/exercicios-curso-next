export default function Lista(props) {
    return (
        <div>
            <h1>Lista de Coisas</h1>
            <ul style={{
                padding:0,
                listStyle: 'none'
            }}>
                {props.children}
            </ul>
        </div>
    )

}