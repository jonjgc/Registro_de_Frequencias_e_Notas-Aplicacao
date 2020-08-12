import React from 'react';

import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';


import styles from './styles'; 

function Landing() {
    const { navigate } = useNavigation();

    function handleNavigateToGiveClassePage() {
        navigate('GiveClasses');
    }

    function handleNavigateToStudyPages() {
        navigate('Study');
    }


    return (
      <View style = {styles.container}>
            <Image source={landingImg}  style = {styles.banner}/>

            <Text style = {styles.title}>
              Bem-vindo Professor(a), {'\n'}
              <Text style = {styles.titleBold}>Acesse seus registros abaixo </Text>
            </Text>

            <View style = {styles.buttonsContainer}>

              <RectButton 
                onPress={handleNavigateToStudyPages}
                style = {[styles.button, styles.buttonPrimary]} 
              >
                <Image source={studyIcon} />
                
              <Text style = {styles.buttonText}>Registros</Text>
              </RectButton>  

              
            </View>

            <View style={styles.landingFooter}>

                <Text style ={styles.totalConnections}>
                {'\u00A9'}{' '}2020 {''}Confitec
                   
                </Text>             

            </View>

      </View>

     
    )
}

export default Landing;