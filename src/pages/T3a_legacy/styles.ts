import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },

    teacherList:{
        marginTop: -20,
    
    },

    searchForm:{
        marginBottom: 15,
    },

    label:{
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
    },

    labelNotas:{
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff', 
        marginLeft: 3,
    },

    labelDisciplina:{
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        marginTop: 50,
    },

    inputNota:{
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginTop: 4,
        marginBottom: 16,
    },

    containerCheck: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
      },
      checkboxContainer: {
        flexDirection: "row",
        marginTop: 5,
      },

      checkbox: {
        alignSelf: "center",
        marginTop: 100,
        marginLeft: 170,   
      },
      
      labelCheck: {
        marginLeft: 200,
      },

    pickerComponent:{
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },

    pickerComponentNotas:{
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        marginRight: 30,
        marginTop:28,
        marginBottom: 16,
        paddingTop: 40,
    },

    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },

    inputBlock: {
        width: '20%',
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    submitButton: {
        backgroundColor: '#04d361',
        height: 60,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    submitButtonText: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    }
})

export default style;