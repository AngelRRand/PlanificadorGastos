import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
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
    center:{
        alignItems:'center'
    },
    img:{
        width: 250,
        height: 250,
    },
    containerText:{
marginHorizontal:20
    },
    textValue:{
        fontWeight:700,
        color:'blue',
    },
    textLabel:{
        fontSize:24,
        textAlign:'center',
        marginBottom:10,
        marginLeft:10,
    }
});

export default styles