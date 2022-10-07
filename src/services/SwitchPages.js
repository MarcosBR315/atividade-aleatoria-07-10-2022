import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../pages/home/Home";
import Cadastro from "../pages/cadastro/Cadastro";
import Login from "../pages/login/Login";

export default function SwitchPages(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Cadastro" element={<Cadastro/>} />
      </Routes>
    </Router>
  )
}