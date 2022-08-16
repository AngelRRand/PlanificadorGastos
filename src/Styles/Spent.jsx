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
    },
    title:{
        fontSize:30,
        textAlign:'center',
        fontWeight:700,
    },
    TextNotExp:{
        marginTop:20,
        textAlign:'center',
        fontSize:20
    }
})

export default styles