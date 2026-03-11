import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Recipe.css';
import Lottie from "lottie-react";
import Cooking from "../../assets/cooking.json";

function Recipe() {
    const { mealid } = useParams();
    const [info, setInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getRecipe() {
            try {
                setLoading(true);
                // Updated to use environment variable and proper .get syntax
                const response = await axios.get(`${import.meta.env.VITE_MEAL_API_URL}lookup.php?i=${mealid}`);
                
                if (response.data.meals) {
                    setInfo(response.data.meals[0]);
                } else {
                    setInfo(null);
                }
            } catch (error) {
                console.error("Error fetching recipe:", error);
                setInfo(null);
            } finally {
                setLoading(false);
            }
        }
        
        if (mealid) {
            getRecipe();
        }
    }, [mealid]);

    if (loading) return <div className="recipe-page"><p>Loading yummy details...</p></div>;

    return (
        <div className="recipe-page">
            {!info ? (
                <p>Data Not Found</p>
            ) : (
                <div>
                    <div className="set">
                        <h1 className="mainHeading">Recipe Details</h1>
                        <Lottie animationData={Cooking} loop={true} style={{ height: "20vh" }} />
                    </div>
                    <h2 className="mainButton">{info.strMeal}</h2>
                    <div className="items">
                        <img className="image" src={info.strMealThumb} alt={info.strMeal} />
                        <div>
                            <h3 className="details">Instructions</h3>
                            <p className="info">{info.strInstructions}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Recipe;