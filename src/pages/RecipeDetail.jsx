import {Container} from "reactstrap";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

export default function RecipeDetail({props}) {
    const [ingredients, setIngredients] = useState([""]);
    const [steps, setSteps] = useState([""]);
    const [inputCount, setInputCount] = useState(1);
    const {id} = useParams();
    const [inputData, setInputData] = useState({});
    const [countries, setCountries] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:3032/countries`)
            .then(res => {
                console.log(res.data)
                setCountries(res.data)
            })
            .catch(err => console.log(err))
    }, []);
    useEffect(() => {
        axios
            .get(`http://localhost:3031/categories`)
            .then(res => {
                console.log(res.data)
                setCategories(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        axios
            .get(`http://localhost:3030/recipes/${id}`)
            .then(res => setInputData(res.data))
            .catch(err => console.log(err))
    }, [id]);

    const handleAddIngredient = () => {
        setIngredients([...ingredients, ""]);
        setInputCount(inputCount + 1);
    };

    const handleIngredientChange = (index, value) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = value;
        setIngredients(newIngredients);
    };

    const handleAddStep = () => {
        setSteps([...steps, ""]);
    };

    const handleStepChange = (index, value) => {
        const newSteps = [...steps];
        newSteps[index] = value;
        setSteps(newSteps);
    };

    return (<Container
        className=" px-48 py-8 bg-white border-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-3xl text-center font-bold uppercase mb-5">recipe details</h1>
        <Container
            className="mb-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">


            <div className="mb-4 sm:col-span-3">
                <label htmlFor="photo" className="block mt-2 text-sm font-medium leading-6 text-gray-900">
                    Photo
                </label>
                <div
                    className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                        <img className="rounded-t-lg h-80  " src={inputData.image} alt=""/>
                        <div className="mt-4 flex-col text-center text-sm leading-6 text-gray-600">
                            <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file"
                                       className="sr-only"/>
                            </label>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                </div>
            </div>
        </Container>
        <Container
            className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="mb-4 sm:col-span-3">
                <label htmlFor="username" className="block mt-2 text-sm font-medium leading-6 text-gray-900">
                    Author
                </label>
                <div className="mt-2">
                    <div
                        className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            type="text"
                            name="author"
                            id="author"
                            autoComplete="author"
                            className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="janesmith"
                            value={inputData.author}
                            onChange={e => setInputData({...inputData, author: e.target.value})}
                        />
                    </div>
                </div>
            </div>
            <div className="mb-4 sm:col-span-3">
                <label htmlFor="first-name"
                       className="block text-sm font-medium leading-6 text-gray-900">
                    Title
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={inputData.title}
                    />
                </div>
            </div>

            <div className="mb-4 sm:col-span-3">
                <label htmlFor="category"
                       className="block text-sm font-medium leading-6 text-gray-900">
                    Category
                </label>
                <div className="mt-2">
                    <select
                        id="category"
                        name="category"
                        autoComplete="category-name"
                        className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        value={inputData.category}
                    >
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="mb-4 sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                    Recipe Origin
                </label>
                <div className="mt-2">
                    <select
                        id="country"

                        name="country"
                        autoComplete="country-name"

                        className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        value={inputData.origin}
                        onChange={(e) => setInputData({...inputData, origin: e.target.value})}
                    >
                        {countries.map((country, index) => (
                            <option key={index} value={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </Container>
        <Container
            className="bg-white mt-2   border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <label htmlFor="username"
                   className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                Ingredients
            </label>
            {inputData.ingredients && inputData.ingredients.map((ingredient, index) => (<div key={index}>
                <input
                    type="text"
                    value={ingredient}
                    onChange={(e) => handleIngredientChange(index, e.target.value)}
                    className="block w-full  mt-3 mb-3  rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>))}

            <button
                type="button"
                onClick={handleAddIngredient}
                className="rounded-md mb-4 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Add Ingredient
            </button>
        </Container>
        <Container
            className="bg-white mt-2 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <label htmlFor="steps" className="mt-2  block text-sm font-medium leading-6 text-gray-900">
                Steps
            </label>
            {inputData.steps && inputData.steps.map((step, index) => (<div key={index}>
                <input
                    type="text"
                    value={step}
                    onChange={(e) => handleStepChange(index, e.target.value)}
                    className="block w-full  mt-3 mb-3  rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>))}
            <button
                type="button"
                onClick={handleAddStep}
                className="rounded-md  mb-4  bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Add Step
            </button>
        </Container>
        <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                Cancel
            </button>
            <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Save
            </button>
        </div>
    </Container>)
}
