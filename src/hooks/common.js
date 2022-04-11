import { useState, useCallback } from "react";

export default function useAsync(asyncFunction, defaultValue = []) {
	const [status, setStatus] = useState("idle");
	const [value, setValue] = useState(defaultValue);
	const [error, setError] = useState(null);

	const run = useCallback(() => {
		setStatus("pending");
		setValue(null);
		setError(null);
		asyncFunction()
			.then((response) => {
				setValue(response);
				setStatus("success");
			})
			.catch((error) => {
				setError(error);
				setStatus("error");
			});
	}, [asyncFunction]);
	return { run, status, value, setValue, error };
}
