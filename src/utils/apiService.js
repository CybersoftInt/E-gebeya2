// src/services/apiService.js
const API_URL = 'http://localhost:5021/api/';

const getAuthHeaders = () => {
  const token = sessionStorage.getItem('jwt');
  return {
    Authorization: `Bearer ${token}`
  };
};

export const fetchProtectedData = async () => {
  try {
    const response = await fetch(`${API_URL}/protected-endpoint`, {
      headers: {
        ...getAuthHeaders()
      }
    });
    if (!response.ok) throw new Error('Failed to fetch protected data');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
