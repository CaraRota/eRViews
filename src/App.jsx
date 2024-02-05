import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";

//RRD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "./components/calculator/Calculator";
import Calculate from "./components/calculator/Calculate";

//Context
import { ApiProvider } from "./context/apiContext";

function App() {
    return (
        <>
            <Router>
                <ApiProvider>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Homepage />} />
                        <Route path='/calculator' element={<Calculator />} />
                        <Route path='/calculate' element={<Calculate />} />
                    </Routes>
                </ApiProvider>
            </Router>
        </>
    );
}

export default App;
