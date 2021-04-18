import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-paper";

// styles
import { layoutStyle } from "../styles";

// other imports

export default function StartButton(props) {
  const { handleCount, count } = props;

  // handles0

  return (
    <View>
      <Button
        type="contained"
        //style={layoutStyle.alignedText}
        contentStyle={layoutStyle.responsiveContainerButton}
        onPress={handleCount}
        disabled={count >= 10}
      >
        Mee Meee
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({});
