import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const layoutStyle = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: wp("100%"),
    height: hp("100%"),
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: hp("5%"),
    marginTop: hp("7%"),
    width: wp("100%"),
    backgroundColor: "#e0e0e0",
  },
  responsiveBoxCounter: {
    width: wp("90%"),
    height: hp("20%"),
    backgroundColor: "gray",
    //borderWidth: 2,
    //borderColor: "orange",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: hp("1%"),
    marginTop: hp("1%"),
  },
  responsiveBoxTimer: {
    width: wp("90%"),
    height: hp("13%"),
    backgroundColor: "gray",
    //borderWidth: 2,
    //borderColor: "orange",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: hp("1%"),
    marginTop: hp("2%"),
  },
  responsiveContainerButton: {
    width: wp("90%"),
    height: hp("23%"),
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: hp("1%"),
    marginTop: hp("5%"),
    color: "red",
    backgroundColor: "red",
  },
  alignedText: {
    textAlign: "center",
  },
});
export default layoutStyle;
