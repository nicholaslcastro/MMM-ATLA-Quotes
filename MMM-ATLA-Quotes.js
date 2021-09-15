/*

*/

Module.register("MMM-ATLA-Quotes", {
	// Default module config.
	defaults: {
		updateInterval: 86400000,
		fadeSpeed: 4000,
		quotes: [],
		thumbnails: []
	},

	start: function () {
		Log.info("Initializing Avatar Quotes Module...");
		this.config.quotes = this.getQuotes();
		this.config.thumbnails = this.getThumbnails();
		let self = this;
		setInterval(function () {
			self.updateDom(self.config.fadeSpeed);
		}, this.config.updateInterval);
	},

	// Override dom generator.
	getDom: function () {
		let randomQuote = this.getRandomQuote();
		let row = document.createElement("div");
		row.id = "container";

		let imageCol = document.createElement("div");
		imageCol.className = "imageCol";

		let image = document.createElement("img");
		image.className = "avatar-icon";
		image.src = randomQuote.thumbnail;

		let quoteCol = document.createElement("div");
		quoteCol.className = "quoteCol";

		let quote = document.createElement("p");
		quote.className = "quoteText";
		quote.innerText = `"${randomQuote.quote}"`;

		let footer = document.createElement("footer");
		footer.className = "quoteSpeaker";
		//footer.className = "blockquote-footer";
		footer.innerText = `-${randomQuote.name}`;
		row.appendChild(imageCol);
		imageCol.appendChild(image);
		row.appendChild(quoteCol);
		quoteCol.appendChild(quote);
		quoteCol.appendChild(footer);

		return row;
	},

	getHeader: function () {
		return "Avatar Quote of the Day";
	},

	getRandomQuote: function () {
		let randomQuote = this.config.quotes[this.getRandomIndex(this.config.quotes.length)];
		let randomThumbnail = "";
		for (let i = 0; i < this.config.thumbnails.length; i++) {
			if (this.config.thumbnails[i]["name"] === randomQuote["name"]) {
				randomThumbnail = this.config.thumbnails[i]["thumbnail"];
			}
		}
		return {
			"name": randomQuote["name"],
			"quote": randomQuote["quote"],
			"thumbnail": randomThumbnail
		};
	},

	getRandomIndex: function (max) {
		return Math.floor(Math.random() * max);
	},


	getStyles: function () {
		return [
			"atla-styles.css",
		];
	},

	getThumbnails: function () {
		return [
			{
				"name": "Iroh",
				"thumbnail": "https://i.redd.it/h459jfxrrp251.jpg"
			},
			{
				"name": "Zuko",
				"thumbnail": "https://static.wikia.nocookie.net/avatar/images/4/4b/Zuko.png/revision/latest/scale-to-width-down/333?cb=20180630112142"
			},
			{
				"name": "Katara",
				"thumbnail": "https://static.wikia.nocookie.net/avatar/images/7/7a/Katara_smiles_at_coronation.png/revision/latest/scale-to-width-down/333?cb=20150104171449"
			},
			{
				"name": "Aang",
				"thumbnail": "https://static.wikia.nocookie.net/avatar/images/a/ae/Aang_at_Jasmine_Dragon.png/revision/latest/scale-to-width-down/666?cb=20130612174003"
			},
			{
				"name": "Sokka",
				"thumbnail": "https://static.wikia.nocookie.net/avatar/images/c/cc/Sokka.png/revision/latest/scale-to-width-down/333?cb=20140905085428"
			},
			{
				"name": "Toph",
				"thumbnail": "https://static.wikia.nocookie.net/avatar/images/4/46/Toph_Beifong.png/revision/latest/scale-to-width-down/333?cb=20131230122047"
			}
		];
	},

	getQuotes: function () {
		return [
			{
				"name": "Iroh",
				"quote": "Life happens wherever you are, whether you make it or not."
			},
			{
				"name": "Iroh",
				"quote": "Pride is not the opposite of shame, but its source. True humility is the only antidote to shame."
			},
			{
				"name": "Aang",
				"quote": "It’s easy to do nothing, it’s hard to forgive."
			},
			{
				"name": "Iroh",
				"quote": "Sometimes life is like this tunnel. You can’t always see the light at the end of the tunnel, but if you keep moving, you will come to a better place."
			},
			{
				"name": "Sokka",
				"quote": "Anyone’s capable of great good and great evil. Everyone, even the Fire Lord and the Fire Nation, has to be treated like they’re worth giving a chance."
			},
			{
				"name": "Katara",
				"quote": "You make one step backward, one slip-up, give me one reason to think you might hurt Aang, and you won’t have to worry about your destiny anymore; because I’ll make sure your destiny ends, right then and there, permanently."
			},
			{
				"name": "Sokka",
				"quote": "My first girlfriend turned into the moon."
			},
			{
				"name": "Iroh",
				"quote": "You may not always see the light at the end of the tunnel, but if you keep moving, you will come to a better place."
			},
			{
				"name": "Toph",
				"quote": "One of the good things about being blind is that I don't have to waste my time worrying about appearances. I don't care what I look like. I'm not looking for anyone's approval. I know who I am."
			},
			{
				"name": "Sokka",
				"quote": "I'm just a guy with a boomerang. I didn't ask for all this flying and magic!"
			},
			{
				"name": "Aang",
				"quote": "Anyone’s capable of great good and great evil. Everyone, even the Fire Lord and the Fire Nation, has to be treated like they’re worth giving a chance."
			},
			{
				"name": "Iroh",
				"quote": "You sound like my nephew, always thinking you need to do things on your own without anyone’s support. There is nothing wrong with letting the people who love you help you."
			}, {
				"name": "Katara",
				"quote": "But now you’re not letting yourself feel anything. I know sometimes it hurts more to hope and it hurts more to care. But you have to promise me that you won’t stop caring."
			},
			{
				"name": "Aang",
				"quote": "When we hit our lowest point, we are open to the greatest change."
			}, {
				"name": "Iroh",
				"quote": "Protection and power are overrated. I think you are to choose happiness and love."
			},
			{
				"name": "Iroh",
				"quote": "Sometimes the best way to solve your own problems is to help someone else."
			}, {
				"name": "Zuko",
				"quote": "In the darkest of times, hope is something you give yourself."
			},
			{
				"name": "Zuko",
				"quote": "Never forget who you are, for the world surely won’t."
			}, {
				"name": "Katara",
				"quote": "Love is brightest in the dark."
			},
			{
				"name": "Iroh",
				"quote": "While it is always best to believe in oneself, a little help from others can be a great blessing."
			}, {
				"name": "Iroh",
				"quote": "Destiny is a funny thing. You never know how things are going to work out. But if you keep an open mind and an open heart, I promise you will find your own destiny someday."
			},
			{
				"name": "Iroh",
				"quote": "Sometimes life is like this dark tunnel. You can’t always see the light at the end of the tunnel, but if you just keep moving, you will come to a better place."
			}, {
				"name": "Iroh",
				"quote": "Sharing tea with a fascinating stranger is one of life’s true delights."
			},
			{
				"name": "Iroh",
				"quote": "When you’re in your darkest place, you give yourself hope and that’s inner strength."
			}
		];
	}
});