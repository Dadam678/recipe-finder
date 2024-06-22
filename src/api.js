const APP_ID = '0b947af5';
const APP_KEY = 'c772643b8638623c66317c04a91521c3';

export const fetchRecipes = async (query) => {
  const response = await fetch(
    `https://api.edamam.com/api/recipes/v2?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&type=public`
  );
  const data = await response.json();
  return data.hits;
};
