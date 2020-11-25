import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import db from '../config.js'
import firebase from 'firebase'

export default class WelcomeScreen extends Component{
    constructor(){
        super();
        this.state({
            emailId: '',
            password: ''
        })
    }
    userSignUp=(emailId, password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
        .then((response)=>{
            return Alert.alert("User Added Successfully")
        })
        .catch(
            function(error){
                var errorcode = error.code
                var errormessage = error.message
                return Alert.alert("Error")
            }    
        )
    }
    userLogin=(emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
            return Alert.alert("Successfully Logged In")
        })
        .catch(
            function(error){
                var errorcode = error.code
                var errormessage = error.message
                return Alert.alert("Error")
            }    
        )
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    Hello
                </Text>
            <View>
                <Text style={styles.title}>
                    BookSanta
                </Text>
            </View>
            <View>
                <TextInput style={styles.loginBox} placeholder="abc@example.com" keyboardType="email-address" onChangeText={(text)=>{
                    this.setState({
                        emailId: text
                    })
                }}/>
                <TextInput style={styles.loginBox} placeholder="password" secureTextEntry={true} onChangeText={(text)=>{
                    this.setState({
                        password: text
                    })
                }}/>
                <TouchableOpacity style={[styles.button, {marginBottom:20, marginTop:20}]} onPress={()=>{
                    this.userLogin(
                        this.state.emailId, this.state.password
                    )
                }}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{
                    this.userSignUp(
                        this.state.emailId, this.state.password
                    )
                }}>
                    <Text style={styles.buttonText}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F8BE85',
    },
    title:{ 
        fontSize:65, 
        fontWeight:'300', 
        paddingBottom:30, 
        color : '#ff3d00' 
    },
    loginBox:{ 
        width: 300, 
        height: 40, 
        borderBottomWidth: 1.5, 
        borderColor : '#ff8a65', 
        fontSize: 20, 
        margin:10, 
        paddingLeft:10 
    },
    button:{ 
        width:300, 
        height:50, 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:25, 
        backgroundColor:"#ff9800", 
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 8, }, 
        shadowOpacity: 0.30, 
        shadowRadius: 10.32, 
        elevation: 16, 
    },
    buttonText:{ 
        color:'#ffff', 
        fontWeight:'200', 
        fontSize:20 
    }, 
    buttonContainer:{ 
        flex:1, 
        alignItems:'center' 
    }
})