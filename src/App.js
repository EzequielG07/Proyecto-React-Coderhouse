import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer greeting="Bienvenido a la lista de articulos" />
          }
        />
        {/* ----------------------------------Ojo estas no son las rutas segun la consigna----------------------------------- */}
        <Route path="/category/:idCategory" element={<ItemListContainer />} />
        <Route path="/item/:idItem" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
    //  <>
    //    <NavBar />
    //    <ItemListContainer greeting="Bienvenido a la lista de articulos" />
    //  </>
  );
};

export default App;
