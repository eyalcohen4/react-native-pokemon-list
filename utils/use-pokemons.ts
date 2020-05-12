import { useState, useEffect } from "react"
import { IPokemon } from './types'
import { getPokemons } from './pokemons-api'

function usePokemons(): IPokemon[] {
  const [pokemons, setPokemons] = useState<IPokemon[]>([])

  useEffect(() => {
    async function init() {
      const pokemons = await getPokemons()

      setPokemons(pokemons)
    }

    init()
  }, [])

  return pokemons
}

export default usePokemons

