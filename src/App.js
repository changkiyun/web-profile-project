import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Work from "./components/work/Work";
import Navigation from "./components/navbar/Navigation";
import MainPage from "./components/mainpage/MainPage";
import CopyRight from "./components/copyright/CopyRight";
import News from "./components/news/News";
import Info from "./components/info/Info";
import DetailPage from "./components/detailpage/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <Navigation />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/work" element={<Work />} />
            <Route path="/news" element={<News />} />
            <Route path="/info" element={<Info />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            
          </Routes>
        </div>
        <div className="copyright">
          <CopyRight />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
