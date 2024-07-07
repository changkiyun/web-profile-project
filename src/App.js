import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from "./components/mainpage/MainPage";
import Work from "./components/work/Work";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navbar">
          <Navbar />
          <div className="content">
            <Routes>
             <Route path="/" element={<MainPage/>} />
             <Route path="/work" element={<Work/>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
