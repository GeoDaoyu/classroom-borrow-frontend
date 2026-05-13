import apiClient from './axios'

/**
 * Auth API Module
 * Handles authentication-related API calls
 */
export const authApi = {
  /**
   * Login with account and password
   * @param {string} account - User account
   * @param {string} password - User password
   * @returns {Promise} Response with accessToken and user data
   */
  login: (account, password) => {
    return apiClient.post('/api/login', { account, password })
  },

  /**
   * Refresh access token using httpOnly refresh token cookie
   * @returns {Promise} Response with new accessToken
   */
  refresh: () => {
    return apiClient.post('/api/refresh', {})
  },

  /**
   * Logout and invalidate refresh token
   * @returns {Promise} Response confirming logout
   */
  logout: () => {
    return apiClient.post('/api/logout', {})
  },

  /**
   * Get user profile
   * @returns {Promise} Response with user profile data
   */
  getUserProfile: () => {
    return apiClient.get('/api/user/profile')
  },
}

export default authApi
