import Header from "./components/Header/Header";
import Profille from './components/Profille/Profille';
import Statistics from "./components/Statistics-glob/Statistics";
import Timer from "./components/Timer/Timer";
import Todos from "./components/Todos/Todos";
import Footer from "./components/Footer/Footer";
import Sliders from "./components/Slider/Slider";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";


function App() {
  return (
    <>



      <Profille/>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
          <Header />
          <Timer />
          <Todos />
          <Sliders />
          <Footer />
          </>
        }/>
  
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/auth" element={<SignUp/>}/>
        {/* <Statistics/> */}
      </Routes>


    </>
  );
}

export default App;
