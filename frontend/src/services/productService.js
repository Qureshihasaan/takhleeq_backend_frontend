import { productsApi } from "./apiClient";

export const productService = {
  /**
   * Create a new product
   */
  createProduct: async (productData) => {
    try {
      const payload = {
        product_id: productData.product_id || 0,
        Product_name: productData.Product_name || "",
        Product_details: productData.Product_details || "",
        product_quantity: productData.product_quantity || 0,
        price: productData.price || 1,
        product_image: productData.product_image || "string"
      };

      const response = await productsApi.post("/product", payload);
      return response.data;
    } catch (error) {
      console.error("Failed to create product:", error);
      throw error;
    }
  },

  /**
   * Get all products
   */
  getAllProducts: async () => {
    try {
      const response = await productsApi.get("/product/");
      return response.data;
    } catch (error) {
      console.error("Failed to fetch products:", error);
      throw error;
    }
  },

  /**
   * Update a product
   */
  updateProduct: async (productId, productData) => {
    try {
      const response = await productsApi.put(
        `/product/${productId}`,
        productData,
      );
      return response.data;
    } catch (error) {
      console.error(`Failed to update product ${productId}:`, error);
      throw error;
    }
  },

  /**
   * Delete a product
   */
  deleteProduct: async (productId) => {
    try {
      const response = await productsApi.delete(`/product/${productId}`);
      return response.data;
    } catch (error) {
      console.error(`Failed to delete product ${productId}:`, error);
      throw error;
    }
  },

  /**
   * Get product image
   */
  getProductImage: async (productId) => {
    try {
      const response = await productsApi.get(`/product/${productId}/image`);
      return response.data;
    } catch (error) {
      console.error(`Failed to get product image ${productId}:`, error);
      throw error;
    }
  },

  /**
   * Check product service health
   */
  checkHealth: async () => {
    try {
      const response = await productsApi.get("/health");
      return response.data;
    } catch (error) {
      console.error("Failed to check product service health:", error);
      throw error;
    }
  },
};
