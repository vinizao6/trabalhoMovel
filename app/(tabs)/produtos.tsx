import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';
import { data } from '../../data';

export default function Produtos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todos os Produtos</Text>
      <FlatList
        data={data.products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            {item.image && (
              <Image
                source={{ uri: item.image }}
                style={styles.itemImage}
              />
            )}
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)}</Text>
            <Link href={`/produtos/${item.id}`} style={styles.link}>Detalhes</Link>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  item: { marginBottom: 12, padding: 12, backgroundColor: '#f2f2f2', borderRadius: 8, flexDirection: 'row', alignItems: 'center' },
  itemImage: { width: 80, height: 80, marginRight: 12, borderRadius: 4 },
  itemTitle: { fontSize: 18, fontWeight: '600', flex: 1 },
  itemPrice: { fontSize: 16, color: '#444', marginVertical: 4 },
  link: { color: '#007AFF' },
});