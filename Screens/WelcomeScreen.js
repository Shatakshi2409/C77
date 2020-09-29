import React from 'react';
import firebase from 'firebase';
import SantaAnimation from '../components/santaclaus'
import db from '../config'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default class WelcomeScreen extends React.Component {
  constructor(){
    super();
this.state={
  emailId:'',
  password:''
}
    
  }
  userSignup=(emailId,password)=>{
    firebase.auth().createUserWithEmailAndPassword(emailId,password)
    .then(response=>{
      return alert('user added successfully')
    })
    .catch(function(error){
      var errorcode=error.code;
      var errormessage=error.message;
      return alert(errormessage)
    })
  }
  userLogin=(emailId,password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId,password)
    .then(()=>{
      return alert('successfully login')
    })
    .catch(function(error){
      var errorcode=error.code;
      var errormessage=error.message;
      return alert(errormessage)
    })
  }
  render(){
  return (
 <View>
   <View>
     <SantaAnimation/>
   <Text>BookSanta</Text>
   </View>
   <View>
     <TextInput
     placeholder='Email Address'
    keyboardType='email-address'
    onChangeText={(Text)=>{
      this.setState({
        emailId:Text
      })
    }}
     ></TextInput>
     <TextInput
     placeholder='Password'
    secureTextEntry={true}
    onChangeText={(Text)=>{
      this.setState({
        password:Text
      })
    }}
     ></TextInput>
     <TouchableOpacity
     onPress={()=>{
       this.userLogin(this.state.emailId,this.state.password)
     }}
     ><Text>Login</Text></TouchableOpacity>
      <TouchableOpacity
     onPress={()=>{
      this.userSignup(this.state.emailId,this.state.password)
    }}
     ><Text>Sign-Up</Text></TouchableOpacity>
   </View>
 </View>
  );
}
}
