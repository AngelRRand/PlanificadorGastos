import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        paddingVertical: 10,
    },
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
    }
});

export default styles