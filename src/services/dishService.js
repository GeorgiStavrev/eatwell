import http from "./httpService";

const apiUrl = "http://127.0.0.1:8080/api/v1/dish";

async function getDishes() {
  try {
    const response = await http.get(apiUrl);

    if (response.status === 200) return response.data.data;
  } catch (error) {
    return [];
  }
}

async function getDishByPermalink(permalink) {
  return null; //dishes.find(d => d.permalink === permalink);
}

export default {
  getDishes,
  getDishByPermalink
};
