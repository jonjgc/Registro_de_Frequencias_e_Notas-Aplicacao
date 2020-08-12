import { StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
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

    pickerComponent:{
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
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
        width: '48%',
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    submitButton: {
        backgroundColor: '#04d361',
        height: 56,
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

export default styles;