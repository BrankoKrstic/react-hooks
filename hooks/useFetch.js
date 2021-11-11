import { useState, useEffect } from "react";

// Hook to abstract away fetching API data within components
function useFetch(url, defaultState) {
	const [data, setData] = useState(defaultState);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	useEffect(() => {
		setLoading(true);
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setLoading(false);
				setData(data);
			})
			.catch((err) => {
				setLoading(false);
				setError(true);
			});
	}, [url]);

	return [data, loading, error];
}

export default useFetch;
