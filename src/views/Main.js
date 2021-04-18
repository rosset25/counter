import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
//import {} from "react-native-paper";

// styles
import { layoutStyle } from "../styles";

// other imports
import Counter from "../components/Counter";
import Timer from "../components/Timer";
import StartButton from "../components/StartButton";
import ConfigurationPanel from "../components/ConfigurationPanel";

export default function Main() {
  const [displayConfig, setDisplayConfig] = useState(false);
  const [count, setCount] = useState(0);

  // handles
  const handleCount = () => {
    setCount(count + 1);
  };

  const handleResetCounter = () => {
    setCount(0);
  };

  return (
    <View style={layoutStyle.backgroundContainer}>
      <View style={layoutStyle.container}>
        <ConfigurationPanel resetCounter={handleResetCounter} />
        <Timer />
        <Counter count={count} />
        <StartButton handleCount={handleCount} count={count} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
