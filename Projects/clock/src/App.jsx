import Header from "./components/Header";
import Slogan from "./components/Slogan";
import Currenttime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <>
      <center>
        <Header className="header" />
        <Slogan />
        <Currenttime />
      </center>
    </>
  );
}

export default App;
