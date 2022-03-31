import { AxiosInstance } from "../../util/AxiosInstance";

export const getDishList = async () => {
  try {
    const dishes = await AxiosInstance.get("/api/dishes");
    return dishes;
  } catch (error) {
    throw error;
  }
};

export const getFilteredDishList = async (categories = []) => {
  const searchFilters = { categories };
  try {
    const result = await AxiosInstance.post(
      "/api/dishes/category/_search",
      searchFilters
    );
    return result;
  } catch (error) {
    throw error;
  }
};
