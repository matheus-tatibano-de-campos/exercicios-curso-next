import listaProdutos from "../../data/listaProdutos";

export default function repeticao2() {

    const comBorda = {
        border: '1px solid #0003',


    }

    function renderizarLinha() {
        return listaProdutos.map(produto=> {
            return (
                <tr key={produto.id}>
                    <td style={comBorda} >{produto.id}</td>
                    <td style={comBorda} >{produto.nome}</td>
                    <td key={comBorda} >{produto.preco}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Codigo</th>
                            <th>Nome</th>
                            <th>Preco</th>
                    </tr>
                </thead>
                <tbody>
                    {renderizarLinha()}
                </tbody>
            </table>
        </div>
    )
}