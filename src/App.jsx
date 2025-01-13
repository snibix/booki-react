import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Accueil from "./pages/Accueil";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Accueil />
      <Footer />
    </div>
  );
}

export default App;
