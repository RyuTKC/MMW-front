import "core-js/stable";
import React from "react";
import Machines from "pages/Machines";
import Systems from "pages/Systems";
import Top from "pages/Top";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom" /* v5 */
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom" /* v6 */

export default () => {
    return (
        /* v5 */
        <>
            {/* <Switch> */}
            <Route path="/" component={Top} />
            <Route path="/machines" component={Machines} />
            <Route path="/systems" component={Systems} />
            <Route path="/products" component={Systems} />
            <Route path="/companies" component={Systems} />
            <Route path="/users" component={Systems} />
            {/* </Switch> */}
        </>
        /* v6 */
        // <Routes>
        //     <Route path="/" element={<Top />} />
        //     <Route path="/machines" element={<Machines />} />
        //     <Route path="/systems" element={<Systems />} />
        //     <Route path="/products" element={<Systems />} />
        //     <Route path="/companies" element={<Systems />} />
        //     <Route path="/users" element={<Systems />} />
        // </Routes>
    );
}