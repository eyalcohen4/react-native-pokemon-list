import React, { useState, useEffect } from "react"
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Dimensions,
  Platform,
  Animated,
} from "react-native"
import usePokemons from "../utils/use-pokemons"
import { IPokemon } from "../utils/types"

type PokemonProps = Partial<IPokemon> & {
  index: number
}

const Pokemon: React.FC<PokemonProps> = ({
  name,
  image,
  index,
}: PokemonProps) => {
  const opacity = new Animated.Value(0)

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 50 * index,
    }).start()
  })

  return (
    <Animated.View style={{ ...pokemonStyles.container, opacity }}>
      <Text style={pokemonStyles.name}>{name}</Text>
      <Image source={{ uri: image }} style={pokemonStyles.image} />
    </Animated.View>
  )
}

export default function Pokemons() {
  const pokemons = usePokemons()

  return (
    <FlatList
      style={styles.list}
      data={pokemons}
      renderItem={({ item, index }) => (
        <Pokemon name={item.name} image={item.image} index={index} />
      )}
      keyExtractor={(item) => item.name}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    width: Dimensions.get("window").width - 100,
  },
})

const pokemonStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    textAlign: "left",
    justifyContent: "space-between",
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
  },
  name: {
    fontSize: 28,
    fontFamily: Platform.OS === "android" ? "sans-serif" : "Verdana",
  },
})
