import { useState, useEffect } from "react"
import { IUsePokemonHook, IPokemon } from "./types"
import { getPokemons, getRandomPokemon } from "./pokemons-api"

function usePokemons(): IUsePokemonHook {
  const [pokemons, setPokemons] = useState<IPokemon[]>([])

  useEffect(() => {
    async function init() {
      const pokemons = await getPokemons()

      setPokemons(pokemons)
    }

    init()
  }, [])

  async function addPokemon() {
    const pokemon = await getRandomPokemon()
    setPokemons([pokemon, ...pokemons])
  }

  function removePokemon(pokemonName: string) {
    const filteredPokemons = pokemons.filter(({ name }) => name !== pokemonName)
    setPokemons(filteredPokemons)
  }

  return {
    pokemons,
    addPokemon,
    removePokemon,
  }
}

export default usePokemons
