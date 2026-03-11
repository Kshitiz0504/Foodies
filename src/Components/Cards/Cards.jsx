import React from 'react';
import { NavLink } from 'react-router-dom';
import './Cards.css' 

function Cards ({details}) {
    return (
        <div className="first">
        <div className='meals'>
            {!details ? "" : details.map((currItem) => {
                return (
                    <div className='mealImg' key={currItem.idMeal}>
                        <img src={currItem.strMealThumb}/>
                        <p className="mealName"> {currItem.strMeal} </p>
                        <NavLink to={`/${currItem.idMeal}`}  style={{ textDecoration: 'none' }}>
                        <button className="recipe">Recipe</button></NavLink>
                    </div>
                )
            })
            
            }
        </div>
        </div>
    )
}

export default Cards