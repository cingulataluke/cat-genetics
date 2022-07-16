import { Genes } from './genes.js'

class Phenotype {
    constructor (base, point, agouti, cape, tabby, ticked, tortie, fur_length, spotting) {
        this.base = base;
        this.point = point;
        this.agouti = agouti;
        this.cape = cape;
        this.tabby = tabby;
        this.ticked = ticked;
        this.tortie = tortie;
        this.fur_length = fur_length;
        this.spotting = spotting;
    }

    static generatePhenotype(genes) {
        // TODO : silver series
        let [bl, or, di, dm, ws, ag, tb, sp, ti, si, wb, cp, fl] = genes.assessGenes();
        let base, point, cape, tabby, fur_length, spotting = "";
        let agouti, ticked, tortie = false;

        // base
        if (ws == "Dominant white") base = "White";
        else {
            if (or == "Orange") {
                if (di == "Dilute") {
                    if (dm == "Lighter") base = "Apricot";
                    else base = "Cream";
                }
                else base = "Orange";
            } 
            else {
                if (or == "Tortie") tortie = true;
                if (bl == "Black") {
                    if (di == "Dilute") {
                        if (dm == "Lighter") base = "Blue caramel";
                        else base = "Blue";
                    }
                    else base = "Black";
                } 
                else if (bl == "Chocolate") {
                    if (di == "Dilute") {
                        if (dm == "Lighter") base = "Lilac caramel";
                        else base = "Lilac";
                    } 
                    else base = "Chocolate";
                }
                else {
                    if (di == "Dilute") {
                        if (dm == "Lighter") base = "Fawn caramel";
                        else base = "Fawn";
                    } 
                    else base = "Cinnamon";
                }
            }
        }

        // point
        if (cp == "Albino") {
            base = "Albino";
            point = false;
        }
        else {
            if (ws == "Dominant white" || cp == "Pigmented") point = false;
            else point = cp;
        }

        // agouti
        if ((ag != "Solid" || or != "Not orange") && base != "White" && base != "Albino") {
            if (ag == "Solid" && or != "Not orange") agouti = "Light";
            else agouti = true;

            if (ag == "Agouti") cape = false;
            else cape = ag;

            if (tb == "Mackerel") {
                if (sp == "Spotted") tabby = sp;
                else if (sp == "Broken") tabby = "Broken mackerel"
                else tabby = "Mackerel"
            } 
            else tabby = "Classic";

            if (ti == "Ticked") ticked = true;
            else ticked = false;
        }

        // fur_length
        fur_length = fl;

        // spotting
        if (base != "White" && base != "Albino" && ws != "No spotting") spotting = ws;
        else spotting = false;

        return new Phenotype(base, point, agouti, cape, tabby, ticked, tortie, fur_length, spotting);
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