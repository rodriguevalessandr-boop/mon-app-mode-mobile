if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('Service Worker enregistré !', reg))
      .catch(err => console.log('Erreur d’enregistrement :', err));
  });
}

const vetements = {



'Nimbes': [
{ nom: 'aureole-jaune-clair', fichier: 'aureole-jaune-clair.png'},

],
'Chapeaux' : [

],
'Coiffures': [
{ nom: 'Coiffure rousse frisée', fichier: 'coiffure-frisee-rousse.png' },
{ nom: 'Coiffure noir frisée', fichier: 'coiffure-frisee-noire.png' },
{ nom: 'Coiffure buns noirs lisses', fichier: 'coiffure-buns-noirs-lisses.png' },
{ nom: 'Coiffure Frisée miel', fichier: 'coiffure-frisee-miel.png' },
{ nom: 'Coiffure attachee boucles noires', fichier: 'coiffure-attachee-boucles-noires.png' },
{ nom: 'Coiffure couettes rousses', fichier: 'coiffure-couettes-rousses.png'},
{ nom: 'Coffure-lisse-blonds', fichier: 'coiffure-lisse-blonds.png'},
{ nom: 'coiffure-lisses-carmins', fichier: 'coiffure-lisses-carmins.png'},
],
  
  
  'Boucles d"oreilles': [

  ],

  'Ailes': [
    { nom: 'ailes-aqua-et-nuances', fichier: 'ailes-aqua-et-nuances.png'},
    { nom: 'ailes-fee-violacees', fichier: 'ailes-fee-violacees.png'},

  ],

   'Robes': [
    { nom: 'Robe caramel', fichier: 'robe-caramel.png' },
    { nom: 'Robe princesse bleue', fichier: 'robe-princesse-bleue.png'},
    { nom: 'Robe vert emeraude', fichier: 'robe-vert-emeraude.png' },
    { nom: 'Robe violet', fichier: 'robe-violet.png' },
    { nom: 'Robe bleue', fichier: 'robe-bleue.png' },
    {nom: 'Robe longue cerise', fichier :'robe-longue-cerise.png'},
  ],

  'Blouses': [
    { nom: 'Blouse bordeaux', fichier: 'blouse-bordeaux.png' },
    { nom: 'Blouse bleue', fichier: 'blouse-bleue.png' },
    { nom: 'Blouse bleu clair', fichier: 'blouse-bleu-clair.png' },
    { nom: 'Blouse miel', fichier: 'blouse-miel.png' },
    { nom: 'Blouse majenta', fichier: 'blouse-majenta.png' },
  ],
  'Cintres': [
    { nom: 'Cintre citrouille', fichier: 'cintre-citrouille.png' },
    { nom: 'Cintre vert emeraude', fichier: 'cintre-vert-emeraude.png' },
    { nom: 'Cintre aubergine', fichier: 'cintre-aubergine.png' },
    { nom: 'Cintre violet', fichier: 'cintre-violet.png' },
    { nom: 'Cintre tropico', fichier: 'cintre-tropico.png' },
    { nom: 'Cintre-cobalt', fichier: 'cintre-cobalt.png'},
    { nom: 'Cintre-bleu-canard', fichier: 'cintre-bleu-canard.png'},
  ],
  'Ceintures': [

  ],
  'Sacs': [

  ],
  'Bodies': [
    { nom: 'Body vert brillant', fichier: 'body-vert-brillant.png' },
    { nom: 'Body bleu', fichier: 'body-bleu.png' },
    { nom: 'Body Madonna', fichier: 'body-madonna.png' },
    { nom: 'Body orange', fichier: 'body-orange.png' },
    { nom: 'Body vert-noir', fichier: 'body-vert-noir.png' },
  ],
  'Slims': [
    { nom: 'Slim bleu noir', fichier: 'slim-bleu-noir.png' },
    { nom: 'Slim brique', fichier: 'slim-brique.png' },
    { nom: 'Slim bleu', fichier: 'slim-bleu.png' },
    { nom: 'Slim anthracite', fichier: 'slim-anthracite.png'},
    { nom: 'Slim menthe', fichier: 'slim-menthe.png'},
    {nom : 'Slim fuschia', fichier: 'slim-fuschia.png'},
  ],
  'Fluides': [
    { nom: 'Fluide magenta', fichier: 'fluide-magenta.png' },
    { nom: 'Fluide orange', fichier: 'fluide-orange.png' },
    { nom: 'Fluide vert', fichier: 'fluide-vert.png' },
    { nom: 'Fluide vert paillettes roses', fichier: 'fluide-vert-paillettes-roses.png' },
    { nom: 'Fluide violet', fichier: 'fluide-violet.png' },
  ],
  'Jupes': [
    { nom: 'Jupe jaune orange', fichier: 'jupe-jaune-orange.png' },
    { nom: 'Jupe bleu nuit', fichier: 'jupe-bleu-nuit.png' },
    { nom: 'Jupe rouge', fichier: 'jupe-rouge.png' },
    { nom: 'Jupe bleu marine', fichier: 'jupe-bleu-marine.png'},
    { nom: 'Jupe à tulles bleu marine', fichier: 'jupe-a-tulles-bleu-marine.png'},
    { nom: 'Jupe vert fonce', fichier: 'jupe-vert-fonce.png'},
    { nom: 'Jupe-a-volants-rose', fichier: 'jupe-a-volants-rose.png'},
  ],
 
  'Collants': [
    { nom: 'Collants noirs', fichier: 'collants-noirs.png' },
    { nom: 'Collants rouges', fichier: 'collants-rouges.png' },
    { nom: 'Collants anthracite', fichier: 'collants-anthracite.png' },
  ],
   'Chaussettes': [
    {nom: 'Chaussettes bi-colores', fichier: 'chaussettes-bi-colores.png'},
    {nom: 'Chaussettes caramel', fichier: 'chaussettes-caramel.png'},
    {nom: 'Chaussettes blanches', fichier: 'chaussettes-blanches.png'},
    {nom: 'Chaussettes menthe', fichier: 'chaussettes-menthe.png'},
  ],
  'Escarpins': [
    { nom: 'Escarpins rose irise', fichier: 'escarpins-rose-irise.png' },
    { nom: 'Escarpins noirs', fichier: 'escarpins-noirs.png' },
    {nom: 'Escarpins orange-mauve-tentacules', fichier: 'escarpins-orange-mauve-tentacules.png'},
    {nom: 'Escarpins pourpres', fichier: 'escarpins-pourpres.png'},
    {nom: 'Escarpins vert fluo', fichier: 'escarpins-vert-fluo.png'},
  ],
    'Bottines': [
    { nom: 'Bottines citrouille', fichier: 'bottines-citrouille.png' },
    { nom: 'Bottines saumon', fichier: 'bottines-saumon.png' },
    { nom: 'Bottines bleu-gloss', fichier: 'bottines-bleu-gloss.png'},
    { nom: 'Bottines bole', fichier: 'bottines-bole.png'},
    { nom: 'Bottines noir gloss', fichier: 'bottines-noir-gloss.png'},
    { nom: 'Bottines sienna orange', fichier: 'bottines-sienna-orange.png'},
    { nom: 'bottines-hautes-rouges', fichier: 'bottines-hautes-rouges.png'},
    { nom: 'bottines-jaunes-ailees', fichier: 'bottines-jaunes-ailees.png'},
  ],

};


