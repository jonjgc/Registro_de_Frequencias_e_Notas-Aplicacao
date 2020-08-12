import React from 'react';
import { View, Image, Text } from "react-native";
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'


import styles from './styles';

function TeacherItem() {

    const { navigate } = useNavigation();

    function handleNavigateToLegacyFNPage() {
        navigate('LegacyFN');
    }

    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0xaWJiRBK3q1b4Ci-v4Hlo6VjY4212KAUow&usqp=CAU'}}
                />

                <View style={styles.ProfileInfo}>
                    <Text style={styles.name}>Confitec Legacy</Text>
                    <Text style={styles.subject}>Escola Técnica</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Somos focados em guiar nossos alunos à escolherem os melhores caminho para sua vida profissional 
                
            </Text>

            <View style={styles.footer}>
             
                <View style={styles.buttonsContainer}>
                   
                        
                    <RectButton 
                        onPress={handleNavigateToLegacyFNPage} 
                        style={styles.contactButton}
                    >
                       
                        <Text style={styles.contactButtonText}>Frequências e Notas</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;