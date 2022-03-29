import "./Type.css"
const Type = (props) => {
    console.log(props.type)
    return (
        <div className={props.type}>
            <p>{props.type}</p>
        </div>
    )
}

export default Type;