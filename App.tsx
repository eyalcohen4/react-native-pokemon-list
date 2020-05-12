import React, { useState } from "react"
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native"
import Lesson1 from "./lessons/01-initial"
import Lesson2 from "./lessons/02-animation"
import Lesson3 from "./lessons/03-add-one"
import Lesson4 from "./lessons/04-remove-one"

export default function App() {
  const lessons = [Lesson1, Lesson2, Lesson3, Lesson4]
  const [lesson, setLesson] = useState(0)

  const Comp = lessons[lesson]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.controls}>
        <Button title="Lesson 1" onPress={() => setLesson(0)} />
        <Button title="Lesson 2" onPress={() => setLesson(1)} />
        <Button title="Lesson 3" onPress={() => setLesson(2)} />
        <Button title="Lesson 4" onPress={() => setLesson(3)} />
      </View>
      <Comp />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1
  },
  controls: {
    height: 100,
    flexDirection: "row",
  },
})
