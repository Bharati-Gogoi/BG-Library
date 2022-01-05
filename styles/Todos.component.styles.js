import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    todos_root:{flex:1},
    todo_block:{
        margin: 20, 
        marginBottom: '3%', 
        padding: 15, 
        borderBottomWidth: 0.5, 
        borderBottomColor: 'silver', 
        borderLeftWidth: 0.5, 
        borderLeftColor: 'silver', 
        backgroundColor: '#fcfffd'
    },
    todo_title:{
        color: '#003d00', 
        fontSize: 20, 
        flexShrink: 1
    },
    todo_statusView:{
        flexDirection: 'row', 
        paddingTop: 10
    },
    todo_statusText:{
        color: '#000'
    },
    todo_statusPend:{
        color: 'red', 
        fontWeight: '500'
    },
    todo_status_COmp:{
        color: '#00b3ff', 
        fontWeight: '500'
    },
    todo_duedate:{color: '#000', fontWeight: '500'}

});