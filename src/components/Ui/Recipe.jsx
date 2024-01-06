import * as React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Container} from "reactstrap";
import {useEffect, useState} from "react";
import axios from 'axios';

export const Recipe = ({props, showButton = true}) => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get(`http://localhost:3030/recipes`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <Container
            className="flex-col text-center p-auto">
            <div className="grid grid-cols-3">
                {
                    data.map((d, i) => i < 3 && (
                        <div className="m-4 w-90">
                            <div
                                className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <Link to={'/'}>
                                    <img className="rounded-t-lg h-80  " src={d.image} alt=""/>
                                </Link>
                                <div className="p-5">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {d.category}
                                        </h5>
                                </div>
                                {showButton && (
                                    <Link
                                        href="#"
                                        className="inline-flex items-center px-3 py-2 mb-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        to={'/recipes'}>
                                        Read more
                                    </Link>
                                )}
                            </div>

                        </div>
                    ))
                }
            </div>
        </Container>
    );
}