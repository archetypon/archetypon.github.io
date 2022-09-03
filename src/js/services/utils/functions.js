export default class Functions {

	static moveLinearToLeft = ({ element, progress,
		initialCoordinates, destination }) => {

		element.style.top = -(progress *
			(initialCoordinates.top + destination.y)) + 'vh';
		element.style.left = -(progress *
			(initialCoordinates.left + destination.x)) + 'vw';

	}

	static moveLinearToTop = ({ element, progress,
		initialCoordinates, destination }) => {

		element.style.top = -(progress *
			(initialCoordinates.top + destination.y)) + 'vh';

	}

	static fade = ({ element, progress }) => {
		element.style.opacity = (1 - progress) * 1;
	}

	static reduce = ({ element, progress,
		initialStyle, destination }) => {
		element.style.height = ((1 - progress) *
			initialStyle.height + progress * destination.y) + 'vw';
		element.style.width = ((1 - progress) *
			initialStyle.width + progress * destination.x) + 'vw';
	}

	static reduceHeight = ({ element, progress,
		initialStyle, destination }) => {
		element.style.height = ((1 - progress) *
			initialStyle.height + progress * destination.y) + 'vw';
	}

	static typeWriter = ({ element, progress,
		initialStyle, destination, component }) => {
			element.innerHTML = '';
			element.appendChild(component.render(progress));
	}

}