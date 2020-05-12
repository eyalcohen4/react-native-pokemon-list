import React, { useState, useEffect } from "react"
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  Platform,
} from "react-native"
import usePokemons from "../utils/use-pokemons"
import { IPokemon } from "../utils/types"

const Pokemon: React.FC<Partial<IPokemon>> = ({
  name,
  image,
}: Partial<IPokemon>) => {
  return (
    <View style={pokemonStyles.container}>
      <Text style={pokemonStyles.name}>{name}</Text>
      <Image source={{ uri: image }} style={pokemonStyles.image} />
    </View>
  )
}

export default function Pokemons() {
  const pokemons = usePokemons()

  return (
    <FlatList
      style={styles.list}
      data={pokemons}
      renderItem={({ item }) => <Pokemon name={item.name} image={item.image} />}
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
