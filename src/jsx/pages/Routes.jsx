import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/machines" />
                <Route path="/systems" />
                <Route path="/companies" />
                <Route path="/users" />
            </Routes>
        </Router>
    );
}