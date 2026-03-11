import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Cards from '../Cards/Cards';
import './Mainpage.css'
import Lottie from "lottie-react";
import lottie from "../../assets/foodies.json";

function Mainpage() {
const [data, setData] = useState([]);
const [input, setInput] = useState("");
const [msg, setMsg] = useState("");

function RequiredInput(e){
    setInput(e.target.value);
}


    async function searchDish() {
    if (input.trim() === "") {
        setMsg("Please enter something!!");
        setData([]); 
        return;
    } 
    else {
        setMsg(""); 
        try {
            const response = await axios.get(`${import.meta.env.VITE_MEAL_API_URL}search.php?s=${input}`);
            const fetched = response.data.meals;
            
            if (!fetched) {
                setMsg("No recipes found. Try another dish!");
                setData([]);
            } 
            else {
                setData(fetched);
            }
        } catch (error) {
            setMsg("Something went wrong with the API connection.");
            console.error(error);
        }
    }
}

    return (
        <div className='main'>
            <div className="flex justify-center items-center ">
                <Lottie animationData={lottie} loop={true} style={{ height: "50vh", width: "100vw" }} />
            </div>
        <div>
            <h5 className="description">Discover, cook, and enjoy delicious recipes tailored to your taste.</h5>
        </div>
        
        <div className="container">
            <div className="search-bar">
                <input className="text" type="text" placeholder="Enter the Dish" onChange={RequiredInput}/>
                <button className="button" onClick = {searchDish} >Search</button>
            </div>
            <h4 className='invalid'>{msg}</h4>
            <div className="cards">
                <Cards details={data}/>
            </div>
            
        </div>

        </div>
    )
}

export default Mainpage