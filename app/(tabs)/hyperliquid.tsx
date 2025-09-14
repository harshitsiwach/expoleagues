import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HyperliquidData } from '@/components/trading/HyperliquidData';
import { GlassView } from '@/components/ui/GlassView';

export default function HyperliquidScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <GlassView style={styles.glassContainer}>
        <HyperliquidData />
      </GlassView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  glassContainer: {
    flex: 1,
    padding: 16,
  },
});