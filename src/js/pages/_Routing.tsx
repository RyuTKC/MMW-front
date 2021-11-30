import "core-js/stable";
import React from "react";
import Machines from "./Machines";
import Systems from "./Systems";
import Top from "./Top";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

export default ()=> {
    return (
        <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/machines" element={<Machines />} />
            <Route path="/systems" element={<Systems />} />
            <Route path="/products" element={<Systems />} />
            <Route path="/companies" element={<Systems />} />
            <Route path="/users" element={<Systems />} />
        </Routes>
    );
}