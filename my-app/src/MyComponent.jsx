import { useEffect } from 'react';

export const MyComponent = () => {
	const date = new Date();

	useEffect(() => {
		console.log(date);
	}, [date]);

	return <div>{String(date)}</div>;
};
