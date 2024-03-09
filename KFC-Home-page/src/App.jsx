import "./App.css";
import "./Navbar.css";
import NavBar from "./Components/NavBar";
import Carousel from "./Components/Carosul";
import MenuCards from "./Components/MenuCards";

function App() {
  return (
    <>
      <NavBar />
      <Carousel />
      <MenuCards />
      {/* <div className="col-4">Contact Me (Rameez Ashraf)</div> */}
      <div className="d-flex justify-content-center">
        Contact Me (Rameez Ashraf)
      </div>
    </>
  );
}

export default App;
