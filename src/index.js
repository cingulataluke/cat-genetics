import { Cat } from './cat.js';
import { Genes, randomElem } from './genes.js';

const btnRandomCat = document.getElementById("random-gen");
const btnWildtypeCat = document.getElementById("wildtype-gen");

const txtCurrentGenes = document.getElementById("current-genes");

let currentCat;

btnRandomCat.onclick = () =>
{
    currentCat = new Cat("Random", randomElem(["M", "F"]), Genes.randomGenes());
    updateCurrentGenes();
}

btnWildtypeCat.onclick = () =>
{
    currentCat = new Cat("Wildtype", randomElem(["M", "F"]), Genes.wildtypeGenes());
    updateCurrentGenes();
}

function updateCurrentGenes() {
    txtCurrentGenes.innerHTML = currentCat.showCat();
}