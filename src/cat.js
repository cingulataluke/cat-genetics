import { Genes } from './genes.js';
import { Phenotype } from './phenotype.js';

let catID = 1;

class Cat {
	constructor(name, sex, genes) {
		this.name = name;
		this.sex = sex;
		this.genes = genes;
		if (this.sex == "M") this.genes.orange[1] = "";
		this.id = catID;
		catID++;
		this.phenotype = Phenotype.generatePhenotype(this.genes);
	}

	static newKitten(mother, father, name, mutationRate) {

		return new Cat(name, mother.sex, mother.genes); // TODO : currently this just creates a genetic copy of the mother
	}

	showCat() {
		return "Name : "+this.name+
			   "<br>Sex : "+this.sex+
			   "<br>Genes : "+this.genes.showGenes()+
			   "<br>(meaning : "+this.genes.showAssessedGenes()+")"+
			   "<br>Looks : "+this.phenotype.showPhenotype()+
			   "<br>ID : "+this.id;
	}
}

export { Cat };