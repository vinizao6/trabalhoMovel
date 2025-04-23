import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { data } from '../../data'; // Importe seus dados de produtos
import { Product } from '../../types/product'; // Importe a interface Product

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>(); // Garante que 'id' seja string
  const productId = Number(id); // Converte o ID para número
  const product: Product | undefined = data.products.find((p) => p.id === productId);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Produto não encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>R$ {product.price?.toFixed(2)}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  productImage: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    color: 'green',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
  },
});