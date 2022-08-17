import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { Picker } from '@react-native-picker/picker';
const FilterSpent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Filter Spent</Text>
            <Picker
            >
                <Picker.Item label="--Selection--" value="" />
                <Picker.Item label="Save money" value="Save" />
                <Picker.Item label="Food" value="Food" />
                <Picker.Item label="House" value="House" />
                <Picker.Item label="Miscellaneous expenses" value="Expenses" />
                <Picker.Item label="Leisure" value="Leisure" />
                <Picker.Item label="Subscription" value="Subscription" />
                <Picker.Item label="Health" value="Health" />
            </Picker>
        </View>
    )
}

export default FilterSpent