const vetementsVisage = {
  'Coiffures': [
    { nom: 'visage-lisse-attache-rousse', fichier: 'visage-lisse-attache-rousse.png'},
    { nom: 'visage-carre-lisse-noir', fichier: 'visage-carre-lisse-noir.png'},
  ],
  'Iris': [
    { nom: 'Iris gris', fichier: 'iris-gris.png' },
  ],
  'Rouges à lèvres': [
    { nom: 'Levres vertes reflet jaune', fichier: 'levres-vertes-reflet-jaune.png' },
    { nom: 'levres-ombre-rouge-noir', fichier: 'levres-ombre-rouge-noir.png'},
    { nom: 'levres-bleu-glacial', fichier: 'levres-bleu-glacial.png'},
    { nom: 'levres-bleu-vert', fichier: 'levres-bleu-vert.png'},
    { nom: 'levres-fuschia', fichier: 'levres-fuschia.png'},
    { nom: 'levres-joker-batman', fichier: 'levres-joker-batman.png'},
   { nom: 'levres-mauve-et-vert-reflets-jaune-fushia', fichier: 'levres-mauve-et-vert-reflets-jaune-fushia.png'},
   { nom: 'levres-multicolores', fichier: 'levres-multicolores.png'},
   { nom: 'levres-pourpre', fichier: 'levres-pourpre.png'},
   { nom: 'levres-rose', fichier: 'levres-rose.png'},
   { nom: 'levres-rose-saumon', fichier: 'levres-rose-saumon.png'},
   { nom: 'levres-rouge-de-rose', fichier: 'levres-rouge-de-rose.png'},
   { nom: 'levres-rouges', fichier: 'levres-rouges.png'},
   { nom: 'levres-saumon', fichier: 'levres-saumon.png'},
  { nom: 'levres-tropico', fichier: 'levres-tropico.png'},
  
    
    ],
  'Eye liners': [
    { nom: 'Eye liner carmine', fichier: 'eye-liner-carmine.png' },
  ],
  'Fards à paupières': [
    { nom: 'Fard paupières noir', fichier: 'fard-paupieres-noir.png' },
  ],
  'Blush': [
    { nom: 'Blush rose', fichier: 'blush-rose.png' },
  ],
  'Cils': [
    { nom: 'visage-cils-bleu-nuit', fichier: 'visage-cils-bleu-nuit.png' },
  ],
  'Boucles d"oreilles':[
     { nom: 'visage-anneaux-grands-or', fichier: 'visage-anneaux-grands-or.png'},
  ],
  'Colliers': [
    { nom: 'visage-collier-or-pierre-rouge', fichier: 'visage-collier-or-pierre-rouge.png' },
  ]
};

