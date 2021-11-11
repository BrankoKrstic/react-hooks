import { useEffect, useRef } from "react";

const usePrevious = (val) => {
	const ref = useRef();
	useEffect(() => {
		ref.current = val;
	}, [val]);
	// returned value will always be the value before the useEffect update
	return val;
};

export default usePrevious;
