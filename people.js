// Importazione delle funzioni dai moduli
const createFullName = require('./names');
const createHobbies = require('./hobbies');

// Funzione che restituisce un oggetto con nome completo e hobby
function getPersonInfo() {
  const fullName = createFullName('Fabio', 'Bianco');
  const hobbies = createHobbies('Calcio', 'Cinema', 'Cucina');

  return {
    fullName,
    hobbies
  };
}

// Esempio di utilizzo
console.log(getPersonInfo());
