import { View, Text, StyleSheet, TextInput, Button } from 'react-native';


export default function Addition({addi, first, second}){

    // console.log({first})
    console.log({second})

    return(
        <View>
            <Text style={page.framework}>{addi.addition}</Text>
        </View>

    )



}

const page = StyleSheet.create({
    framework: {
        fontSize: 20,
        color: 'green',
    },

});