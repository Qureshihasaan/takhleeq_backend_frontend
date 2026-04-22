import axios from 'axios';

// Create a generic API client for products service
export const productsApi = axios.create({
  baseURL: import.meta.env.VITE_PRODUCTS_API_URL || 'http://localhost:3001/api/products',
  headers: {
    'Content-Type': 'application/json',
  },
});

// You can create more instances for other microservices here
export const usersApi = axios.create({
  baseURL: import.meta.env.VITE_USERS_API_URL || 'http://localhost:3002/api/users',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const ordersApi = axios.create({
  baseURL: import.meta.env.VITE_ORDERS_API_URL || 'http://localhost:3003/api/orders',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Generic interceptors can be attached here for tokens, error handling, etc.
const setupInterceptors = (axiosInstance) => {
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      // Global error handling strategy
      console.error('API Error:', error.response?.data || error.message);
      return Promise.reject(error);
    }
  );
};

setupInterceptors(productsApi);
setupInterceptors(usersApi);
setupInterceptors(ordersApi);
