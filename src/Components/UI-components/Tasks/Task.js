import CheckBox from "../../Generic/CheckBox";
import "./Tasks.css"
const Task = (props) => {
    const TaskList = props.tasks;
    const Task = Object.keys(TaskList).map(task => {
        console.log(TaskList[task]);
        return(
            <tr className="table-row">
                <td>{TaskList[task].name}</td>
                {Object.keys(TaskList[task]).map((check) =>(
                    <td><CheckBox task={TaskList[task].task}/></td>
                ))}
            </tr>
        )
    })
    return(
        <ul>{Task}</ul>
    );
}

export default Task;