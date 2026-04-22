import { usersApi } from './apiClient';

export const authService = {
  /**
   * Login user with email and password
   */
  login: async (email, password) => {
    try {
      const response = await usersApi.post('/login', { email, password });
      return response.data;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  },

  /**
   * Register new user
   */
  register: async (userData) => {
    try {
      const response = await usersApi.post('/register', userData);
      return response.data;
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  },

  /**
   * Logout user
   */
  logout: async () => {
    try {
      const response = await usersApi.post('/logout');
      return response.data;
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    }
  },

  /**
   * Get current user profile
   */
  getCurrentUser: async () => {
    try {
      const response = await usersApi.get('/profile');
      return response.data;
    } catch (error) {
      console.error("Failed to get current user:", error);
      throw error;
    }
  },

  /**
   * Store authentication token in localStorage
   */
  setAuthToken: (token) => {
    localStorage.setItem('authToken', token);
  },

  /**
   * Get authentication token from localStorage
   */
  getAuthToken: () => {
    return localStorage.getItem('authToken');
  },

  /**
   * Remove authentication token from localStorage
   */
  removeAuthToken: () => {
    localStorage.removeItem('authToken');
  },

  /**
   * Check if user is authenticated
   */
  isAuthenticated: () => {
    return !!localStorage.getItem('authToken');
  }
};
