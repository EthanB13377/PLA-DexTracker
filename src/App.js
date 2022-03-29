import logo from './logo.svg';
import './App.css';
import NavBar from './Components/UI-components/NavBar/NavBar';
import mainImage from "./Images/main_image.jpeg"
import Card from './Components/UI-components/Card/Card';
import ToolBar from './Components/UI-components/ToolBar/ToolBar';

function App() {
  return (
    <div className="App">
      <div>
      <NavBar />
      <h1>Pokémon Legends Arceus PokeDex Tracker</h1>
      <p>The number one place to track your tasks to complete the Pokédex in Pokemon Legends Arceus</p>
      <img src={mainImage} alt="Pokémon Legends Arecues Branding" className="main-img"/>
      </div>
      <div>
        <h2>The PokéDex</h2>
        <ToolBar />
        <Card />
      </div>
    </div>
  );
}

export default App;
