import data from './assets/data.json'
import './App.css';
import CharacterCard from './components/CharacterCard';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <h1>Rick and Morty Characters</h1>
      <h2>Character card:</h2>
      <div className="container">
        {data.map(element => {

          return (<CharacterCard 
            name = {element.name}
            image = {element.image}
            lastLocation = {element.location.name}
            episode = {element.episode}
            status = {element.status}
            species = {element.species}
          />)
        })}
      </div>
      </header>
    </div>
  );
}

export default App;
