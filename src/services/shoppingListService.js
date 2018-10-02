import http from "./httpService";
import logger from "./logService";

const apiUrl = "http://127.0.0.1:8080/api/v1/shoppingList";

async function getAllItems() {
  try {
    const response = await http.get(apiUrl);

    if (response.status === 200) return response.data.data;
  } catch (error) {
    logger.log("http call error", error);
  }
}

export default {
  getAllItems
};
