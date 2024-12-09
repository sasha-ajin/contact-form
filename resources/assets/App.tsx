import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Contact} from "@/modules/contact/Contact";
import {Home} from '@/modules/home/Home';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/contacts" element={<Contact/>}/>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </Router>
        </div>
    );
};

export default App;
