import React from 'react'
import {Button, View, StyleSheet, Text,FlatList,TouchableOpacity,ActivityIndicator,Image} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource:[]
    };
  }
  static navigationOptions = {
    tabBarIcon: ({focused, tintColor}) => (
      <Ionicons name={`ios-options${focused ? '' : '-outline'}`} size={25} color={tintColor} />
    ),
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
        dataSource: responseJson
      })
    })
      .catch(error=>console.log(error))
  }

  FlatListItemSeparator = () => {
    return (
      <View style={{
       height: .5,
       width:"100%",
       backgroundColor:"rgba(0,0,0,0.5)",
      }}
      />
    );
  }


   renderItem=(data)=>
      <TouchableOpacity style={styles.list}>
      <Text style={styles.lightText}>{data.item.id}</Text>
      <Text style={styles.lightText}>{data.item.title}</Text>
      <Image source={{uri: data.item.url}}
       style={{width: 400, height: 400}} />
      </TouchableOpacity>
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data= {this.state.dataSource}
          ItemSeparatorComponent = {this.FlatListItemSeparator}
          renderItem= {item=> this.renderItem(item)}
          keyExtractor= {item=>item.id.toString()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    textAlign: 'center',
  },
})
