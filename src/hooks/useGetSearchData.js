import useSWRInfinite from 'swr/infinite';
import { getSearchResults } from '../libs/api';

export const useGetSearchData = (keyword) => {
	const getKey = (pageIndex) => {
		if (pageIndex === 0) return `/search?q=${keyword}&page=1`;

		return `/search?q=${keyword}&page=${pageIndex+1}`;
	}
	
	const { data, setSize, error } = useSWRInfinite(getKey, getSearchResults);
	
	return {
		isLoading: !error && !data,
		isError: error,
		data,
		setSize,
	};
};