
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Navbar from './page/common/Navbar';
import Footer from './page/common/Footer';
import Home from './page/Home/Home';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
