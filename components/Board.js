import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image
} from 'react-native';

export default class Board extends Component{
    render(){
        return(
            <ScrollView style={styles.container} >
                {this.props.repos.map( repo => (
                    <View key={repo.id} style={styles.card} >
                        <Image 
                            source={{uri: repo.thumb}} 
                            style={styles.thumb} 
                        />
                        <View>  
                            <Text style={styles.projectName} >
                                {repo.project}
                            </Text>
                            <Text>{repo.author}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        );
    }
}

const styles = {
    container: {
        width: '100%',
        padding: 10
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 10,
        height: 80,
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center'
    },
    thumb: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginRight: 10
    },
    projectName: {
        fontSize: 15,
        fontWeight: 'bold'
    }

};