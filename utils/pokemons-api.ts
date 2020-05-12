import { IPokemon, IPokemonResponse } from "./types"

export async function getPokemons(): Promise<IPokemon[]> {
  const pokemons = []
  const request = await fetch("https://pokeapi.co/api/v2/pokemon/")
  const body = await request.json()

  for await (let pokemon of body.results) {
    const item = await getPokemon(pokemon.url)
    pokemons.push(item)
  }

  return pokemons
}

export async function getPokemon(url: string): Promise<IPokemon> {
  const request = await fetch(url)
  const body = await request.json()

  const pokemon: IPokemon = {
    url: body.url as string,
    name: body.name as string,
    image: body.sprites.front_default,
  }

  return pokemon
}

export async function getRandomPokemon(): Promise<IPokemon> {
  const numOfPokemons = 964
  const offset = 20
  const random = Math.floor(Math.random() * numOfPokemons) + offset

  return getPokemon(`https://pokeapi.co/api/v2/pokemon/${random}`)
}
