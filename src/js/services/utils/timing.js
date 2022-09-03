export default class Timing {

	static bounce = (advancement) => {
		return Math.log10(Math.pow(Math.E, advancement) - Math.pow(advancement, 2)) * 2
			- (Math.sin(advancement + 0.1) * Math.pow(advancement - 0.4, 1)) * 0.48;
	}

	static linear = (advancement) => {
		return Math.log10(Math.pow(Math.E, advancement));
	}
}