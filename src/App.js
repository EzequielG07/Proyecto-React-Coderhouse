import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a la lista de articulos" />
    </>
  );
};

export default App;
