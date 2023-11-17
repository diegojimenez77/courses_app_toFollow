export const getCourseDuration = (duration: number) => {
	let hours = Math.trunc(duration / 60).toString();
	let minutes = (duration % 60).toString();
	if (+hours < 10) {
		hours = '0' + hours;
	}
	if (+minutes < 10) {
		minutes = '0' + minutes;
	}
	return `${hours}:${minutes} ${+hours === 1 ? 'hour' : 'hours'}`;
};
