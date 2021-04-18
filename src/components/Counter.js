import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

// styles
import { layoutStyle } from "../styles";

// other imports

//const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export default function Counter(props) {
  const { count } = props;

  // handles

  return (
    <View style={layoutStyle.responsiveBoxCounter}>
      <Text style={layoutStyle.alignedText}>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
