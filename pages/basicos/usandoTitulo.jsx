import Titulo from '../../components/titulo'

export default function usandoTitulo() {
    return (
        <div>
           <Titulo
            principal = 'Página de cadastro'
           secundario = 'Incluir, alterar e excluir coisas'
           />
           <Titulo
            principal = 'Página de login'
           secundario = 'Informe o seu email e senha'
           pequeno = {true}
           />
        </div>
    )
}