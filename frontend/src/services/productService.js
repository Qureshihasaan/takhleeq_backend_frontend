import { productsApi } from './apiClient';

export const productService = {
  /**
   * Fetch all products
   */
  getAllProducts: async () => {
    try {
      const response = await productsApi.get('/');
      return response.data;
    } catch (error) {
      console.error("Failed to fetch products:", error);
      throw error;
    }
  },

  /**
   * Fetch a single product by ID
   */
  getProductById: async (id) => {
    try {
      const response = await productsApi.get(`/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Failed to fetch product ${id}:`, error);
      throw error;
    }
  }
};
