import React, { Component } from 'react';
import {
    View,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';

export default class AddModal extends Component{
    constructor(props){
        super(props);
        this.state = {repository: ''}
    }
    render(){
        return(
            <Modal 
                visible={this.props.visible} 
                animationType={'fade'} 
                onRequestClose={()=>{}} 
            >
                <View style={styles.modalContainer} >
                    <View style={styles.boxContainer} >
                        <Text style={styles.title} >Entrar repositório:</Text>
                        <TextInput 
                            placeholder={'Organização/Repositório'} 
                            underlineColorAndroid={'rgba(0,0,0,0)'}
                            value={this.state.repository}
                            onChangeText={(repository)=>{
                                this.setState({repository: repository})
                            }}
                            style={{
                                alignSelf: 'stretch', 
                                borderWidth: 1, 
                                borderRadius: 5,
                                margin: 5
                            }}
                        />           
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
                            <TouchableOpacity 
                                onPress={() => {this.props.onAdd(this.state.repository)}}
                                style={[styles.button, styles.buttonAdd]}
                            >
                                <Text style={{color: '#fff'}} >Adicionar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={this.props.onCancel} 
                                style={[styles.button, styles.buttonCancel]}
                            >
                                <Text style={{color: '#fff'}}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
};

const styles = {
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxContainer: {
        width: 300,
        height: 200,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    button: {
        width: 100,
        borderRadius: 2,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    buttonAdd: {
        backgroundColor: '#00a8ff'
    },
    buttonCancel: {
        backgroundColor:'#e84118'
    }
}