import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/MainPage/MainPage";
import './components/elements/Chat.css'
import Second from "./components/elements/Second";
import Thirt from "./components/elements/Thirt";
import { Route, Routes } from "react-router-dom";
import Register from "./components/RegisterForm/RegisterForm";
import Login from "./components/RegisterForm/LoginForm";



function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path="/" Component={MainPage}/>
    <Route path="/Second" Component={Second}/>
    <Route path="/Thirt" Component={Thirt}/>
    <Route path="/Reg" Component={Register}/>
    <Route path="/Login" Component={Login}/>
   </Routes>
   </>
  );
}

export default App;
