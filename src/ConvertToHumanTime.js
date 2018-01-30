export default function converToHumanTime(duration) {
	let s = parseInt((duration / 1000) % 60);
	const m = parseInt((duration / (1000 * 60)) % 60, 10);
	s = (s < 10) ? `0${s}` : s;
	return `${m}:${s}`;
}
