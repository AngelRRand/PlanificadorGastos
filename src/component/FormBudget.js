import React, { useState } from 'react'
import { View, Text, Pressable, TextInput, SafeAreaView } from 'react-native'
import styles from '../Styles/FormBudget.jsx'

const FormBudget = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Pressable>
                    <Text>
                        Cancel
                    </Text>
                </Pressable>
            </View>
            <View>
                <Text>

                </Text>
            </View>
        </SafeAreaView>
    )
}

export default FormBudget