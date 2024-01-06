import React from 'react';
import HomeSlide from "../components/Ui/HomeSlide";
import {Recipe} from "../components/Ui/Recipe";
import {Link} from "react-router-dom";
import {Container} from "reactstrap";

const Home = () => {
    return (
        <>
            <HomeSlide/>
            <Container className="text-center mb-5 mt-5 p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Recipe/>
            </Container>

        </>
    );
};
export default Home;
