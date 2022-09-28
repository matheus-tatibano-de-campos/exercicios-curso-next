import Filho from "./Filho";

export default function Pai(props) {
    return (
        <div>
            <h1>Família {props.familia}</h1>
            <Filho nome='matheus' familia={props.familia}/>
            <Filho nome='andre' familia={props.familia}/>
            <Filho nome='rafael' familia={props.familia}/>
            <Filho {...props} nome='Gabriel'/>
        </div>
    )
}