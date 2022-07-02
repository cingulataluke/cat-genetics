import { Cat } from './cat.js';
import { Genes } from './genes.js';

const btnRandomCat = document.getElementById("random-gen");
const btnWildtypeCat = document.getElementById("wildtype-gen");

const txtCurrentGenes = document.getElementById("current-genes");

let currentCat = new Cat("Unnamed", "F", Genes.randomGenes());

btnRandomCat.onclick = () =>
{
    currentCat = new Cat("Random", "F", Genes.randomGenes());
    updateCurrentGenes();
}

btnWildtypeCat.onclick = () =>
{
    currentCat = new Cat("Wildtype", "M", Genes.wildtypeGenes());
    updateCurrentGenes();
}

function updateCurrentGenes() {
    txtCurrentGenes.innerHTML = currentCat.showCat();
}