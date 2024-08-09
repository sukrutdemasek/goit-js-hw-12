import axios from 'axios';
const apiKey = '45177339-1086f924218083686626b70b0';
const pixabayUrl = 'https://pixabay.com/api/';

export default async function searchImage(query, page) {
  const params = new URLSearchParams({
    key: apiKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    perPage: 15,
    page: page,
  });
  try {
    const response = await axios.get(`${pixabayUrl}?${params}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
