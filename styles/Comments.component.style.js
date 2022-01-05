import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    c_root:{
        flex: 1, 
        padding: 20
    },
    comment_heading:{
        color: '#41c300', 
        fontSize: 25, 
        textAlign: 'center', 
        borderBottomWidth: 0.5, 
        borderColor: '#dcedc8', 
        paddingBottom: 10, 
        marginLeft: '10%', 
        marginRight: '10%'
    },
    comnt_view:{
        padding: 20, 
        marginTop: 20, 
        backgroundColor: '#fcfffd',
        borderLeftWidth: 1, 
        borderLeftColor: 'silver',
        borderBottomWidth: 1, 
        borderBottomColor: 'silver'
    },
    cmt_AuthrName:{
        color: '#000', 
        fontSize:17, 
        fontWeight: '500'
    },
    cmt_AuthrEmail:{
        color: '#01579b'
    },
    comment_body:{
        color: '#000', 
        fontSize: 17, 
        paddingTop: 10
    }
});