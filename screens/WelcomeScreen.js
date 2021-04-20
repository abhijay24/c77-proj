import React from 'react';
import { StyleSheet, Text, View , TextInput, Alert, TouchableOpacity} from 'react-native';
import db from '../config';
import firebase from 'firebase'

export default class WelcomeScreen extends React.Component{
  constructor(){
      super()
      this.state = {
          email: " ",
          password: " "
      }
  }

  userSignUp = (email, password)=>{
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(response=>{
        return Alert.alert("User signed up successfully")
    })
  }
  

  }
  userLogin = (email, password)=>{
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(response=>{
        return Alert.alert("User logged in successfully")
    })
  }
    render(){
    return(
      <View style = {styles.container}>
          <View >

        <Text style = {{marginTop:20, fontSize: 20, fontWeight:"bold"}}>BARTER APP</Text>
          </View>
          <View>
          <TextInput 
          style = {styles.inputBox}
          placeholder = "email"
          keyboardType = "email-address"
          onChangeText = {(text)=>{
              this.setState({
                  email:text
              })
          }}
          />
             <TextInput 
          style = {styles.inputBox}
          placeholder = "password"
          secureTextEntry = {true}
          onChangeText = {(text)=>{
              this.setState({
                  password:text
              })
          }}
          />
          <TouchableOpacity onPress = {()=>{
              this.userSignUp(this.state.email, this.state.password)
          }}>
              <Text>Sign Up</Text>

          </TouchableOpacity>
          <TouchableOpacity onPress = {()=>{
              this.userLogin(this.state.email, this.state.password)
          }}>
              <Text>Login In</Text>
          </TouchableOpacity>
          </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
