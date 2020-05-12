import React from "react"
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Dimensions,
  Platform,
  Button,
} from "react-native"
import usePokemons from "../utils/use-pokemons-v2"
import { IPokemon } from "../utils/types"

type PokemonProps = Partial<IPokemon> & {
  onRemove: Function
}

const Pokemon: React.FC<PokemonProps> = ({
  name,
  image,
  onRemove,
}: PokemonProps) => {
  return (
    <View style={pokemonStyles.container}>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <Button title="x" onPress={() => onRemove(name)} />
        <Text style={pokemonStyles.name}>{name}</Text>
      </View>
      
      <Image source={{ uri: image }} style={pokemonStyles.image} />
    </View>
  )
}

export default function PokemonsWithAdd() {
  const { pokemons, addPokemon, removePokemon } = usePokemons()

  return (
    <View style={styles.container}>
      <Button title="Add Pokemon" onPress={addPokemon} />
      <FlatList
        style={styles.list}
        data={pokemons}
        renderItem={({ item }) => (
          <Pokemon
            name={item.name}
            image={item.image}
            onRemove={removePokemon}
          />
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    width: Dimensions.get("window").width - 100,
  },
  container: {
    flex: 1,
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
    textAlign: "right",
    fontFamily: Platform.OS === "android" ? "sans-serif" : "Verdana",
  },
})