const lookbookTenues = [
  {
    nom: 'Tenue 1',
    corps: {
      'Coiffures': 'coiffure-frisee-miel.png',
      'Cintres': 'cintre-tropico.png',
      'Bottines': 'bottines-citrouille.png',
      'Jupes': 'jupe-vert-fonce.png',
    },
    visage: {
      'Coiffures': 'visage-buns-crepus-chatain.png',
    }
  },
  {
    nom: 'Tenue 2',
    corps: {
      'Coiffures': 'coiffure-buns-noirs-lisses.png',
      'Cintres': 'cintre-vert-emeraude.png',
      'Jupes': 'jupe-rouge.png',
      'Bottines': 'bottines-bleu-gloss.png',
    },
    visage: {
      'Coiffures': 'visage-buns-crepus-chatain.png',
    }
  },
  {
    nom: 'Tenue 3',
    corps: {
      'Coiffures': 'coiffure-couettes-rousses.png',
      'Cintres': 'cintre-cobalt.png',
      'Slims': 'slim-menthe.png',
      'Bottines': 'bottines-sienna-orange.png',
    },
  }
];

const ORDRE_DESSOUS = ['Ailes', 'Fond', 'Aura']; // Ce qui va derrière
const ORDRE_DESSUS = [
  'Collants','Chaussettes','Escarpins','Bodies','Cintres',
  'Slims','Bottines','Fluides','Jupes','Blouses','Robes',
  'Coiffures','Nimbes'
];


let categorieActuelle = 'Coiffures';
let categorieVisage = 'Coiffures';
let selections = {};
let selectionsVisage = {};
let apercu = null;
let apercuVisage = null;
let mannequinVisageActuel = 'mannequin-visage.png';
let historiqueAnnulation = [];
let historiqueAnnulationVisage = [];
let selectionAvantChance = null;
let selectionVisageAvantChance = null;
let selectionAvantApercu = {};
let selectionVisageAvantApercu = {};
let enCoursDeCliqueCorps = false;
let enCoursDeCliqueVisage = false;

// ===== CORPS =====



// 2. La fonction maîtresse (ton "chef d'orchestre")

  
function construireCategories() {
  const cont = document.getElementById('categories');
  cont.innerHTML = '';
  Object.keys(vetements).forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'cat-btn' + (cat === categorieActuelle ? ' actif' : '');
    btn.textContent = cat;
    btn.onclick = () => {
      categorieActuelle = cat;
      document.querySelectorAll('#categories .cat-btn').forEach(b => b.classList.remove('actif'));
      btn.classList.add('actif');
      construireGrille();
    };
    cont.appendChild(btn);
  });
}

