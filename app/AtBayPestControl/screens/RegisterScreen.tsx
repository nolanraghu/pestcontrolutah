import React from 'react'
import {Button, ScrollView, Text, TextInput, TouchableOpacity, useColorScheme, View} from 'react-native'
import {buttonColor, getStyle} from '../assets/Stylesheets/Styles'
import {Input} from "react-native-elements";
import {loginText} from "../assets/Data/allTextLogin";
import InputBox from "../components/RenderTextBox";
import {registerText} from "../assets/Data/allTextRegister";
import {getUser} from "../assets/Data/Data";
import {logIn} from "../redux/action";
import {useDispatch} from "react-redux";

export default function RegisterScreen ({route, navigation}: any) {
    const params = route.params;
    let goingBack = false;
    if(params != undefined){
        //I think this is the only way to make an optional screen parameter
        goingBack = params.goingBack;
    }
  
    let User = getUser()
    const scheme = useColorScheme();
    let styles = getStyle(scheme);

    const dispatch = useDispatch();

    let InputArray = registerText.map(function(Text, index) {
        return  <InputBox
            key={index}
            errorMessage={Text.getErrorMessage()}
            type={Text.getType()}
            placeHolder={Text.getPlaceHolder()}
            onSubmitEditing={Text.onSubmit}
        />
    })

    function onPressButton () {
        if (User.validateUser()) navigation.navigate('RegisterScreen');
        else navigation.navigate('ProfileTabScreen');
    }

    let register = () => {
        getUser().logIn();
        if(goingBack){
            navigation.pop();
            navigation.goBack();
        }
        dispatch(logIn());
    }
      
    function onPressText () {
        navigation.navigate('LoginScreen')
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.loginHeadContainer}>
                    <Text style={styles.loginText}>Register</Text>
                    <Text style={styles.subText}>Please enter your information to register</Text>
                </View>
                <View style={styles.textArray}>
                    {InputArray}
                </View>
                <TouchableOpacity style={styles.submitButton}>
                    <Button title={'Register'} onPress={register} color={buttonColor}/>
                </TouchableOpacity>
                <View style={styles.wordRow}>
                    <Text style={styles.subText}>Already have an account? </Text>
                    <Text style={styles.hyperLink} onPress={onPressText}>Login here</Text>
                </View>
            </ScrollView>
        </View>
    )
}

