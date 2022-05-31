
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Navbar from './page/common/Navbar';
import Footer from './page/common/Footer';
import Home from './page/Home/Home';
import Login from './page/Home/Authentication/Login';
import SignUp from './page/Home/Authentication/SignUp';
import ADVERTISE from './page/Home/AD_Section/ADVERTISE';
import Publisher from './page/Home/Publisher/Publisher';
import Contact from './page/Home/Contact';
import Influencer from './page/Home/Empety_Files/Influencer';
import Blog from './page/Home/Empety_Files/Blog';
import Services from './page/Home/Services/Services';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/advertisement' element={<ADVERTISE />} />
          <Route path='/publisher' element={<Publisher />} />
          <Route path='/influencer' element={<Influencer />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/log-in' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
