import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";

//RRD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "./components/calculator/Calculator";
import Calculate from "./components/calculator/Calculate";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/calculator' element={<Calculator />} />
                    <Route path='/calculate' element={<Calculate />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
