import { View, Text, StyleSheet } from "react-native";

export default function Addition({ operation, firstNumber, secondNumber }) {
  let variable = firstNumber + operation + secondNumber;
  // rendu HTML
  return (
    <View>
      <Text style={page.framework}>
        {firstNumber} + {secondNumber} = {parseFloat(firstNumber)+parseFloat(secondNumber)}
      </Text>
    </View>
  );
}

//Gestion des styles
const page = StyleSheet.create({
  framework: {
    fontSize: 20,
    color: "green",
  },
});