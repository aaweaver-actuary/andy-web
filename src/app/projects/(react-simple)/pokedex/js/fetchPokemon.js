// export let myPromise = new Promise((resolve, reject) => {

export const getPokemon = async (pokemonID) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
    .then((res) => res.json())
    .then((pokemon) => {
      return pokemon;
    })
    .catch((err) => console.log(err));
  return res;
};

const getSingleData = async (poke) => {
  const { url } = poke;
  const response = await fetch(url);
  const singlePokeDat = await response.json();
  // console.log('singlePokeDat:', singlePokeDat);
  return singlePokeDat;
};

const fetchPokemon = async () => {
  const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  let pokeData = [];

  // response from api
  const res = await fetch(pokemonUrl)
    // 1. convert response to json
    .then((res) => res.json())

    .then((pokemon) => {
      console.log('#1:', pokemon.results);
      return pokemon.results;
    })

    // 3. get the name & url from each pokemon
    .then((pokeArray) => {
      pokeArray.map((pokemon) => {
        const { name, url } = pokemon;
        let id = url.split('/')[6];
        let pokeObj = { name: name, url: url, id: id };
        pokeData.push(pokeObj);
      });

      return pokeData;
    })

    // 4. get the data for each pokemon
    .then(async (pokeData) => {
      for (const poke of pokeData) {
        const singlePoke = await getSingleData(poke);
        const { height, weight, sprites } = singlePoke;
        poke.height = height;
        poke.weight = weight;
        if (!sprites.other.home.front_default) {
          poke.spriteURL = sprites.front_default;
        } else {
          poke.spriteURL = sprites.other.home.front_default;
        }
      }
      console.log('#4:', pokeData);
      return pokeData;
    });

  // 5. return the data
  return res;
};

export default fetchPokemon;
