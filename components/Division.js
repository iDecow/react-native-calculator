import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default function Division({operation, firstNumber, secondNumber}){
    let variable = firstNumber + operation + secondNumber;
    return(
        <View>
                  <Text style={page.framework}>
        {firstNumber} / {secondNumber} = {parseFloat(firstNumber)/parseFloat(secondNumber)}
      </Text>
        </View>

    )

}

const page = StyleSheet.create({
    framework: {
        fontSize: 20,
        color: "green",
      },

});