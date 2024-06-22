import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import RecipeModal from './RecipeModal';

const RecipeList = ({ recipes }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = (recipe) => {
    if (recipe.url) {
      window.open(recipe.url, '_blank');
    } else if (recipe.instructions && recipe.instructions.length > 0) {
      setSelectedRecipe(recipe);
      setOpen(true);
    }
  };

  const handleClose = () => {
    setSelectedRecipe(null);
    setOpen(false);
  };

  return (
    <>
      <Grid container spacing={2}>
        {recipes.map((hit, index) => {
          const recipe = hit.recipe;
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card onClick={() => handleClickOpen(recipe)}>
                <CardMedia
                  component="img"
                  height="140"
                  image={recipe.image}
                  alt={recipe.label}
                />
                <CardContent>
                  <Typography variant="h6">{recipe.label}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {recipe.source}
                  </Typography>
                  <Typography variant="body2">
                    Calories: {Math.round(recipe.calories)}
                  </Typography>
                  <Typography variant="body2">
                    Cuisine Type: {recipe.cuisineType.join(', ')}
                  </Typography>
                  <Typography variant="body2">
                    Meal Type: {recipe.mealType.join(', ')}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <RecipeModal open={open} recipe={selectedRecipe} onClose={handleClose} />
    </>
  );
};

export default RecipeList;
