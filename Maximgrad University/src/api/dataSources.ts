import axios from 'axios';

export const fetchScholarData = async (topic: string) => {
  const response = await axios.get(`https://api.scholar.google.com/scholar?q=${topic}`);
  return response.data;
};