import {Genes} from './genes.js';

class Cat {
	constructor(name, sex, genes) {
		this.name = name;
		this.sex = sex;
		this.genes = genes;
	}

	static newKitten(mother, father, name, mutationRate) {

		return new Cat(name, mother.sex, mother.genes); // TODO : currently this just creates a genetic copy of the mother
	}

	showCat() {
		return "Name : "+this.name+
			   "<br>Sex : "+this.sex+
			   "<br>Genes : "+this.genes.showGenes();
	}
}

export { Cat };