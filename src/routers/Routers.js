import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import Team from "../pages/Team";
import About from "../pages/About";


const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/recipes" element={<Recipes />}  />
            <Route path="/team" element={<Team />}  />
            <Route path="/about" element={<About />}  />
        </Routes>
    );
};
export default Routers;
