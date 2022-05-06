import {
  StyleSheet,
  Text,
  View,
  Button,
  Picker,
  TextInput,
} from "react-native";
import { useState } from "react";
import Addition from "./components/Addition";
import Soustraction from "./components/Soustraction";
import Division from "./components/Division";
import Multiplication from "./components/Multiplication";

export default function App() {
  // déclaration des states
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operation, setOperation] = useState("+");

  //déclaration des variables
  const appSigne = {
    addition: "+",
    soustraction: "-",
    multiplication: "*",
    division: "/",
  };

  const displayOperationComponents = () => {
    if (operation === appSigne.addition) {
      return(
        <Addition operation={operation} firstNumber={firstNumber} secondNumber={secondNumber} />
        )
    }
    if (operation === appSigne.soustraction) {
      return (
        <Soustraction operation={operation} firstNumber={firstNumber} secondNumber={secondNumber} />
      )
    }
    if (operation === appSigne.multiplication){
      return (
        <Multiplication operation={operation} firstNumber={firstNumber} secondNumber={secondNumber} />
      )
    }
    if (operation === appSigne.division){
      return(
        <Division operation={operation} firstNumber={firstNumber} secondNumber={secondNumber} />
      )
    }
  }

  //return: ne contient que du rendu HTML
  return (
    <View style={styles.container}>
      {/* Permet à l'utilisateur de rentrer le premier nombre*/}
      <TextInput
        style={styles.input}
        placeholder="Premier chiffre/nombre"
          onChangeText={(firstNumber) => {
            setFirstNumber(firstNumber);
        }}
      />
      {/* Permet à l'utilisateur de choisir l'opération */}
      <Picker
        onValueChange={(signe) => {
          setOperation(signe)
          }
        }
      >
        <Picker.Item label={appSigne.addition} value={appSigne.addition} />
        <Picker.Item label={appSigne.soustraction} value={appSigne.soustraction}  />
        <Picker.Item label={appSigne.division} value={appSigne.division} />
        <Picker.Item label={appSigne.multiplication} value={appSigne.multiplication} />
      </Picker>
      {/* Permet à l'utilisateur de rentrer le deuxième nombre*/}
      <TextInput
        style={styles.input}
        placeholder="Deuxième chiffre/nombre"
        onChangeText={(secondNumber) => {
          setSecondNumber(secondNumber);
        }}
      />
      {/* Affichage des composants en fonction de l'opération */}
      {displayOperationComponents()}
    </View>
  );
}

//Gestion des styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center",
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
