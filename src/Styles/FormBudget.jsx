import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3222c5f0',

    },
    form: {
        backgroundColor: 'white',
        marginHorizontal: 30,
        marginVertical: 10,
        padding: 10,
        borderRadius: 5,
        transform: [{ translateY: 50 }],
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    title:{
        textAlign: 'center',
        fontSize:28,
        marginVertical:30,
        color: '#64748b'
    },
    containerInput:{
        marginVertical:10,
    },
    label:{
        color: '#555f6e',
        textTransform:'uppercase',
        fontSize:16,
        fontWeight:'bold'
    },
    input:{
        backgroundColor:'#f5f5f5f5',
        padding: 10,
        borderRadius:10,
        marginTop:10
    },
    btnSubmit:{
        backgroundColor:'#3b81f6',
        marginTop:10,
        padding: 10,
    },
    btnText:{
        textAlign:'center'
        
    }
});


export default styles