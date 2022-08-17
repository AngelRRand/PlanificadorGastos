import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
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
        marginBottom:20
    },
    containerCount:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    containerImage:{
        flexDirection:'row',
        alignItems:'center',
        flex:1,
    },
    image:{
        width: 80,
        height: 80,
        marginRight:20
    },
    containerText:{
        flex:1,
    },
    category:{
        color:'#94a3b8',
        fontSize:16,
        fontWeight:'700',
        textTransform:'uppercase',
        marginBottom:5,
    },
    name:{
        fontSize:22,
        color:'#6c6f74',
        marginBottom:5,
    },
    amount:{
        fontSize:22,
        fontWeight:'700',
    },
    day:{
        fontWeight:'700',
        color:'#d66481',
    }
})

export default styles