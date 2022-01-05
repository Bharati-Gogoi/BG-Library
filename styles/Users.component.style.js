import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    u_root:{
        flex:1
    },
    user_heading:{
        color: '#41c300', 
        fontSize: 25, 
        textAlign: 'center', 
        padding: 15
    },
    user_block:{
        backgroundColor: '#fcfffd',
        padding: 25, 
        margin: 10, 
        marginLeft: 20, 
        marginRight: 20,
        borderLeftWidth: 1,
        borderLeftColor: '#dcded9',
        borderBottomWidth: 1,
        borderBottomColor: '#dcded9'
    },
    user_name:{
        color: '#003d00', 
        fontSize:17, 
        fontWeight: '600'
    },
    user_status:{
        color: '#60d102'
    },
    user_emailIcon:{
        color: '#524c00'
    },
    user_emailID:{
        color: '#524c00', 
        fontSize:12, 
        paddingLeft: 10, 
        flexShrink: 1, 
        width: '100%'
    },

    // FOR A USER DETAILS:
    u_root:{ flex:1 },
    u_view:{
        justifyContent: 'center', 
        padding: 20, 
        paddingTop: 50
    },
    u_name:{
        color: '#000', 
        fontSize: 30, 
        color: '#003d00',
        padding: 20, 
        borderBottomWidth: 0.5, 
        borderBottomColor: 'silver',
        textAlign: 'center'
    },
    u_block:{
        padding: 20
    },
    u_viewEmail:{
        paddingTop: 20, 
        flexDirection: 'row', 
        alignItems: 'center'
    },
    u_emailIcon:{
        color: '#524c00',
        fontWeight: '500'
    },
    u_emailID:{
        color: '#000', 
        flexShrink: 1, 
        paddingLeft: 15
    },
    u_viewStatus:{
        flexDirection: 'row', 
        paddingTop: 10
    },
    status:{
        color: '#000', 
        fontWeight: '500'
    },
    status_active:{color: '#008cff'},
    status_notactive:{color: '#629749'},
    u_genderView:{
        flexDirection: 'row',
        paddingTop: 10
    },
    u_genderText:{
        color: '#000', 
        fontWeight: '500'
    },
    u_genderVal:{
        color: '#000'
    },

    u_todos:{
        color: '#000', 
        padding: 10, 
        marginTop: 10,
        width: '50%',
        textAlign: 'center',
        borderRadius: 10, 
        borderWidth: 1, 
        borderColor:'#8bc34a', 
        backgroundColor: '#e1ffb1'
    },

    // TODOS OF A USER:
    t_root:{
        marginTop: 10,
        borderRadius: 10,
    },
    t_block:{
        backgroundColor: '#fcfffd', 
        padding: 15, 
        margin: 1, 
        marginBottom: 10, 
        borderColor: 'silver', 
        borderWidth: 0.5,
        borderRadius: 10
    },
    t_DueText:{
        color: '#000', 
        fontSize:15, 
        fontWeight: '500',
    },
    t_DueVal:{
        color: '#33691e', 
        fontSize:18, 
        fontWeight: '500', 
        borderBottomWidth: 0.3, 
        borderBottomColor: 'silver'
    },
    t_status_complete:{
        color: '#008cff', 
        padding: 5
    },
    t_status_pending:{
        color: 'red', 
        padding: 5
    },
    todo_title:{
        color: '#000'
    }
});