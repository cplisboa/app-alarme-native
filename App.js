import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button, Alert } from 'react-native';
import { ativaAlarme } from './services/ApiService';

export default function App() {

const [alarmeLigado, setAlarmeLigado] = useState(false);
const [mensagem, setMensagem] = useState('Aqui teremos as mensagens');

const toggleAlarme = (toggle) => {
  setAlarmeLigado(!alarmeLigado);
  ativaAlarme(toggle);
}

  return (
    <View style={styles.container}>
      { alarmeLigado && <Text> --nova Alarme atualmente LIGADO</Text> }
      { !alarmeLigado && <Text>-- nova Alarme atualmente DESLIGADO</Text> }

      { alarmeLigado &&
         <Button title='Desligar Alarme' onPress={()=> toggleAlarme('off')} /> }

      { !alarmeLigado &&
         <Button title='Ligar Alarme' onPress={()=> toggleAlarme('on')} /> }
      
      <Text> {mensagem} </Text>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
