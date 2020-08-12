import React, { useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Platform, Picker} from 'react-native';
import { Feather } from '@expo/vector-icons';
import PageHeader from '../../PageHeader';

import styles from './styles';
import TeacherItem from '../../components/TeacherItem';
import { ScrollView, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import SchoolEDU from '../../components/SchoolEDU';
import SchoolLAB from '../../components/SchoolLAB';


function TeacherList(this: any) {

    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    
    function inMaintenance() {
        alert('Funcionalidade está em fase de desenvolvimento, em algumas dias estará disponível :)')
    }

    function handleToggleFiltersVisible() {
        
        setIsFiltersVisible(!isFiltersVisible); //SE OS FILTROS NÃO FOREM ACIONADOS, ESSA FUNÇÃO ACIONA, POIS POR PADRÃO, ELES NÃO VEM ACIONADOS NA APLICAÇÃO
    }

    const [pickerValue, setPickerValue] = useState<string>(' ');
    const items = ['Filtrar por escola', 'Confitec Legacy', 'Confitec EDU', 'Confitec LAB']
    
    const [pickerTurma, setPickerTurma] = useState<string>(' ');
    const itemsT = ['Filtrar por turma', '1º A', '1º B', '2º A', '2º B', '3º A', '3º B']

    const [pickerDisciplina, setPickerDisciplina] = useState<string>(' ');
    const itemsD = ['Filtrar disciplinas', 'Português', 'Matemática']
    

    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

        

        <View style={styles.container}>
            <PageHeader 
                title="Escolas Disponíveis" 
                headerRight={(
                    
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color="#FFF" />
                    </BorderlessButton>
                )} //TEM PARÊNTES PORQUE É MAIS DE UMA LINHA DE CÓDIGO
            >
            
               { isFiltersVisible && ( 
                    <View style={styles.searchForm}>
                        
                        <Text style={styles.label}>Escola</Text>
                        
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
                    

                        <View style={styles.inputGroup}>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Turma</Text>

                                    <Picker 
                                        mode="dropdown"
                                        selectedValue={pickerTurma} 
                                        onValueChange={(value) => setPickerTurma(value) } 
                                        style={styles.pickerComponent}
                                    >
                                        {itemsT.map( (item) => (
                                                
                                            <Picker.Item value={item} label={item}  /> 
                                        
                                        ) ) }
                                    </Picker>   
                                

                            </View>
                        

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Disciplina</Text>
                                
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
                                

                            </View>

                         </View>

                    <RectButton onPress={inMaintenance} style={styles.submitButton} >
                        <Text style={styles.submitButtonText}>Filtrar</Text>
                    </RectButton>

                 </View>
               )}

            
            </PageHeader>
           

           <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{ //MELHOR PARA APLICAR PADDING, POIS ANTES O PADDING NOTTOM ESTAVA FALTANDO
                        paddingHorizontal: 16,
                        paddingBottom: 24,
                }}
           >
                <TeacherItem />
                <SchoolEDU />
                <SchoolLAB />
                
                
           </ScrollView>

        </View>

      </KeyboardAvoidingView>  
    )
}

export default TeacherList;