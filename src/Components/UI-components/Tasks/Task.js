import CheckBox from "../../Generic/CheckBox";

const Task = (props) => {
    console.log(props.tasks)
    const TaskList = props.tasks;
    const Task = Object.keys(TaskList).map(task => {
        console.log(TaskList[task]);
        return(
            <tr>
                <td>{TaskList[task].name}</td>
                {Object.keys(TaskList[task]).map((check) =>(
                    <td><CheckBox/></td>
                ))}
            </tr>
        )
    })
    return(
        <ul>{Task}</ul>
    );
}

export default Task;