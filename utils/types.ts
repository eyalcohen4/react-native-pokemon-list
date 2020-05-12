export interface IPokemonResponse {
  sprites: { front_default: string }
  url?: string
  name?: string
}

export interface IPokemon {
  url: string
  name: string
  image: string
}

export interface IUsePokemonHook {
  pokemons: IPokemon[]
  removePokemon(name: string): void
  addPokemon(): void
}
