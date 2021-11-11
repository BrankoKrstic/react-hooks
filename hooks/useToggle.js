import { useState } from "react";

const useToggle = (startValue) => {
	const [state, setState] = useState(startValue);
	const toggle = () => setState(!state);
	return [state, toggle];
};

export default useToggle;
