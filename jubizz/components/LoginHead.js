import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

const LoginHead = ({ onLogin }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Jobizz</Text>
            <View style={styles.headline}>
                <Text style={styles.headline1}>Welcome Back 👋</Text>
                <Text style={styles.headline2}>Let’s log in. Apply to jobs!</Text>
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                />
                <TouchableOpacity style={styles.button} onPress={onLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.socialLoginContainer}>
                <View style={styles.line} />
                <Text style={styles.orText}>Or continue with</Text>
                <View style={styles.line} />
            </View>

            <View style={styles.socialButtons}>
                <TouchableOpacity onPress={() => {}} style={styles.socialButton}>
                    <Image source={{uri: 'https://img.icons8.com/ios-filled/50/000000/mac-os.png'}} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style={styles.socialButton}>
                    <Image source={{uri: 'https://img.icons8.com/color/48/000000/google-logo.png'}} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style={styles.socialButton}>
                    <Image source={{uri: 'https://img.icons8.com/color/48/000000/facebook-new.png'}} style={styles.icon} />
                </TouchableOpacity>
            </View>

            <Text style={styles.registerText}>
                Haven’t an account? <Text style={styles.registerLink}>Register</Text>
            </Text>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    text: {
        fontSize: 30,
        padding: 15,
        paddingLeft: 0,
        fontFamily: "sans-serif",
        fontWeight: "bold",
        color: "#356899",
    },
    headline: {
        width: 300,
        height: 63,
        gap: 11,
    },
    headline1: {
        fontSize: 35,
        fontFamily: "sans-serif",
        fontWeight: "bold",
        color: "#0D0D26",
    },
    headline2: {
        fontSize: 18,
        fontFamily: "sans-serif",
    },
    form: {
        marginTop: 80,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
    },
    button: {
        backgroundColor: '#356899',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    socialLoginContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 30,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    },
    orText: {
        marginHorizontal: 10,
        color: '#0D0D26',
    },
    socialButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        marginBottom: 30,
    },
    socialButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 30,
        height: 30,
    },
    registerText: {
        textAlign: 'center',
        color: '#0D0D26',
    },
    registerLink: {
        color: '#356899',
        fontWeight: 'bold',
    },
});

export default LoginHead;
