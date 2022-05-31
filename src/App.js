
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Navbar from './page/common/Navbar';
import Footer from './page/common/Footer';
import Home from './page/Home/Home';
import Login from './page/Home/Authentication/Login';
import SignUp from './page/Home/Authentication/SignUp';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/log-in' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
       
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
