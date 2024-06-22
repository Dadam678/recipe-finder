import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';

const RecipeModal = ({ open, recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{recipe.label}</DialogTitle>
      <DialogContent>
        <img src={recipe.image} alt={recipe.label} style={{ width: '100%' }} />
        <Typography variant="body1" gutterBottom>
          {recipe.instructions ? recipe.instructions.join('. ') : 'No instructions available.'}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default RecipeModal;
