import "./Card.css"
import Task from "../Tasks/Task";
import PokemonData from "../../../PokemonData.json";
import Type from "../../Flexible/Types/Type";
import Status from "../Status/Status";
const Card = () => {

    const data = PokemonData;    
    console.log(data);

    const Pokemons = Object.keys(data).map(pokemon => {
        console.log(data[pokemon]);
        return(
            <div className="card">
                <h3>{pokemon}</h3>
                <p>{data[pokemon].desc}</p>
                {Object.keys(data[pokemon].type).map((type) => (
                    <div className="types">
                    <Type type={data[pokemon].type[type]} />
                    </div>
                ))}
                <Task tasks={data[pokemon].tasks}/>
                <Status />
            </div> 
        )
    })
    return(
        <ul>{Pokemons}</ul>
    )
}

export default Card;