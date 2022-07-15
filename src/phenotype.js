import { Genes } from './genes.js'

class Phenotype {
    constructor (base, point, agouti, tortie, fur_length, spotting) {
        this.base = base;
        this.point = point;
        this.agouti = agouti;
        this.tortie = tortie;
        this.fur_length = fur_length;
        this.spotting = spotting;
    }

    static generatePhenotype(genes) {
        // TODO : finish
        // TODO : break this up into smaller funcs
        let [bl, or, di, dm, ws, ag, tb, sp, ti, si, wb, cp, fl] = genes.assessGenes();
        let base, point, agouti, fur_length, spotting = "";
        let tortie = false;

        // base
        if (ws == "Dominant white") {
            base = "White";
        } else {
            if (or == "Orange") {
                if (di == "Dilute") {
                    if (dm == "Lighter") {
                        base = "Apricot";
                    } else {
                        base = "Cream";
                    }
                } else {
                    base = "Orange";
                }
            } else {
                if (or == "Tortie") tortie = true;
                if (bl == "Black") {
                    if (di == "Dilute") {
                        if (dm == "Lighter") {
                            base = "Blue caramel";
                        } else {
                            base = "Blue";
                        }
                    } else {
                        base = "Black";
                    }
                } else if (bl == "Chocolate") {
                    if (di == "Dilute") {
                        if (dm == "Lighter") {
                            base = "Lilac caramel";
                        } else {
                            base = "Lilac";
                        }
                    } else {
                        base = "Chocolate";
                    }
                } else {
                    if (di == "Dilute") {
                        if (dm == "Lighter") {
                            base = "Fawn caramel";
                        } else {
                            base = "Fawn";
                        }
                    } else {
                        base = "Cinnamon";
                    }
                }
            }
        }

        return new Phenotype(base, point, agouti, tortie, fur_length, spotting);
    }

    showPhenotype() {
		let string = "";
		const keys = Object.keys(this);
		for (let i in keys) {
			string += keys[i] + " : " + this[keys[i]] + " | ";
		}
		return string;
	}
}

export { Phenotype };