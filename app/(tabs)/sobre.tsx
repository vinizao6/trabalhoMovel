
import { View, Text, StyleSheet } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre Mim</Text>
      <Text style={styles.texto}>Nome: Vinicius</Text>
      <Text style={styles.texto}>Curso: Sistemas de Informação</Text>
      <Text style={styles.texto}>Semestre: 8º</Text>
      <Text style={styles.texto}>
        Aspiração: Quero seguir pela area de dados.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  texto: {
    fontSize: 16,
    marginBottom: 8,
  },
});
