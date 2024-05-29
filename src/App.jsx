import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import AboutUs from "./routes/AboutUs"
import Blogs from "./routes/Blogs"
import ContactUs from "./routes/ContactUs"
import Services from "./routes/Services"
import Teams from "./routes/Teams"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route  path="/team" element={<Teams />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/services" element={<Services />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
