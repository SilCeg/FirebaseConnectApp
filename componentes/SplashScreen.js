import React, {useEffect} from 'react';
import {View, ActivityIndicator, Image, StyleSheet} from 'react-native';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        //Define a duração do splash (4 segundos)
        const timer = setTimeout(() => {
            navigation.replace('Login'); //Após o tempo, navega para a tela de login
        }, 4000);
    
        return () => clearTimeout(timer); //Limpa o timer quando o componente for desmontado
           }, [navigation]);


        return(
            <View style={StyleSheet.splashContainer}>
                <Image source={{ uri: ''}} style={Styles.splashImage}/>
                <ActivityIndicator size='large' color="#0000ff" style={styles.loader}/>

            </View>
        );
};

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    splashImage: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    
    loader: {
        margintTop: 20,
    },
});


export default SplashScreen;