function construireGrille() {
  const grille = document.getElementById('grille');
  grille.innerHTML = '';
  vetements[categorieActuelle].forEach(item => {
    const v = document.createElement('div');
    v.className = 'vignette' + (selections[categorieActuelle] === item.fichier ? ' selectionne' : '');
    v.innerHTML = `<img src="${item.fichier}" alt="${item.nom}">`;
    v.onclick = () => {
      if (selections[categorieActuelle] === item.fichier) {
        delete selections[categorieActuelle];
      } else {
        selections[categorieActuelle] = item.fichier;
        ajouterHistorique(item.fichier, categorieActuelle);
        historiqueAnnulation.push(categorieActuelle);
        appliquerIncompatibilites(categorieActuelle);
      }
      mettreAJourCalques();
      construireGrille();
    };
    v.onmouseenter = () => { apercu = item.fichier; mettreAJourCalques(); };
    v.onmouseleave = () => { apercu = null; mettreAJourCalques(); };
    grille.appendChild(v);
  });
}

function ajouterHistorique(fichier, categorie) {
  const grille = document.getElementById('historique-grille');
  const img = document.createElement('img');
  img.src = fichier;
  img.style.cursor = 'pointer';
  img.onclick = () => {
    selections[categorie] = fichier;
    appliquerIncompatibilites(categorie);
    mettreAJourCalques();
    construireGrille();
  };
  grille.insertBefore(img, grille.firstChild);
}

function annulerDernier() {
  if (selectionAvantChance == null) {
    selections = selectionAvantChance;
    selectionAvantChance = null;
  } else if (historiqueAnnulation.length > 0) {
    const derniere = historiqueAnnulation.pop();
    delete selections[derniere];
  }
  mettreAJourCalques();
  construireGrille();
}

function toutEffacer() {
  selectionAvantChance = { ...selections };
  selections = {};  
  document.getElementById('historique-grille').innerHTML = '';
  mettreAJourCalques();
  construireGrille();
}

function appliquerIncompatibilites(cat) {
  if (cat === 'Robes') {
    delete selections['Bodies'];
    delete selections['Fluides'];
    delete selections['Slims'];
    delete selections['Blouses'];
    delete selections['Tops'];
    delete selections['Jupes'];
  }
  if (cat === 'Vestes') { delete selections['Tops']; }
  if (cat === 'Blouses') {
    delete selections['Tops'];
    delete selections['Robes'];
    delete selections['Cintres'];
  }
  if (cat === 'Cintres') {
    delete selections['Robes'];
    delete selections['Blouses'];
  }
   if (cat === 'Fluides') {
    delete selections['Robes'];
    delete selections['Jupes'];
    delete selections['Slims'];
  }
  if (cat === 'Bodies') {
    delete selections['Robes'];
    delete selections['Cintres'];
    delete selections['Blouses'];
  }
 if (cat === 'Slims') {
  delete selections['Robes'];
  delete selections['Fluides'];
  delete selections['Jupes'];
 }
  if (cat === 'Jupes') {
    delete selections['Fluides'];
    delete selections['Slims'];
    delete selections['Robes'];
  }
  if (cat === 'Escarpins') delete selections['Bottines'];
  if (cat === 'Bottines') delete selections['Escarpins'];
}

