import SearchBar from "../SearchBar/SearchBar"
import "./ToolBar.css";
const ToolBar = () => {
    return (
        <div className="toolbar">
            <label htmlFor="sort" className="label">Sort</label>
            <select id="sort" className="sort">
            <option>Ascending</option>
            <option>Descending</option>
            <option>Completion</option>
            </select>
            <SearchBar className="searchBar"/>
        </div>
    )
}

export default ToolBar;