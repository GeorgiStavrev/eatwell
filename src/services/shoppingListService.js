import http from "./httpService";
import logger from "./logService";

const route = "/api/v1/shoppingList";

async function getAllItems() {
  try {
    const response = await http.get(route);

    if (response.status === 200) return response.data.data;
  } catch (error) {
    logger.log("http call error", error);
  }
}

export default {
  getAllItems
};
