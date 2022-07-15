const allAlleles = [["B", "b", "b'"],["O", "o"],["D", "d"],["Dm", "dm"],
					["WD", "WS", "w", "wg"],["A", "a", "Apb"],["TaM", "Tab"],["Sp", "sp"],
					["TiA", "Ti+"],["I", "i"],["Wb", "wb"],["C", "cb", "cs", "c"],
					["L", "l"]];

function randomElem(arr) {
	// returns random element from an array
	return arr[Math.floor(Math.random()*arr.length)];
}

function equalArrs(a, b) {
	// returns true if a == b
	if (a.length !== b.length) return false;

	for (let i = 0 ; i < a.length ; i++) {
		if (a[i] !== b[i]) return false;
	}

	return true;
}

class Genes {
	// each gene is an array of 2 vals (for each chromosome)
	// special case : orange gene is on x chromosome so only 1 copy in male cats
	// TODO : add genes
	constructor(black, orange, dilute, dilute_modifier, 
				white_spotting, agouti, tabby, spotted_tabby, 
				ticked_tabby, silver, wide_band, colorpoint, 
				length) {
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
	}

	static randomGenes() {
		// constructor used with the random cat button
		let randomVals = [];
		for (let i = 0 ; i < allAlleles.length ; i++)
		{
			randomVals.push([randomElem(allAlleles[i]), randomElem(allAlleles[i])]);
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

	showGenes() {
		let string = "";
		const keys = Object.keys(this);
		for (let i in keys)
		{
			string += this[keys[i]][0] + this[keys[i]][1] + " ";
		}
		return string;
	}

	assessGenes() {
		// TODO : sort arrays to reduce amount of comparisons
		// returns array of status of each gene
		let status = [];

		// black
		if (this.black[0] == "B" || this.black[1] == "B") status.push("Black");
		else if (equalArrs(this.black, ["b'", "b'"])) status.push("Cinnamon");
		else status.push("Chocolate");

		// orange
		// removing second orange locus is done when creating a cat and not when creating genes
		// but since genes are only created when creating a cat when we assess genes that removal
		// will have already been done
		if (equalArrs(this.orange, ["o", "o"]) || equalArrs(this.orange, ["o", ""])) status.push("Not orange");
		else if (equalArrs(this.orange, ["o", "O"]) || equalArrs(this.orange, ["O", "o"])) status.push("Tortie");
		else status.push("Orange");

		// dilute
		if (equalArrs(this.dilute, ["d", "d"])) status.push("Dilute");
		else status.push("Dense");

		// dilute_modifier
		if (equalArrs(this.dilute, ["dm", "dm"])) status.push("Lighter");
		else status.push("Normal");

		// white_spotting
		if (this.white_spotting[0] == "WD" || this.white_spotting[1] == "WD") status.push("Dominant white");
		else if(equalArrs(this.white_spotting, ["wg", "wg"])) status.push("White gloves");
		else if(equalArrs(this.white_spotting, ["w", "w"]) || equalArrs(this.white_spotting, ["w", "wg"]) || equalArrs(this.white_spotting, ["wg", "w"])) status.push("No spotting");
		else if(equalArrs(this.white_spotting, ["WS", "WS"])) status.push("High spotting");
		else status.push("Low spotting");

		// agouti
		if (this.agouti[0] == "A" || this.agouti[1] == "A") status.push("Agouti");
		else if (equalArrs(this.agouti, ["Apb", "Apb"])) status.push("Twilight charcoal");
		else if (equalArrs(this.agouti, ["a", "a"])) status.push("Solid");
		else status.push("Midnight charcoal");

		// tabby
		if (equalArrs(this.tabby, ["Tab", "Tab"])) status.push("Classic");
		else status.push("Mackerel");

		// spotted_tabby 
		// only has an effect on mackerel tabbies
		if (equalArrs(this.spotted_tabby, ["Sp", "Sp"])) status.push("Spotted");
		else if (equalArrs(this.spotted_tabby, ["sp", "sp"])) status.push("Non spotted");
		else status.push("Broken");

		// ticked_tabby
		// there's contradicting information on what causes stripes to bleed through or not
		// so for now all ticked tabbies will have them
		if (equalArrs(this.ticked_tabby, ["Ti+", "Ti+"])) status.push("Non ticked");
		else status.push("Ticked");

		// silver
		if (equalArrs(this.silver, ["i", "i"])) status.push("Non silver");
		else status.push("Silver");

		// wide_band
		// hypothetical gene but best way to model silver & golden series
		if (equalArrs(this.silver, ["wb", "wb"])) status.push("No wide band");
		else status.push("Wide band");

		// colorpoint
		if (this.colorpoint[0] == "C" || this.colorpoint[1] == "C") status.push("Pigmented");
		else if(equalArrs(this.colorpoint, ["c", "c"])) status.push("Albino");
		else if(equalArrs(this.colorpoint, ["cb", "cs"]) || equalArrs(this.colorpoint, ["cs", "cb"])) status.push("Tonkinese");
		else if (this.colorpoint[0] == "cb" || this.colorpoint[1] == "cb") status.push("Burmese");
		else status.push("Siamese");

		// fur_length
		if (equalArrs(this.length, ["l", "l"])) status.push("Short");
		else status.push("Long");

		return status;
	}

	showAssessedGenes() {
		let string = "";
		const assessed = this.assessGenes();
		for (let i in assessed)
		{
			string += assessed[i] + " | ";
		}
		return string;
	}
}

export { Genes, randomElem };