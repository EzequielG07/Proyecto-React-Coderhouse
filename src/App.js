import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a la lista de articulos" />
      <hr />
      <h1 className="titulo">Proyecto React</h1>;<p>Primeras pruebas</p>;
    </>
  );
};

export default App;
