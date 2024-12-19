import React, { useState } from 'react'
import './RecipeList.css'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const RecipeList = ({ recipeObj }) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <Dialog open={show}>
                <DialogTitle id="alert-dialog-slide-title">Ingrediants</DialogTitle>
                <DialogContent>
                    <table>
                        <thead>
                            <th>Ingredients</th>
                            <th>Weight</th>
                        </thead>
                        <tbody>
                            {recipeObj.ingredients.map((ingredientObj) => (
                                <tr>
                                    <td>{ingredientObj.text}</td>
                                    <td>{ingredientObj.weight}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </DialogContent>
                <DialogActions>
                    <button className='IngrediantsText' onClick={()=> window.open(recipeObj.url)}>See More</button>
                    <button className='SeeMoreText' onClick={()=> setShow(false)}>Close</button>
                </DialogActions>
            </Dialog>

            <div className='RecipeContainer'>
                <img className="CoverImage" src={recipeObj.image} />
                <span className='RecipeName'>{recipeObj.label}</span>
                <span className='IngrediantsText' onClick={() => setShow(true)}>Ingrediants</span>
                <span className='SeeMoreText' onClick={() => window.open(recipeObj.url)}>See Whole Recipe</span>
            </div>
        </>

    )
}

export default RecipeList
