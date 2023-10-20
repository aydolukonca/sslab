const pokemons = [
  { id: 3, name: 'Bulbasaur', type: 'Grass', experience: 64 },
  { id: 7, name: 'Charmander', type: 'Fire', experience: 62 },
  { id: 13, name: 'Squirtle', type: 'Water', experience: 63 },
  { id: 56, name: 'Caterpie', type: 'Bug', experience: 39 },
  { id: 1408, name: 'Ekans', type: 'Poison', experience: 58 },
  { id: 63, name: 'Eevee', type: 'Normal', experience: 65 },
  { id: 27, name: 'Pikachu', type: 'Electric', experience: 112 },
  { id: 31, name: 'Pidgey', type: 'Flying', experience: 50 },
  { id: 21, name: 'Meowth', type: 'Normal', experience: 58 },
  { id: 22, name: 'Snorlax', type: 'Normal', experience: 154 },
  { id: 35, name: 'Psyduck', type: 'Water', experience: 64 },
];

// "Water" türündeki Pokemon'ları filtrelemek için kod satırı
const waterTypePokemons = pokemons.filter(pokemon => pokemon.type === 'Water');

// Kaç tane "Water" türündeki Pokemon olduğunu hesaplamak için kod satırı
const waterTypeCount = waterTypePokemons.length;

// "Water" türündeki Pokemon'ların isimlerini bulmak için kod satırları
const waterTypeNames = waterTypePokemons.map(pokemon => pokemon.name);

console.log(`Toplam ${waterTypeCount} "Water" türündeki Pokemon bulundu. İsimler: ${waterTypeNames.join(', ')}`);
