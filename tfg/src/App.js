import "./App.css";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Personajes from "./pages/Personajes";
import Error from "./pages/Error";
import Tienda from "./pages/Tienda";
import Multimedia from "./pages/Multimedia";
import Noticias from "./pages/Noticias";
import Test from "./pages/Test";
import Login from "./pages/Login";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/Personajes" element={<Personajes />}></Route>
        <Route path="/Tienda" element={<Tienda />}></Route>
        <Route path="/Multimedia" element={<Multimedia />}></Route>
        <Route path="/Noticias" element={<Noticias />}></Route>
        <Route path="/Test" element={<Test />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Error" element={<Error />}></Route>
        <Route path="/*" element={<Navigate to='/Error' />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
