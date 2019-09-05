import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native'

export default class CompromissoHome extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.texto}>Página inicial</Text>
                </View>

                <View style={styles.botao}>
                <Button
                    title="Lista de Compromissos"
                    onPress={() => this.props.navigation.navigate('Compromissos')} />  
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto: {
      color:'#000000', 
      fontSize: 20
    },
    botao: {
      backgroundColor: '#fff000',
      width: '100%',
      height: '10%',
      justifyContent: 'center',
      alignItems: 'center'
    }
  });