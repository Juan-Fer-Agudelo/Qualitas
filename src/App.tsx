import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home'
import Login from './components/Login';
import Register from './components/Register';
//import Services from './components/Services';
//import Contact from './components/Contact';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    {/* redirige la ruta al home */}
                    <Route path="*" element={<Navigate to="/Home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    {/*<Route path="/services" element={<Services />} />*/}
                    {/*<Route path="/contact" element={<Contact />} />*/}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
