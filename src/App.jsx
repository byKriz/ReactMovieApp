import "./App.scss";
import { Header } from "./components/Header/Header";
import { MoviesContainer } from "./components/MoviesContainer/MoviesContainer";


function App() {
 

  return (
    <div className="App">
      <Header />
      <MoviesContainer />
    </div>
  );
}

export default App;
