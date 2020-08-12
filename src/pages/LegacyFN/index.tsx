import React from 'react';
import { View, Text, Image, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native'

import PageHeader from '../../PageHeader';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

function LegacyFN() {


    const { navigate } = useNavigation();

    function handleNavigateToLegacyFNPage() {
        navigate('T1a_legacy');
    }

    function handleNavigateToLegacyFNPage1() {
        navigate('T1b_legacy');
    }

    function handleNavigateToLegacyFNPage2() {
        navigate('T2a_legacy');
    }

    function handleNavigateToLegacyFNPage3() {
        navigate('T2b_legacy');
    }

    function handleNavigateToLegacyFNPage4() {
        navigate('T3a_legacy');
    }

    function handleNavigateToLegacyFNPage5() {
        navigate('T3b_legacy');
    }


    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

            <View style={styles.container}>              
            

                <PageHeader 
                    title="Escolha sua Turma" 
                >          
               
                    <View style={styles.searchForm}>

                        <View style={styles.buttonLegacy}>
                            <RectButton onPress={handleNavigateToLegacyFNPage} style={styles.submitButton} >
                                <Text style={styles.submitButtonText}>Turma 1º A </Text>
                            </RectButton>
                        </View>

                        <View style={styles.buttonLegacy}>
                            <RectButton onPress={handleNavigateToLegacyFNPage1} style={styles.submitButton} >
                                <Text style={styles.submitButtonText}>Turma 1º B</Text>
                            </RectButton>
                        </View>

                        <View style={styles.buttonLegacy}>
                            <RectButton onPress={handleNavigateToLegacyFNPage2} style={styles.submitButton} >
                                <Text style={styles.submitButtonText}>Turma 2º A</Text>
                            </RectButton>
                        </View>

                        <View style={styles.buttonLegacy}>
                            <RectButton onPress={handleNavigateToLegacyFNPage3} style={styles.submitButton} >
                                <Text style={styles.submitButtonText}>Turma 2º B</Text>
                            </RectButton>
                        </View>

                        <View style={styles.buttonLegacy}>
                            <RectButton onPress={handleNavigateToLegacyFNPage4} style={styles.submitButton} >
                                <Text style={styles.submitButtonText}>Turma 3º A</Text>
                            </RectButton>
                        </View>

                        <View style={styles.buttonLegacy}>
                            <RectButton onPress={handleNavigateToLegacyFNPage5} style={styles.submitButton} >
                                <Text style={styles.submitButtonText}>Turma 3º B</Text>
                            </RectButton>
                        </View>

                    </View>
               
                </PageHeader>
           
            </View>

        </KeyboardAvoidingView>
    )
}

export default LegacyFN;