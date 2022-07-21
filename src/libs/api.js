import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://images-api.nasa.gov',
});


export const getSearchResults = async (url) => {
	const response = await client.get(url);

	return response.data;
}