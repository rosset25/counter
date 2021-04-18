// poner botones para reiniciar el counter y para mostrar opciones
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-paper";

// styles
import { layoutStyle } from "../styles";

// other imports

export default function ConfigurationPanel(props) {
  const { resetCounter } = props;

  // handles0

  return (
    <View>
      <Button
        type="contained"
        //style={layoutStyle.alignedText}
        //contentStyle={layoutStyle.responsiveContainerButton}
        onPress={resetCounter}
      >
        Reiniciar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({});
