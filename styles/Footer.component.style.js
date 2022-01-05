import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    footerContainer:{
        // flex:0.1, .
        backgroundColor: 'white',
        flexDirection: 'row',
        width: '100%', 
        height: 'auto', 
        justifyContent: 'space-evenly', 
        alignItems: 'center',
        paddingBottom:10,
        paddingTop: 5
    },
    footerTabs:{
        textAlign: 'center',
        fontSize: 13,
        color: '#000', 
        borderRadius: 70, 
        borderWidth: 0.1,
        borderColor: '#aebee6',
        backgroundColor: '#f5fff9',
        // backgroundColor: '#f7fffd',
        padding: 15,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5,
        marginTop: -20,
    },
    midTab:{
        borderWidth: 0.2,
        marginTop: -30,
        padding: 25,
        textAlign: 'center',
        fontSize: 13,
        fontWeight: '500',
    }
});