import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MoviesContainer } from "./components/MoviesContainer/MoviesContainer";


function App() {
 

  return (
    <div className="App">
      <Header />
      <MoviesContainer />
      <Footer />
    </div>
  );
}

export default App;
