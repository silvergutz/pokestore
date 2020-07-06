import api from './api';

export interface Pokemon {
  id?: number,
  name: string,
  price: number,
  image?: string | null,
}

export interface PokemonApiReturn {
  count: number,
  results: Pokemon[],
}

export async function loadPokemon(offset: number = 0, limit: number = 20): Promise<PokemonApiReturn> {
  const response = await api.get(`pokemon?limit=${limit}&offset=${offset}`);
  const results = response?.data?.results;
  if (results?.length) {
    const pokemon = results.map((result: { name: string, url: string }) => {
      const id = (result.url.split('/').reverse()[1] || 0) as number;
      return {
        id,
        name: result.name,
        price: 500 * (id / 2) + 100
      }
    });

    return {
      count: response.data.count,
      results: pokemon,
    };
  } else {
    return { count: 0, results: [] };
  }
}

export async function findPokemon(name: string): Promise<Pokemon | null> {
  const response = await api.get(`pokemon/${name}`);
  const data = response?.data;
  if (data) {
    const id = data.id as number;
    return {
      id,
      name,
      price: 500 * (data.id / 2) + 100,
      image: data?.sprites?.front_default,
    };
  }

  return null;
}