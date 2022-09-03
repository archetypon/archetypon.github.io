export default class MainText {

	constructor() {
		this.title = `Welcome to my portfolio`;
		this.content = [
			`Hi! My name is Andrea.`,
			`In my free time I have fun creating beautiful stuff mixing programming, electronics, design and curiosity.`,
			`I think in my work is really important to have good development skills and
					the best part is that I have a lot of fun at.`,
			`One of my desires was to have a place to friendly talk about me and my passion,
					so here we go.`,
			`If you want to hear a bit more about me, just scroll the page down.`
		];
		this.contentLength = 0;
		this.content.map(e => this.contentLength += e.length);
	}

	render(progress) {

		let visible = parseInt(progress * this.contentLength);

		let container = document.createElement('div');
		let h2 = document.createElement('h2');
		h2.innerText = this.title;
		container.appendChild(h2);

		this.content.forEach((e, i) => {

			let p = document.createElement('p');

			if (visible > e.length) {
				p.innerText = e;
			} else {
				p.innerText = e.slice(0, visible);
			}

			visible -= e.length < visible ? e.length : visible;

			container.appendChild(p);
		});

		return container;

	}
}