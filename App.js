import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Picker, TextInput } from 'react-native';
import {useState} from 'react';
import Addition from './components/Addition'
import Soustraction from './components/Soustraction'
import Division from './components/Division'
import Multiplication from './components/Multiplication'

export default function App() {

const appSigne = {
  addition : '+',
  soustraction : "-",
  multiplication : "*",
  division : "/"
}




const [firstNumber, setFirstNumber] = useState(0)
const [secondNumber, setSecondNumber] = useState(0)
const [operation, setOperation] = useState("")
let result = ""
let string = ""
let number = ""
let affichage 

const displaySigne = (operation) => {
  return (
    appSigne = operation.split(' ').map()
  )
}

affichage = firstNumber + " " + operation + " " + secondNumber + " = "
result = firstNumber, operation, secondNumber 

  return (
    <View style={styles.container}>
        <Button 
          title="="  
          onPress={() => {
            
          }}               
        />
      <Text>{result}</Text>
      <Text>{affichage}</Text>
      <TextInput
      style={styles.input} 
      placeholder="Second chiffre/nombre"
      onChangeText={secondNumber => {
        setSecondNumber(secondNumber)
      }}
      />
      <Picker operation={operation}
      onValueChange={(itemValue, itemIndex) => setOperation(itemValue)}
      >
        <Picker.Item label={appSigne.addition} value="+"/>
        <Picker.Item label={appSigne.soustraction} value="-"/>
        <Picker.Item label={appSigne.division} value="/"/>
        <Picker.Item label={appSigne.multiplication} value="*"/>
      </Picker>
      <TextInput
      style={styles.input} 
      placeholder="Premier chiffre/nombre"
      onChangeText={firstNumber => {
        setFirstNumber(firstNumber)
      }}
      />
      <Addition addi={appSigne} first={firstNumber} second={secondNumber}/>
      <Soustraction sous={appSigne}/>
      <Division divi={appSigne}/>
      <Multiplication mult={appSigne}/>
{/* 
      <Text>{operation}</Text>
      <Text>{firstNumber}</Text> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column-reverse',
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderRadius: 4,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
    color : 'black'
  }
});
