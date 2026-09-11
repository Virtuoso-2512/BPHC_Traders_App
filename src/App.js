import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Error from "./pages/Error";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import Events from "./pages/Events";
import About from "./pages/About";

export default function App(){
    return <Router>
        <Topbar/>
        <div className="trueApp">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about-us" element={<About/>}/>
                <Route path="/events" element={<Events/>}/>
                <Route path="*" element={<Error/>} />
            </Routes>
            <Footer/>
        </div>
    </Router> 
}