function aupifTenue() {
  selectionAvantChance = { ...selections };
  selections = {};
  const robe = Math.random() > 0.5;
  if (robe) {
    const items = vetements['Robes'];
    if (items.length) selections['Robes'] = items[Math.floor(Math.random() * items.length)].fichier;
  } else {
    ['Bodies','Blouses','Cintres'].forEach(cat => {
      if (Math.random() > 0.5 && vetements[cat]?.length) {
        selections[cat] = vetements[cat][Math.floor(Math.random() * vetements[cat].length)].fichier;
        appliquerIncompatibilites(cat);
      }
    });
    ['Slims','Fluides','Jupes'].forEach(cat => {
      if (Math.random() > 0.5 && vetements[cat]?.length) {
        selections[cat] = vetements[cat][Math.floor(Math.random() * vetements[cat].length)].fichier;
        appliquerIncompatibilites(cat);
      }
    });
  }
  const chaussures = Math.random() > 0.5 ? 'Escarpins' : 'Bottines';
  if (vetements[chaussures]?.length) {
    selections[chaussures] = vetements[chaussures][Math.floor(Math.random() * vetements[chaussures].length)].fichier;
  }
  if (vetements['Coiffures']?.length) {
    selections['Coiffures'] = vetements['Coiffures'][Math.floor(Math.random() * vetements['Coiffures'].length)].fichier;
  }
  if (Math.random() > 0.5 && vetements['Collants']?.length) {
  selections['Collants'] = vetements['Collants'][Math.floor(Math.random() * vetements['Collants'].length)].fichier;
}
if (Math.random() > 0.5 && vetements['Chaussettes']?.length) {
  selections['Chaussettes'] = vetements['Chaussettes'][Math.floor(Math.random() * vetements['Chaussettes'].length)].fichier;
}
  mettreAJourCalques();
  construireGrille();
}

function aupifCategorie() {
  const items = vetements[categorieActuelle];
  if (!items || items.length === 0) return;
  const item = items[Math.floor(Math.random() * items.length)];
  selections[categorieActuelle] = item.fichier;
  ajouterHistorique(item.fichier, categorieActuelle);
  historiqueAnnulation.push(categorieActuelle);
  appliquerIncompatibilites(categorieActuelle);
  mettreAJourCalques();
  construireGrille();
}

function changerPeau(fichier, cercle) {
  document.getElementById('mannequin-corps').src = fichier;
  document.querySelectorAll('#selecteur-peau .cercle-peau').forEach(c => c.classList.remove('actif'));
  cercle.classList.add('actif');
}

// ===== VISAGE =====

// ← DEHORS de mettreAJourCalques
function sauvegarder() {
  localStorage.setItem('selections', JSON.stringify(selections));
  localStorage.setItem('selectionsVisage', JSON.stringify(selectionsVisage));
  localStorage.setItem('mannequinCorps', document.getElementById('mannequin-corps').src);
  localStorage.setItem('mannequinVisage', mannequinVisageActuel);
}

function restaurer() {
  const s = localStorage.getItem('selections');
  const sv = localStorage.getItem('selectionsVisage');
  const mc = localStorage.getItem('mannequinCorps');
  const mv = localStorage.getItem('mannequinVisage');
  if (s) selections = JSON.parse(s);
  if (sv) selectionsVisage = JSON.parse(sv);
  if (mc) document.getElementById('mannequin-corps').src = mc;
  if (mv) mannequinVisageActuel = mv;
}

restaurer(); // ← appelée une fois au chargement

function mettreAJourCalques() {
  document.querySelectorAll('.calque-vetement, .calque-derriere').forEach(el => el.remove());
  const zone = document.getElementById('zone-mannequin');
  const mannequin = document.getElementById('mannequin-corps');

  ORDRE_DESSOUS.forEach(cat => {
    const fichier = (apercu && cat === categorieActuelle) ? apercu : selections[cat];
    if (fichier) {
      const img = document.createElement('img');
      img.src = fichier;
      img.className = 'calque-derriere';
      zone.insertBefore(img, mannequin);
    }
  });

  ORDRE_DESSUS.forEach(cat => {
    const fichier = (apercu && cat === categorieActuelle) ? apercu : selections[cat];
    if (fichier) {
      const img = document.createElement('img');
      img.src = fichier;
      img.className = 'calque-vetement';
      zone.appendChild(img);
    }
  });

  sauvegarder(); // ← appelée à la fin, pas définie
}

function construireCategoriesVisage() {
  const cont = document.getElementById('categories-visage');
  cont.innerHTML = '';
  Object.keys(vetementsVisage).forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'cat-btn' + (cat === categorieVisage ? ' actif' : '');
    btn.textContent = cat;
    btn.onclick = () => {
      categorieVisage = cat;
      document.querySelectorAll('#categories-visage .cat-btn').forEach(b => b.classList.remove('actif'));
      btn.classList.add('actif');
      construireGrilleVisage();
    };
    cont.appendChild(btn);
  });
}

