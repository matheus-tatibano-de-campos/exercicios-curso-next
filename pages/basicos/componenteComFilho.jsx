import Item from "../../components/Item";
import Lista from "../../components/Lista";

export default function componenteComFilho() {
    return (
        <div>
            <Lista>
               <Item conteudo="item#1"></Item>
               <Item conteudo="item#22"></Item>
               <Item conteudo="item#3"></Item>
            </Lista>
        </div>
    )
}