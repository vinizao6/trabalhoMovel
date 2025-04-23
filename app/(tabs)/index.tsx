import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { data } from '../../data';
import { Category } from '../../types/category'; 

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Catálogo!</Text>
      <Text style={styles.sub}>Explore por categorias:</Text>
      <FlatList
        data={data.categories}
        keyExtractor={(item) => item.id.toString()}
        horizontal 
        showsHorizontalScrollIndicator={false} 
        renderItem={({ item }) => (
          <Link href={`/categorias/${item.id}`} style={styles.categoryItem}>
            <Image source={{ uri: item.cover }} style={styles.categoryCover} />
            <Text style={styles.categoryTitle}>{item.title}</Text>
          </Link>
        )}
      />
      <Text style={styles.sub}>Ou use a aba Produtos para ver todos os itens.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  sub: { fontSize: 16, textAlign: 'center', marginBottom: 8 },
  categoryList: { marginTop: 8 },
  categoryItem: {
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    padding: 12,
    marginRight: 8,
    alignItems: 'center',
    width: 120, 
  },
  categoryCover: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 4,
  },
  categoryTitle: { fontSize: 16, fontWeight: '500', textAlign: 'center' },
});