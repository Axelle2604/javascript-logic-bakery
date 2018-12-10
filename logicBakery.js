const farine = 1; // le kilo
const sucre = 1.5; // 500g
const oeufs = 3; // 10 oeufs
const lait = 2.5; // le litre
const chocolat = 10; // 500g
const decoration = 3.5; // l'unité
const fruits = 5; // le kilo

const foretNoirePrice =
  1 * farine +
  2 * sucre +
  2 * oeufs +
  0.5 * lait +
  2 * chocolat +
  5 * decoration;

const tarteAuxFraisesPrice =
  2 * fruits +
  0.5 * farine +
  1 * sucre +
  0.5 * oeufs +
  0.5 * lait +
  0.5 * chocolat +
  2 * decoration;

const coeffMarge = prompt('Quel coefficient de marge souhaitez-vous ?');
const prixDeVenteForetNoire = foretNoirePrice * coeffMarge;
const prixDeVentreTarteAuxFraises = tarteAuxFraisesPrice * coeffMarge;

console.log('Prix coûtant Forêt noire = ' + foretNoirePrice + ' euros.');
console.log('Prix vendu Forêt noire = ' + prixDeVenteForetNoire + ' euros.');

console.log(
  'Prix coûtant Tarte aux fraises = ' + tarteAuxFraisesPrice + ' euros.'
);
console.log(
  'Prix vendu Tarte aux fraises = ' + prixDeVentreTarteAuxFraises + ' euros.'
);

const nbBoutique = 5;
const nbGateau = 6;
const coutTotalForetNoire = nbBoutique * foretNoirePrice * nbGateau;
const coutTotalTarteAuxFraises = nbBoutique * tarteAuxFraisesPrice * nbGateau;
const tresorerieQuotidienne = coutTotalForetNoire + coutTotalTarteAuxFraises;

console.log(
  'La trésorerie quotidienne à prévoir pour faire les gâteaux est de ' +
    tresorerieQuotidienne +
    ' euros.'
);

const pourcentageVente = 90;
const recetteQuotidienne =
  nbBoutique *
  nbGateau *
  (prixDeVenteForetNoire + prixDeVentreTarteAuxFraises) *
  0.9;

console.log(
  'La recette quotidienne pour ' +
    pourcentageVente +
    '% des ventes est de ' +
    recetteQuotidienne +
    ' euros.'
);

const benefices = Math.floor(recetteQuotidienne - tresorerieQuotidienne);

console.log('Les bénéfices sont de ' + benefices + ' euros.');

benefices % 2 === 0 && console.log('Bim...');
benefices % 2 !== 0 && console.log('Bam...');
