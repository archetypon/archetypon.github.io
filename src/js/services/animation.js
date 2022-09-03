
export default class Animation {

	constructor({ element, duration, destination, 
		animation, style, component }) {


		let fullX = document.documentElement.clientWidth;
		let fullY = document.documentElement.clientHeight;

		let boundRect = element.getBoundingClientRect();

		this.element = element;
		this.duration = duration;
		this.destination = destination;

		this.initialCoordinates = {
			top: boundRect.top / fullY * 100,
			left: boundRect.left / fullX * 100,
		}
		this.start = performance.now();
		this.animation = animation;
		this.initialStyle = style;

		this.component = component;

	}

	setTiming(timingFunction) {
		this.timinig = timingFunction;
	}



	animate() {

		let quadratic = (advancement) => {
			let pow = Math.pow(advancement, 2);
			return pow > 1 ? 1 : pow;
		}

		let timingFunction = this.timinig || quadratic;

		let advancement = (performance.now() - this.start) / this.duration;

		let progress = timingFunction(advancement);

		// calculate the current animation state
		this.animation({
			element: this.element,
			progress: progress,
			initialCoordinates: this.initialCoordinates,
			destination: this.destination,
			initialStyle: this.initialStyle,
			component: this.component
		});

		if (progress < 1) {
			requestAnimationFrame(this.animate.bind(this));
		}

	}

	animateProgressively(delta) {
		
		let quadratic = (advancement) => {
			let pow = Math.pow(advancement, 2);
			return pow > 1 ? 1 : pow;
		}

		let progress = quadratic(delta);

		// calculate the current animation state
		this.animation({
			element: this.element,
			progress: progress,
			initialCoordinates: this.initialCoordinates,
			destination: this.destination,
			initialStyle: this.initialStyle,
			component: this.component
		});

	}

}