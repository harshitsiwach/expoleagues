import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HyperliquidData } from '@/components/trading/HyperliquidData';

export default function HyperliquidScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <HyperliquidData />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});