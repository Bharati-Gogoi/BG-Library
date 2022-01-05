import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    post_root:{
        flex: 1, 
        flexDirection: 'column', 
        justifyContent:  'space-between'
    },
    post_heading:{
        color: '#41c300', 
        fontSize: 25, 
        textAlign: 'center', 
        padding: 15
    },
    post_view:{
        padding: 25, 
        margin: 10, 
        marginLeft: 20, 
        marginRight: 20,
        backgroundColor: '#fcfffd'
    },
    post_title:{
        color: '#000', 
        fontSize:20, 
        fontWeight: '600'
    },
    post_id:{
        color: '#000', 
        fontSize: 10, 
        textAlign: 'right'
    },
    post_body:{
        color: '#000', 
        fontSize: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: '#bec5b7'
    },
    comment_link:{
        alignItems:'flex-end'
    },
    comment_icon:{
        color: '#1faa00', 
        paddingTop: 10, 
        paddingRight: 10
    }
});