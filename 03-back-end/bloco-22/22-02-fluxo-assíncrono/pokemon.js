const axios = require('axios');

const getPokemonById = async (id) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response.data;
  } catch (e) {
    return e;
  }
}

async function main(){
  const promises = [];
  for (let i = 0; i <= 50; i++) {
    let pokemonPromises = await getPokemonById(i);
    promises.push(pokemonPromises);
  }

  const pokemons = await Promise.all(promises);
  pokemons.forEach( pokemon => console.log(pokemon.name));
}

main();
