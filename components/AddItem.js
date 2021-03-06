import React,{ useState } from 'react';

import { View, Text,StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({title,addItem}) => {

 const [text,setText] = useState('');

 const onChange = (textValue)=>setText(textValue);
  
 return (
    <View style={styles.header}>
      <TextInput placeholder="Add Item..." style={ styles.input } onChangeText={onChange}></TextInput>
      <TouchableOpacity style={ styles.btn } onPress={()=>addItem(text)}>
          <Text style={styles.btnText}><Icon name="plus" /> Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};



const styles = StyleSheet.create({
    input : {
        padding : 8,
        height : 60,
        fontSize : 16,
    },
    btn :{
        backgroundColor : '#c2bad8',
        padding : 9,
        margin : 5
    },
    btnText : {
        fontSize : 20,
        color: 'darkslateblue',
        textAlign: 'center'
    }
  
});

export default AddItem;