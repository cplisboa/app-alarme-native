import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button, Alert } from 'react-native';

export default function App() {

const [alarmeLigado, setAlarmeLigado] = useState(false);

const toggleAlarme = () => {
  setAlarmeLigado(!alarmeLigado);
}

  return (
    <View style={styles.container}>
      { alarmeLigado && <Text>Alarme atualmente LIGADO</Text> }
      { !alarmeLigado && <Text>Alarme atualmente DESLIGADO</Text> }

      { alarmeLigado &&
         <Button title='Desligar Alarme' onPress={()=> toggleAlarme()} /> }

      { !alarmeLigado &&
         <Button title='Ligar Alarme' onPress={()=> toggleAlarme()} /> }


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
