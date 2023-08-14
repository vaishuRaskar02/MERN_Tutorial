import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";

const App = () => (
  <>
    <Header />
    <main className="App">
      <LandingPage />
    </main>
    <Footer />
  </>
);

export default App;
