// react
import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

// other imports
import Main from "./src/views/Main";

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Main />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
