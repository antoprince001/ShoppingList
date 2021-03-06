import React,{ useState } from 'react';

import { View, Text,StyleSheet,FlatList,Alert } from 'react-native';
import Header from './components/Header';
import { v4 as uuidv4 } from 'uuid';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
// import firestore from '@react-native-firebase/firestore';

const App = () => {

  const [items,setItems] = useState([
    { id :  uuidv4(), text : 'Milk'},
    { id :  uuidv4(), text : 'Butter'},
    { id :  uuidv4(), text : 'Cheese'},
    { id :  uuidv4(), text : 'Bread'},
  ]);

  const deleteItem = id=>{
    setItems(prevItems =>{
      return prevItems.filter(item=> item.id != id);
    });
  }

  const AddNew = (text)=>{
    // if(!item.text){
    //   Alert.alert('Error','Please enter an item',{text: 'Ok'});
    // }else{
    setItems(prevItems =>{
      return [{id: uuidv4(), text}, ...prevItems]
    })
  
  }

  return (
    <View style={styles.container}>
      <Header title='Shopping List'></Header>
      <AddItem addItem={AddNew}></AddItem>
      <FlatList 
        data={items} 
        renderItem={({item})=>(
          <ListItem item={item} deleteItem={deleteItem} add></ListItem>
      )}
       /> 
    </View>
  );
};


const styles = StyleSheet.create({
  container : {
    flex : 1,
    paddingTop : 60
  }
  
});

export default App;