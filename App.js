import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ativaAlarme, ligaLuz } from './services/ApiService';

export default function App() {
  const [alarmeLigado, setAlarmeLigado] = useState(false);
  const [luzLigada, setLuzLigada] = useState(false);
  const [mensagem, setMensagem] = useState('Aqui teremos as mensagens');

  const toggleAlarme = (toggle) => {
    setAlarmeLigado(!alarmeLigado);
    ativaAlarme(toggle);
  };

  const toggleLuz = (toggle) => {
    setLuzLigada(!luzLigada);
    ligaLuz(toggle);
  };

  return (
    <View style={styles.container}>
      {alarmeLigado && <Text> Alarme atualmente LIGADO</Text>}
      {!alarmeLigado && <Text> Alarme atualmente DESLIGADO</Text>}

      {luzLigada && <Text> Luzes LIGADAS </Text>}
      {!luzLigada && <Text> Luzes DESLIGADAS </Text>}

      {alarmeLigado && (
        <Button title="Desligar Alarme" onPress={() => toggleAlarme('off')} />
      )}

      {!alarmeLigado && (
        <Button title="Ligar Alarme" onPress={() => toggleAlarme('on')} />
      )}

      {luzLigada && (
        <Button title="Desligar Luzes" onPress={() => toggleLuz('off')} />
      )}

      {!luzLigada && (
        <Button title="Ligar Luzes" onPress={() => toggleLuz('on')} />
      )}

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
