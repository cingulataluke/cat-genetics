import { Cat } from './cat.js';
import { Genes, randomElem } from './genes.js';

const btnRandomCat = document.getElementById("random-gen");
const btnWildtypeCat = document.getElementById("wildtype-gen");

const txtCurrentGenes = document.getElementById("current-genes");

const divCards = document.getElementById("cards");
let cardList = [];

let currentCat;

// TODO : refactor to stick to functional programming

btnRandomCat.onclick = () => {
	currentCat = new Cat("Random", randomElem(["M", "F"]), Genes.randomGenes());
	newCatCard();
	updateCurrentGenes();
}

btnWildtypeCat.onclick = () => {
	currentCat = new Cat("Wildtype", randomElem(["M", "F"]), Genes.wildtypeGenes());
	newCatCard();
	updateCurrentGenes();
}

function newCatCard() {
	let divCurrentCat = document.createElement("div");
	divCurrentCat.setAttribute("class", "div-cat");
	divCurrentCat.setAttribute("id", "div-cat-" + currentCat.id);
	divCards.appendChild(divCurrentCat);
	cardList.unshift(divCurrentCat);
}

function updateCurrentGenes() {
	let divCurrentCat = cardList[0];
	let txtCurrentCat = document.createElement("p");
	txtCurrentCat.innerHTML = currentCat.showCat();
	divCurrentCat.appendChild(txtCurrentCat);

	txtCurrentGenes.innerHTML = currentCat.showCat();
}