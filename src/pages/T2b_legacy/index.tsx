import React, { useState } from 'react';
import { View, Text, TextInput, Platform, Picker, CheckBox, KeyboardAvoidingView} from 'react-native';

import PageHeader from '../../PageHeader';

import styles from './styles';

import { ScrollView, BorderlessButton, RectButton } from 'react-native-gesture-handler';

function T2b_legacy() {

    const [pickerValue, setPickerValue] = useState<string>(' ');
    const items = [
        'Clique e selecione o aluno',
        'Antonio Sabino Pereira ',
        'Amanda Sousa Camelo', 
        'Bruno Duarte da Silva', 
        'Carlos Henrique Albuquerque',
        'Daniel Santos Lima',
        'Dara Ingrid Ferreira do Nascimento',
        'Fábio Cruz de Castro',
        'João Fildelquino de Sousa',
        'Nataniel Pereira Melo',
        'Raul Savio Bragança',
    ]
    
    const [pickerNt01, setPickerNT01] = useState<string>(' ');
    const itemsNT01 = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

    const [pickerDisciplina, setPickerDisciplina] = useState<string>(' ');
    const itemsD = ['Filtrar disciplinas', 'Português', 'Matemática']

    

    const [isSelected, setSelection] = useState(false);

    function ss() {
           alert('Aluno registrado com sucesso!');
    }

    return(
        <KeyboardAvoidingView 
        style={{flex: 1}}
        behavior={Platform.OS == "ios"? "padding" : "height"}
        
        >

        <View style={styles.container}>
            <PageHeader 
                title="Frequência e Notas"              
            >
            
                  <View style={styles.searchForm}>
                        
                        <Text style={styles.label}>Aluno</Text>

                        <Picker 
                                mode="dropdown"
                                
                                selectedValue={pickerValue} 
                                onValueChange={(value) => setPickerValue(value) } 
                                style={styles.pickerComponent}
                            >
                               {items.map( (item) => (
                                    
                                    <Picker.Item value={item} label={item}  /> 
                               
                               ) ) }
                        </Picker>

                        
                                                                                                                      
                                                                                                                                
                          <View style={styles.containerCheck}>
                            <View style={styles.checkboxContainer}>
                              
                                <CheckBox
                                    
                                    value={isSelected}
                                    onValueChange={setSelection}
                                    style={styles.checkbox}
                                />
                            
                                <Text style={styles.labelCheck}></Text>
                                </View>
                                <Text>O Aluno estava presente? { isSelected ? "👍" : "👎"}
                                {'\n\t'}Clique na caixa se SIM
                                </Text>
                          </View>

                          <Text style={styles.labelDisciplina}>Disciplina</Text>

                          <Picker 
                                mode="dropdown"
                                
                                selectedValue={pickerDisciplina} 
                                onValueChange={(value) => setPickerDisciplina(value) } 
                                style={styles.pickerComponent}
                            >
                               {itemsD.map( (item) => (
                                    
                                    <Picker.Item value={item} label={item}  /> 
                               
                               ) ) }
                            </Picker>      


    
                        <View style={styles.inputGroup}>

                        
                        <View style={styles.inputBlock}>
                             
                        <Text style={styles.label}>NOTA 01</Text>
                                
                                <TextInput 
                                    style={styles.inputNota}
                                    placeholder="Clique"
                                    placeholderTextColor="#c1bccc"
                                />    
                                
                            
                            </View>

                            <View style={styles.inputBlock}>
                                
                                <Text style={styles.label}>NOTA 02</Text>

                                <TextInput 
                                    style={styles.inputNota}
                                    placeholder="Clique"
                                    placeholderTextColor="#c1bccc"
                                />

                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>NOTA 03</Text>
                                <TextInput 
                                    style={styles.inputNota}
                                    placeholder="Clique"
                                    placeholderTextColor="#c1bccc"
                                />
                                     
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>NOTA 04</Text>
                                <TextInput 
                                    style={styles.inputNota}
                                    placeholder="Clique"
                                    placeholderTextColor="#c1bccc"
                                />
                                     
                            </View>

                         </View>

                    <RectButton onPress={ss} style={styles.submitButton} >
                        <Text style={styles.submitButtonText}  >Registrar</Text>
                    </RectButton>
                     
                 </View>
               

            
            </PageHeader>
           

           <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{ //MELHOR PARA APLICAR PADDING, POIS ANTES O PADDING NOTTOM ESTAVA FALTANDO
                        paddingHorizontal: 16,
                        paddingBottom: 24,
                }}
           >
                            
           </ScrollView>

        </View>

        </KeyboardAvoidingView>  
    )
}

export default T2b_legacy;