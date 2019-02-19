/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import Board from './components/Board';
import AddModal from './components/AddModal';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
      repos: [] 
    };
    this.addHandler = this.addHandler.bind(this);
  }
  async componentDidMount(){
    const repos = JSON.parse(await AsyncStorage.getItem('repos')) || [];
    this.setState({repos});
  }
  async addHandler(repo){
    const result = await fetch(`https://api.github.com/repos/${repo}`);
    const newRepo = await result.json();
    this.setState({
      modalVisible: false,
      repos: [...this.state.repos, {
          id: newRepo.id, 
          thumb: newRepo.owner.avatar_url, 
          project: newRepo.name, 
          author: newRepo.owner.login
        }]
    })
    AsyncStorage.setItem('repos', JSON.stringify(this.state.repos));
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Repositórios Loucos!</Text>
          <TouchableOpacity 
            style={{marginLeft: 10}} 
            onPress={()=>{this.setState({modalVisible: true})}} 
          >
            <Text style={styles.title} >+</Text>
          </TouchableOpacity>
        </View>
        <Board repos={this.state.repos} />
        <AddModal 
          visible={this.state.modalVisible} 
          onCancel={()=>{this.setState({modalVisible: false})}}
          onAdd={this.addHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    height: '100%'
  },
  header: {
    margin: 10,
    backgroundColor: '#FFF',
    margin: 0,
    height: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  title: {
    lineHeight: 80,
    fontSize: 20,
    color: '#333333',
    marginBottom: 5,
    fontWeight: 'bold'
  },
});
