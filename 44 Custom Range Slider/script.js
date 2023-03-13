const range = document.getElementById('range');

range.addEventListener('input', (e) => {
	const value = +e.target.value; //o sinal + converte para número
	const label = e.target.nextElementSibling;

	const slider_width = getComputedStyle(e.target).getPropertyValue('width');
	const label_width = getComputedStyle(label).getPropertyValue('width');

	const slider_width_number = +slider_width.substring(0,slider_width.length-2);
	const label_width_number = +label_width.substring(0,label_width.length-2);

	const max = e.target.max;
	const min = e.target.min;
	
	const left_position = value * (slider_width_number / max) - label_width_number / 2 + scale(value, min, max, 10, -10);

	label.style.left = `${left_position}px`

	label.innerHTML = value;
})

const scale = (num, in_min, in_max, out_min, out_max) => {
	return (num-in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}