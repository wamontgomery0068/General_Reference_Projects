import React, {useState} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button, 
  ScrollView,
  FlatList 
} from 'react-native';

// Imported Components
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      {key: Math.random().toString(), value: goalTitle}, 
    ]);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter( (goal) => goal.id !== goalId);
    });
  }

  return (
    <View style = {styles.screen} >

      {/* GoalInput Component */}
      <GoalInput onAddGoal = {addGoalHandler} />

      <FlatList 

        keyExtractor = {(item, index) => item.id}

        data = {courseGoals} 

        renderItem = {itemData => (

          // GoalItem Component
          <GoalItem 
            id = {itemData.item.id} 
            onDelete = {removeGoalHandler}
            title = {itemData.item.value} 
          />

        )} 

      />

    </View>
  );
}

const styles = StyleSheet.create({

  screen: {
    padding: 60
  }

});