function construireGrilleVisage() {
  const grille = document.getElementById('grille-visage');
  grille.innerHTML = '';
  vetementsVisage[categorieVisage].forEach(item => {
    const v = document.createElement('div');
    v.className = 'vignette' + (selectionsVisage[categorieVisage] === item.fichier ? ' selectionne' : '');
    v.innerHTML = `<img src="${item.fichier}" alt="${item.nom}">`;
    v.onmouseenter = () => { apercuVisage = item.fichier; mettreAJourCalquesVisage(); };
    v.onmouseleave = () => { apercuVisage = null; mettreAJourCalquesVisage(); };
    v.onclick = () => {
      if (selectionsVisage[categorieVisage] === item.fichier) {
        delete selectionsVisage[categorieVisage];
      } else {
        selectionsVisage[categorieVisage] = item.fichier;
        ajouterHistoriqueVisage(item.fichier, categorieVisage);
        historiqueAnnulationVisage.push(categorieVisage);
      }
      mettreAJourCalquesVisage();
      construireGrilleVisage();
    };
    grille.appendChild(v);
  });
}

function ajouterHistoriqueVisage(fichier, categorie) {
  const grille = document.getElementById('historique-visage-grille');
  const img = document.createElement('img');
  img.src = fichier;
  img.style.cursor = 'pointer';
  img.onclick = () => {
    selectionsVisage[categorie] = fichier;
    mettreAJourCalquesVisage();
    construireGrilleVisage();
  };
  grille.insertBefore(img, grille.firstChild);
}

function annulerDernierVisage() {
  if (selectionVisageAvantChance == null) {
    selectionsVisage = selectionVisageAvantChance;
    selectionVisageAvantChance = null;
  } else if (historiqueAnnulationVisage.length > 0) {
    const derniere = historiqueAnnulationVisage.pop();
    delete selectionsVisage[derniere];
  }
  mettreAJourCalquesVisage();
  construireGrilleVisage();
}

function toutEffacerVisage() {
  selectionVisageAvantChance = { ...selectionsVisage }; 
  selectionsVisage = {};
  document.getElementById('historique-visage-grille').innerHTML = '';
  mettreAJourCalquesVisage();
  construireGrilleVisage();
}

function aupifVisage() {
  selectionVisageAvantChance = { ...selectionsVisage };
  selectionsVisage = {};
  Object.keys(vetementsVisage).forEach(cat => {
    const items = vetementsVisage[cat];
    if (items.length && Math.random() > 0.5) {
      selectionsVisage[cat] = items[Math.floor(Math.random() * items.length)].fichier;
    }
  });
  mettreAJourCalquesVisage();
  construireGrilleVisage();
}

function aupifCategorieVisage() {
  const items = vetementsVisage[categorieVisage];
  if (!items || items.length === 0) return;
  const item = items[Math.floor(Math.random() * items.length)];
  selectionsVisage[categorieVisage] = item.fichier;
  ajouterHistoriqueVisage(item.fichier, categorieVisage);
  historiqueAnnulationVisage.push(categorieVisage);
  mettreAJourCalquesVisage();
  construireGrilleVisage();
}


  function changerPeauVisage(fichier, cercle) {
  mannequinVisageActuel = fichier;
  document.querySelectorAll('#selecteur-peau-visage .cercle-peau').forEach(c => c.classList.remove('actif'));
  cercle.classList.add('actif');
  mettreAJourCalquesVisage();
}

// ===== NAVIGATION =====

function ouvrirCorps() {
  document.getElementById('vue-accueil').style.display = 'none';
  document.getElementById('vue-visage').style.display = 'none';
  document.getElementById('vue-corps').style.display = 'block';
  construireCategories();
  construireGrille();
  mettreAJourCalques();
  lookbookCorpsRendre();
}

function ouvrirVisage() {
  document.getElementById('vue-accueil').style.display = 'none';
  document.getElementById('vue-corps').style.display = 'none';
  document.getElementById('vue-visage').style.display = 'block';
  construireCategoriesVisage();
  construireGrilleVisage();
  mettreAJourCalquesVisage();
  lookbookVisageRendre();
}

