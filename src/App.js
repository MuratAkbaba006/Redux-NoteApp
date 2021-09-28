import "./App.scss";
import SearchBar from "./components/SearchBar";
import NoteArea from "./components/NoteArea";
import NoteList from "./components/NoteList";

function App() {
  return (
    <div className="App" >
      <header>
        <h1>Note App</h1>
      </header>
      <SearchBar />
      <NoteArea />
      <NoteList />
    </div>
  );
}

export default App;
