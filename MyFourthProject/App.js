import React from 'react';
import { Text, View, SectionList } from 'react-native';


export default StatesApp = () => {
  return (
    <View style = {{flex: 1, padding:22}}>
      <SectionList
        sections={[
          {title: 'A', data: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']},
          {title: 'C', data: ['California', 'Colorado', 'Connecticut']}, 
          {title: 'D', data: ['Deleware']}, 
          {title: 'F', data: ['Florida']}, 
          {title: 'G', data: ['Georgia']}, 
          {title: 'H', data: ['Hawaii']}
        ]} 
        renderItem={({item}) => <Text style={{padding: 10, fontSize: 40, height: 64,}}> {item}</Text>}
        renderSectionHeader={({section}) => <Text style={{paddingTop: 8, paddingLeft: 10, 
        paddingRight: 12,
        paddingBottom:8,
        fontWeight: 'bold', 
        backgroundColor: '#9FA8DA'}}>{section.title}</Text>}
        keyExtractor={(item, index) => index}
      />
    </View>
  ); //end of return statement
}


