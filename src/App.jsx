import { useState } from 'react'
import Axios from 'axios'
import './components/App.css'
import RecipeList from './components/RecipeList'
import './components/RecipeList.css'


const API_ID = "eb5c29b8"
const API_KEY = "b7e599bd2cf34cee4356dae7f40917d0"

function App() {

  const [timeoutId, updateTimeOutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);

  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${API_ID}&app_key=${API_KEY}`);
    console.log(response);
    console.log(`responses updated: ${response.data.hits}`);
    console.log(response.data.hits);
    updateRecipeList(response.data.hits);
  }

  const onTextChange = (event) => {
    clearTimeout(timeoutId)
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 500)
    updateTimeOutId(timeout);
  };

  return (
    <div className="container">
      <div className="Header">
        <div className="AppNameComponent">
          <img className="AppIcon" src="hamburger.svg" />
          Recipe Finder
        </div>
        <div className="SearchComponent">
          <img src="/search-icon.svg" />
          <input className="SearchInput" on onChange={onTextChange} />
        </div>
      </div>
      <div className='RecipeListContainer'>
        {recipeList.length ? (recipeList.map((recipeObj, index) => {
          return <RecipeList key={index} recipeObj={recipeObj.recipe} />
        })) : (
          <img className='placeHolder' src='public\hamburger.svg' />
        )}
      </div>
    </div>
  )
}

export default App
