import React, { useEffect } from "react"
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  Platform,
  Button,
  Animated
} from "react-native"
import usePokemons from "../utils/use-pokemons-v2"
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

export default function PokemonsWithAdd() {
  const { pokemons, addPokemon } = usePokemons()

  return (
    <View style={styles.container}>
      <Button title="Add Pokemon" onPress={addPokemon} />
      <FlatList
        style={styles.list}
        data={pokemons}
        renderItem={({ item, index }) => (
          <Pokemon key={item.name} name={item.name} image={item.image} index={index} />
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    width: Dimensions.get("window").width - 100,
    flex: 1
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
