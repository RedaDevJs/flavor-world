import React from "react";
import Slider from "react-slick";
import {Button, Container} from "reactstrap";
import "../../styles/slider.css";
import {Link} from "react-router-dom";

const HomeSlide = () => {
    const settings = {
        fade: true,
        speed: 2000,
        autoplaySpeed: 3000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
    };
    return (

        <Slider {...settings} className="hero__slider mt-0 mb-0 ">
            <div className="slider__item slider__item-01 mt-0 mb-0">
                <Container>
                    <div className="slider__content">
                        <h1 className="text-light mb-3 mt-6">Main Courses</h1>
                        <h4 className="text-light mb-4">Main Courses</h4>
                    </div>
                    <Link
                        className="inline-flex items-center px-3 py-2 bg-yellow-400 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        to={'/recipes'}>
                        Read more
                    </Link>
                </Container>
            </div>

            <div className="slider__item slider__item-02 mt-0 mb-0">
                <Container>
                    <div className="slider__content">
                        <h1 className="text-light mb-3 mt-6">Salads</h1>
                        <h4 className="text-light mb-4">Salads</h4>
                    </div>
                    <Link
                        className="inline-flex items-center px-3 py-2 bg-yellow-400 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        to={'/recipes'}>
                        Read more
                    </Link>
                </Container>
            </div>

            <div className="slider__item slider__item-03 mt-0 mb-0">
                <Container>
                    <div className="slider__content">
                        <h1 className="text-light mb-3 mt-6">Desserts</h1>
                        <h4 className="text-light mb-4">Desserts</h4>
                    </div>
                    <Link
                        className="inline-flex items-center px-3 py-2 bg-yellow-400 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        to={'/recipes'}>
                        Read more
                    </Link>
                </Container>
            </div>
        </Slider>
    );
};
export default HomeSlide;
