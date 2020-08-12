import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },

    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
       
    },

    searchForm:{
        marginBottom: '100%',
    },

    label:{
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
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

    buttonLegacy: {
        marginBottom: 10,
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