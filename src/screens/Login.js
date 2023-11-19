import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Pressable } from 'react-native'
import React from 'react'

const Login = ({ navigation }) => {
    return (
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={50} style={styles.container}>
            <View Style={styles.form}>
                <Text style={styles.label}>Username</Text>
                <TextInput style={styles.input} placeholder='Enter your username'/>
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input} placeholder='Enter your password'/>
                <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate('Browse')}>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        paddingHorizontal: 20,
          backgroundColor: "#f5f5f5",
    },
    form: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
        borderRadius: 5,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    buttonContainer: {
        width: 150,
        backgroundColor: "#4A55A2",
        padding: 15,
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 6,
        marginTop: 10,
        marginBottom: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
})