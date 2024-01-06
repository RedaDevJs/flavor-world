import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Container} from "reactstrap";
import RecipeDetail from "../components/Ui/RecipeDetail";

const Recipes = ({props, showButton = true}) => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:3030/recipes`)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    const uniqueCategories = [...new Set(data.map((recipe) => recipe.category))];
    const [selectedCategory, setSelectedCategory] = useState("");
    const [countryOptions, setCountryOptions] = useState([]);
    const [selectedOrigin, setSelectedOrigin] = useState("");
    const [recipeOptions, setRecipeOptions] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState("");

    useEffect(() => {
        // Update country options based on the selected category
        const filteredCountries = data
            .filter((recipe) => !selectedCategory || recipe.category === selectedCategory)
            .map((recipe) => recipe.origin);
        const uniqueCountries = [...new Set(filteredCountries)];
        setCountryOptions(uniqueCountries);

        // Update recipe options based on the selected category and country
        const filteredRecipes = data
            .filter((recipe) => (!selectedCategory || recipe.category === selectedCategory) && (!selectedOrigin || recipe.origin === selectedOrigin))
            .map((recipe) => recipe.title);
        const uniqueRecipes = [...new Set(filteredRecipes)];
        setRecipeOptions(uniqueRecipes);
    }, [data, selectedCategory, selectedOrigin]);

    const handleCategoryChange = (value) => {
        setSelectedCategory(value);
        setSelectedOrigin("");
        setSelectedRecipe("");
    };

    const handleCountryChange = (value) => {
        setSelectedOrigin(value);
        setSelectedRecipe("");
    };

    const handleRecipeChange = (value) => {
        setSelectedRecipe(value);
    };

    const filteredData = data.filter((recipe) => (!selectedCategory || recipe.category === selectedCategory) && (!selectedOrigin || recipe.origin === selectedOrigin) && (!selectedRecipe || recipe.title === selectedRecipe));
    const {id} =useParams();
    const [inputData,setInputData] = useState({
        name: '',
        email: ''
    });
    useEffect(() => {
        axios
            .get(`http://localhost:3030/recipes/${id}`)
            .then(res=>setInputData(res.data))
            .catch(err=>console.log(err))
    }, []);


    return (<>
        <Container
            className="grid grid-cols-3 gap-8 p-4 mt-10 mb-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
                <select
                    id="categorySelect"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={selectedCategory}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                >
                    <option value="">Choose a category</option>
                    {uniqueCategories.map((category) => (<option value={category} key={category}>
                        {category}
                    </option>))}
                </select>
            </div>
            <div>
                <select
                    id="countrySelect"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={selectedOrigin}
                    onChange={(e) => handleCountryChange(e.target.value)}
                >
                    <option value="">Choose a country</option>
                    {countryOptions.map((origin) => (<option value={origin} key={origin}>
                        {origin}
                    </option>))}
                </select>
            </div>
            <div>
                <select
                    id="recipeSelect"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={selectedRecipe}
                    onChange={(e) => handleRecipeChange(e.target.value)}
                >
                    <option value="">Choose a recipe</option>
                    {recipeOptions.map((title) => (<option value={title} key={title}>
                        {title}
                    </option>))}
                </select>
            </div>
        </Container>

        <Container
            className="text-center p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="grid grid-cols-3 auto-rows-auto">
                {filteredData.map((d, i) => (<div className="m-4" key={i}>
                    <div
                        className=" flex flex-col p-3  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-t-lg h-80  " src={d.image} alt=""/>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {d.title}
                        </h5>
                        <div className='ml-10 p-3'>
                            <div className=' grid grid-cols-2 justify-items-start '>
                                <h1 className="mb-2 text-l font-bold">
                                    origin
                                </h1>
                                <h1>
                                    : {d.origin}
                                </h1>
                            </div>
                            <div className='grid grid-cols-2 justify-items-start '>
                                <h1 className="mb-2 text-l font-bold">
                                    category
                                </h1>
                                <h1>
                                    : {d.category}
                                </h1>
                            </div>
                        </div>
                        <div className="flex text-center mb-3 mt-1 justify-items-center">
                            <Link
                                className=" items-center w-full px-4 py-2  text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                to={`/recipedetail/${d.id}`} //onClick={handleRead}
                            >View</Link>
                        </div>

                    </div>
                </div>))}
            </div>

        </Container>
        <RecipeDetail/>
    </>);
};

export default Recipes;
