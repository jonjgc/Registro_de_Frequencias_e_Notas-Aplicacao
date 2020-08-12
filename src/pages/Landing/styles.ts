import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        flex: 1, //PERMITE QUE O BACKGROUND COLOR TOME TODO OS ESPAÇO DA TELA
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40
    },

    banner: {
        width: '100%',
        resizeMode: 'contain' //TODO O CONTEÚDO DA IMAGEM FICAR VISÍVEL
    },

    title: {
        fontFamily: 'Archivo_400Regular',
        color: '#FFF',
        fontSize: 20,
        lineHeight: 30,
        marginTop:70,

    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'center',
    },

    button:{
        height: 150,
        width: '48%', 
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between',
    },

    buttonPrimary: {
        backgroundColor: '#9871f5',
    },

    buttonSecondary: {
        backgroundColor: '#04d361',
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 18,
        
        
    },

    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        fontSize: 12,
        lineHeight: 20,
        marginTop: 40,
    },

    landingFooter: {
        alignItems: 'center',
    },  
    
});

export default styles;