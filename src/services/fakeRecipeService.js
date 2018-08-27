const recipes = [
  {
    _id: "1",
    dishId: "1",
    thumbnail: "https://img.youtube.com/vi/m88rF0rwHo8/mqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/m88rF0rwHo8",
    videoShown: false,
    name: "How to Make Classic Pad Thai | Cooking with Poo",
    tags: "foodtube"
  },
  {
    _id: "2",
    dishId: "1",
    thumbnail: "https://img.youtube.com/vi/F5-nfxQjfZU/mqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/F5-nfxQjfZU",
    videoShown: false,
    name: "The BEST Pad Thai Recipe",
    tags: "asianathome"
  }
];

export async function getAllRecipes() {
  return recipes;
}

export async function getDishRecipes(dishId) {
  return recipes.filter(r => r.dishId === dishId);
}
