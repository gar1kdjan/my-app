import { useEffect, useMemo } from 'react';

export const MyComponent = () => {
	const date = useMemo(() => new Date(), []);

	useEffect(() => {
		console.log(date);
	}, [date]);

	return <div>{String(date)}</div>;
};
