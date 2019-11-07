import React from 'react';
import {View, Text} from 'react-native';


const GoalItem = props => {

    return (

        <View style = {styles.listItem} >

            <Text> {itemData.item.value} </Text> 

        </View>
    ) 
    
};

export default GoalItem;