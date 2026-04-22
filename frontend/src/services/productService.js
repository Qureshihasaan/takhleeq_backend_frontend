import { productsApi } from "./apiClient";

export const productService = {
  /**
   * Create a new product
   */
  createProduct: async (productData, file = null) => {
    try {
      const formData = new FormData();

      // Add form fields
      formData.append("Product_id", productData.Product_id);
      formData.append("Product_name", productData.Product_name);
      formData.append("Product_details", productData.Product_details);
      formData.append("product_quantity", productData.product_quantity);
      formData.append("price", productData.price);

      // Add file if provided
      if (file) {
        formData.append("file", file);
      }

      const response = await productsApi.post("/product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
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
