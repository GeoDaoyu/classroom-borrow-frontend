import apiClient from './axios'

/**
 * Users API Module
 * Handles user profile-related API calls
 */
export const usersApi = {
  /**
   * Get user profile
   * @returns {Promise} Response with user profile data
   */
  getProfile: () => {
    return apiClient.get('/users/profile')
  },
}

export default usersApi
