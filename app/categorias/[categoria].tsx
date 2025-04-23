import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useLocalSearchParams, Link } from 'expo-router';
import { data } from '../../data';
import { Product } from '../../types/product';

export default function ProdutosCategoria() {
  const { categoria } = useLocalSearchParams<{ categoria: string }>();
  const catId = Number(categoria);
  const produtos = data.products.filter((p) => p.idCategory === catId);
  const categoriaData = data.categories.find((c) => c.id === catId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoriaData?.title || 'Categoria'}</Text>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)}</Text>
            <Link href={`/produtos/${item.id}`} style={styles.link}>
              Detalhes
            </Link>
          </View>
        )}
        ListEmptyComponent={<Text>Nenhum produto nessa categoria.</Text>}
      />
      <Link href="/categorias" style={styles.back}>
        ← Voltar
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  item: { marginBottom: 12, padding: 12, backgroundColor: '#f9f9f9', borderRadius: 8 },
  itemTitle: { fontSize: 18, fontWeight: '600' },
  itemPrice: { fontSize: 16, color: '#444', marginVertical: 4 },
  link: { color: '#007AFF', marginTop: 4 },
  back: { marginTop: 16, color: '#007AFF' },
});