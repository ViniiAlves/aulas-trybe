const axios = require('axios');

const getPokemonById = async (id) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.data;
}

async function main(){
  for (let i = 1; i <= 50; i++) {
    const pokemon = await getPokemonById(i);
    console.log(pokemon.name);
  }
}

main();
