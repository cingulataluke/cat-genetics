const allAlleles = [["B", "b", "b'"],["O", "o"],["D", "d"],["Dm", "dm"],
					["WD", "WS", "w", "wg"],["A", "a"],["TaM", "Tab"],["Sp", "sp"],
					["TiA", "Ti+"],["I", "i"],["Wb", "wb"],["C", "cb", "cs", "c"],
					["L", "l"], ["W", "w"]];

function randomIndex(arr) {
	// returns random int between 0 and arr.length-1
	return Math.floor(Math.random()*arr.length);
}

class Genes {
	// each gene is an array of 2 vals (for each chromosome)
	// special case : orange gene is on x chromosome so only 1 copy in male cats
	// not sure of the best way to treat that yet
	constructor(black, orange, dilute, dilute_modifier, 
				white_spotting, agouti, tabby, spotted_tabby, 
				ticked_tabby, silver, wide_band, colorpoint, 
				length, dominant_white) {
		// constructor used when custom making a cat with the form
		this.black = black;
		this.orange = orange;
		this.dilute = dilute;
		this.dilute_modifier = dilute_modifier;
		this.white_spotting = white_spotting;
		this.agouti = agouti;
		this.tabby = tabby;
		this.spotted_tabby = spotted_tabby;
		this.ticked_tabby = ticked_tabby;
		this.silver = silver;
		this.wide_band = wide_band;
		this.colorpoint = colorpoint;
		this.length = length;
		this.dominant_white = dominant_white;
	}

	showGenes() {
		// TODO : rewrite with a loop
		return this.black+" "+this.orange+" "+this.dilute+" "+this.dilute_modifier+" "+
			   this.white_spotting+" "+this.agouti+" "+this.tabby+" "+this.spotted_tabby+" "+
			   this.ticked_tabby+" "+this.silver+" "+this.wide_band+" "+this.colorpoint+" "+
			   this.length+" "+this.dominant_white;
	}

	static randomGenes() {
		// constructor used with the random cat button
		let randomVals = [];
		for (let i = 0 ; i < allAlleles.length ; i++)
		{
			randomVals.push([allAlleles[i][randomIndex(allAlleles[i])], allAlleles[i][randomIndex(allAlleles[i])]]);
		}
		return new Genes(...randomVals);
	}

	static wildtypeGenes() {
		// constructor used with the wildtype cat button
		let wildtypeGenes = Genes.randomGenes();
		wildtypeGenes.black = ["B", "B"];
		wildtypeGenes.orange = ["o", "o"];
		wildtypeGenes.white_spotting = ["w", "w"];
		wildtypeGenes.agouti = ["A", "A"];
		wildtypeGenes.tabby = ["TaM", "TaM"];
		wildtypeGenes.colorpoint = ["C", "C"];
		
		return wildtypeGenes;
	}
}

export { Genes };