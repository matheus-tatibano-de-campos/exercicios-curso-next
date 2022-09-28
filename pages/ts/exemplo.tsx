import Pessoa from "../../components/Pessoa";

export default function exemploTS() {
    return (
        <div>
            <Pessoa nome='pedro' idade={15}/>
            <Pessoa nome='maria' idade={17}/>
        </div>
    )
}