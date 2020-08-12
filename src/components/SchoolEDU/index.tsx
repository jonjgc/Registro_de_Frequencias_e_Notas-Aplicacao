import React from 'react';
import { View, Image, Text } from "react-native";
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

function SchoolEDU() {
    const { navigate } = useNavigation();

    function handleNavigateToLegacyFNPage() {
        navigate('LegacyFN');
    }

    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcToP_gGYgCF-WYF4Jq-DvxC66ZdC8zC3p2zPg&usqp=CAU'}}
                />

                <View style={styles.ProfileInfo}>
                    <Text style={styles.name}>Confitec EDU</Text>
                    <Text style={styles.subject}>Escola Técnica</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Preparando os nossos alunos no presente, para serem bons profissionais no futuro.
                
            </Text>

            <View style={styles.footer}>
              
                <View style={styles.buttonsContainer}>
                            <RectButton onPress={handleNavigateToLegacyFNPage} style={styles.contactButton}>                     
                        <Text style={styles.contactButtonText}>Frequências e Notas</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default SchoolEDU;