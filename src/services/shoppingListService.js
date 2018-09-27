import http from './httpService';

const apiUrl = "http://127.0.0.1:8080/api/v1/shoppingList"

async function getAllItems() {
  try {
    const response = await http.get(apiUrl);
    if (response.status === 200)
      return response.json();
  } catch (error) {
    alert(error);
  }
}

export default {
  getAllItems
};