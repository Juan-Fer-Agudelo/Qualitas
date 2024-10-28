import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home'
import Login from './components/Login';
import Register from './components/Register';
import Services from './components/Services';
import AreasEvaluacion from './components/AreasEvaluacion';
import AreasEvaluacion2 from './components/AreasEvaluacion2';
import ReadingForm from './components/ReadingForm';
import MathForm from './components/MathForm';
import CivicCompetenciesForm from './components/CivicCompetenciesForm';
import NaturalSciencesForm from './components/NaturalSciencesForm';
import EnglishForm from './components/EnglishForm';
import Pruebacompleta from './components/Pruebacompleta';


//import SpecificTest from './components/SpecificTest'; -mas adelante los vamos a usar
//import Contact from './components/Contact';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                
                <Route path="/lectura-critica" element={<ReadingForm />} />
                <Route path="/Matematicas" element={<MathForm />} />
                <Route path="/sociales-ciudadanas" element={<CivicCompetenciesForm />} />
                <Route path="/ciencias-naturales" element={<NaturalSciencesForm />} />
                <Route path="/ingles" element={<EnglishForm/>} />
                <Route path="/Pruebacompleta" element={<Pruebacompleta/>} />
                
                    {/* redirige la ruta al home */}
                    <Route path="*" element={<Navigate to="/Home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/Services" element={<Services/>} />
                    <Route path="/AreasEvaluacion2" element={<AreasEvaluacion2 />} />  {/* Ruta del componente al que quieres navegar */}

                    {/*<Route path="/contact" element={<Contact />} />*/}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
