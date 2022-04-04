import "./Card.css"
import Task from "../Tasks/Task";
import PokemonData from "../../../PokemonData.json";
import Type from "../../Flexible/Types/Type";
import Status from "../Status/Status";
import PKImg from "../Image-Holder/PKImg";
const Card = () => {

    const data = PokemonData;    

    const Pokemons = Object.keys(data).map(pokemon => {
        return(
            <div className="card">
                <h3>{pokemon} - {data[pokemon].id}</h3>
                <p>{data[pokemon].desc}</p>
                {Object.keys(data[pokemon].type).map((type) => (
                    <div className="types">
                    <Type type={data[pokemon].type[type]} />
                    </div>
                ))}
                <PKImg />
                <table className="tables">
                <Task tasks={data[pokemon].tasks}/>
                </table>
                <Status />
            </div> 
        )
    })
    return(
        <ul>{Pokemons}</ul>
    )
}

export default Card;