function retour() {
  document.getElementById('vue-corps').style.display = 'none';
  document.getElementById('vue-visage').style.display = 'none';
  document.getElementById('vue-accueil').style.display = 'flex';
}

// ===== LOOKBOOK =====



let lookbookCorpsIndex = 0;
let lookbookVisageIndex = 0;

function lookbookCorpsRendre() {
  const tenue = lookbookTenues[lookbookCorpsIndex];
  const mini = document.getElementById('lookbook-corps-mini');
  mini.innerHTML = '';
  mini.onmouseenter = () => lookbookCorpsApercu(true);
  mini.onmouseleave = () => lookbookCorpsApercu(false);
  mini.addEventListener('click', lookbookCorpsAppliquer);
  const base = document.createElement('img');
  base.src = 'mannequin-corps.png';
  mini.appendChild(base);
  const ordreRendre  = ['Collants','Chaussettes','Escarpins','Bodies','Cintres','Slims','Bottines','Fluides','Jupes','Blouses','Robes','Coiffures']
  ordreRendre.forEach(cat => {
    if (tenue.corps[cat]) {
      const img = document.createElement('img');
      img.src = tenue.corps[cat];
      mini.appendChild(img);
    }
  });
  document.getElementById('lookbook-corps-nom').textContent = tenue.nom;
}

function lookbookVisageRendre() {
  const tenue = lookbookTenues[lookbookVisageIndex];
  const mini = document.getElementById('lookbook-visage-mini');
  mini.innerHTML = '';
  mini.onmouseenter = () => lookbookVisageApercu(true);
  mini.onmouseleave = () => lookbookVisageApercu(false);
  mini.addEventListener('click', lookbookVisageAppliquer);
  const ordreSous = ['Iris','Rouges à lèvres'];
  const ordreDesssus = ['Blush','Eye liners','Fards à paupières','Cils','Coiffures','Bijoux'];
  ordreSous.forEach(cat => {
    if (tenue.visage[cat]) {
      const img = document.createElement('img');
      img.src = tenue.visage[cat];
      mini.appendChild(img);
    }
  });
  const base = document.createElement('img');
  base.src = 'mannequin-visage.png';
  mini.appendChild(base);
  ordreDesssus.forEach(cat => {
    if (tenue.visage[cat]) {
      const img = document.createElement('img');
      img.src = tenue.visage[cat];
      mini.appendChild(img);
    }
  });
  document.getElementById('lookbook-visage-nom').textContent = tenue.nom;
}

function lookbookCorpsNav(dir) {
  lookbookCorpsIndex = (lookbookCorpsIndex + dir + lookbookTenues.length) % lookbookTenues.length;
  lookbookCorpsRendre();
}

function lookbookVisageNav(dir) {
  lookbookVisageIndex = (lookbookVisageIndex + dir + lookbookTenues.length) % lookbookTenues.length;
  lookbookVisageRendre();
}

function lookbookCorpsApercu(actif) {
  if (actif) {
    selectionAvantApercu = { ...selections };
    selections = { ...lookbookTenues[lookbookCorpsIndex].corps };
    mettreAJourCalques();
  } else {
    selections = { ...selectionAvantApercu };
    mettreAJourCalques();
  }
}

function lookbookCorpsAppliquer() {
  const tenue = lookbookTenues[lookbookCorpsIndex];
  selections = { ...tenue.corps };
  selectionAvantChance = { ...selectionAvantApercu };
  mettreAJourCalques();
  construireGrille();
}

function lookbookVisageApercu(actif) {
  if (actif) {
    selectionVisageAvantApercu = { ...selectionsVisage };
    selectionsVisage = { ...lookbookTenues[lookbookVisageIndex].visage };
    mettreAJourCalquesVisage();
  } else if (!enCoursDeCliqueVisage) {
    selectionsVisage = { ...selectionVisageAvantApercu };
    mettreAJourCalquesVisage();
  }
}

