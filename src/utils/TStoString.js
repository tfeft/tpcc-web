const month = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export function timestamp_to_string(ts) {
	const date = new Date(ts);
	date.setHours(date.getHours() + 5);
	date.setMinutes(date.getMinutes() + 30);

	const y = date.getFullYear().toString();
	const m = month[date.getMonth()];
	const d = date.getDate().toString();

	let suf = date.getHours() >= 12 ? ' PM' : ' AM';
	let hh = date.getHours() % 12 || 12;
	const mm = ('0' + date.getMinutes()).slice(-2);
	const s = hh.toString() + ':' + mm + suf + ', ' + d + ' ' + m + ' ' + y;
	return s;
}

export function date_to_string(ts) {
	const date = new Date(ts);
	const y = date.getFullYear().toString();
	const m = month[date.getMonth()];
	const d = date.getDate().toString();

	const s = d + ' ' + m + ' ' + y;
	return s;
}
