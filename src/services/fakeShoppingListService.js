const apiUrl = "http://127.0.0.1:8080/shoppingList/"

async function getAllItems() {
  try {
    const response = await fetch(apiUrl);
    if (response.status === 200)
      return response.json();
  } catch (error) {
    alert(error);
  }
}

export default {
  getAllItems
};