function lookbookVisageAppliquer() {
  enCoursDeCliqueVisage = true;
  selectionVisageAvantChance = { ...selectionVisageAvantApercu };
  selectionsVisage = { ...lookbookTenues[lookbookVisageIndex].visage };
  mettreAJourCalquesVisage();
  construireGrilleVisage();
  enCoursDeCliqueVisage = false;
}

// ===== BESTIAIRE =====

const bestiaire = {
  'Animal': [{ nom: 'Chat', fichier: 'bestiaire-chat.png' }],
  'Chapeaux': [],
  'Ornements': [],
  'Accessoires': [],
  'Corps': [],
  'Tete': [],
};

let selectionsBestiaire = {};
let categBestiaire = 'Animal';

function ouvrirBestiaire() {
  document.getElementById('modal-bestiaire').classList.add('ouvert');
  construireGrilleBestiaire();
}

function fermerBestiaire() {
  document.getElementById('modal-bestiaire').classList.remove('ouvert');
}

function selCategBestiaire(cat, emoji) {
  categBestiaire = cat;
  document.querySelectorAll('.icone-cercle').forEach(i => i.classList.remove('actif'));
  document.getElementById('icone-' + cat).classList.add('actif');
  document.getElementById('bestiaire-titre-cat').textContent = emoji + ' ' + cat;
  construireGrilleBestiaire();
}

function construireGrilleBestiaire() {
  const grille = document.getElementById('bestiaire-grille');
  grille.innerHTML = '';
  const items = bestiaire[categBestiaire] || [];
  if (items.length === 0) {
    grille.innerHTML = '<p style="color:#c084fc;font-size:0.9rem;">Bientôt disponible ✨</p>';
    return;
  }
 items.forEach(item => {
    const v = document.createElement('div');
    // On gère la classe 'selectionne' pour le contour visuel dans la grille
    v.className = 'bestiaire-vignette' + (selectionsBestiaire[categBestiaire] === item.fichier ? ' selectionne' : '');
    v.innerHTML = `<img src="${item.fichier}" alt="${item.nom}"><span>${item.nom}</span>`;

    v.onclick = () => {
      const calque = document.getElementById('calque-bestiaire');
      
      if (selectionsBestiaire[categBestiaire] === item.fichier) {
        // Si on clique sur l'item déjà sélectionné, on le retire
        delete selectionsBestiaire[categBestiaire];
        if (calque) {
          calque.style.display = 'none';
          calque.src = '';
        }
      } else {
        // Sinon, on l'ajoute sur le mannequin
        selectionsBestiaire[categBestiaire] = item.fichier;
        if (calque) {
          calque.src = item.fichier;
          calque.style.display = 'block';
        }
      }
      // On rafraîchit la grille pour mettre à jour l'encadré violet
      construireGrilleBestiaire();
    };

    grille.appendChild(v);
  });
}
// Nouvelle fonction pour gérer l'habillage dynamique du visage
function mettreAJourCalquesVisage() {
  // Supprime les anciens calques cosmétiques pour repartir propre
  document.querySelectorAll('.calque-visage-item').forEach(el => el.remove());
  
  const zone = document.getElementById('zone-visage');
  if (!zone) return;

  // On s'assure que l'image de base du mannequin visage prend la bonne couleur de peau
  let mannequin = document.getElementById('mannequin-visage');
  if (mannequin) {
    mannequin.src = mannequinVisageActuel;
  }

  // Ordre d'empilement des calques du visage (du plus profond au plus haut)
  const ordreVisage = [
    'Iris', 'Rouges à lèvres', 'Blush', 'Eye liners', 
    'Fards à paupières', 'Cils', 'Boucles d"oreilles', 'Colliers', 'Coiffures'
  ];

  ordreVisage.forEach(cat => {
    // Utilise l'aperçu au survol si présent, sinon la sélection enregistrée
    const fichier = (apercuVisage && cat === categorieVisage) ? apercuVisage : selectionsVisage[cat];
    if (fichier) {
      const img = document.createElement('img');
      img.src = fichier;
      img.className = 'calque-vetement calque-visage-item'; // Utilise les mêmes règles CSS d'alignement absolu
      zone.appendChild(img);
    }
  });

  // Sauvegarde l'état dans le LocalStorage
  sauvegarder();
}