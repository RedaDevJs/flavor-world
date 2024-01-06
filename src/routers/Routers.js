import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import About from "../pages/About";
import RecipeDetail from "../pages/RecipeDetail";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/recipes" element={<Recipes />}  />
            <Route path="/recipedetail/:id" element={<RecipeDetail/>}  />
            <Route path="/about" element={<About />}  />
        </Routes>
    );
};
export default Routers;
