import React, {useState} from 'react'
import NavBar from '../NavigationBar/NavBar';
import './Home.css'
import recipes from './components/YouTubeVideo';

export default function Home() {

    //Use state is added for updating the list of recipes and display
    const [ recipeList, setRecipeList ]  = useState([...recipes]);
    const [ newRecipeList, setNewRecipeList ] = useState(recipeList);

    //Display Recipes function searches the receipe searched and displays after updating usestate
    function displayRecipes() {
        let searchInput = document.getElementById('search-input').value;

        const searchedList = (newRecipeList).filter(recipe => (recipe.name).includes(searchInput));

        setRecipeList(searchedList);
    }

    return (
        <div>
            <div className="home-bg-container">
            <NavBar />
                <div className="heading-container">
                    <h1>Niharshi's kitchen</h1>
                    <p>Welcome to the OFFICIAL website of Niharshi's ktichen. search for the best dishes made for you by us.</p>
                    <input type="search" 
                    placeholder="what is cookin your mind.." 
                    class="search-box"
                    id = "search-input"
                    onChange={displayRecipes} />
                </div>

            </div>
            <div className="recipe-display-container">

                {/* Displaying all the searched recipes */}

                {recipeList.map(recipe => {
                    return (
                        <div class="card" key={recipe.id}>
                            <iframe class="video" src={recipe.video}></iframe>
                            <p>{recipe.name}</p>
                            <p className="tagline">You must try it!!!</p>
                        </div>
                    );
                })}
               
            </div>
        </div>
    )
}
