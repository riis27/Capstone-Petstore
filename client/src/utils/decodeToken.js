import { jwtDecode } from 'jwt-decode';

export const decodeToken = () => {
  const token = localStorage.getItem('authToken');
  if (!token) return null;

  try {
    return jwtDecode(token);
  } catch (err) {
    console.error('JWT Decode Failed:', err);
    return null;
  }
};
