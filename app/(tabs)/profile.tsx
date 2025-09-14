import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAccount, useDisconnect } from 'wagmi';
import { GlassView } from '@/components/ui/GlassView';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';

export default function ProfileScreen() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <SafeAreaView style={styles.container}>
      <GlassView style={styles.glassContainer}>
        <Text style={styles.title}>Profile</Text>
        
        {isConnected ? (
          <GlassCard style={styles.profileCard}>
            <Text style={styles.sectionTitle}>Wallet Information</Text>
            <Text style={styles.walletLabel}>Connected Wallet:</Text>
            <Text style={styles.walletAddress} numberOfLines={1} ellipsizeMode="middle">
              {address}
            </Text>
            
            <View style={styles.buttonContainer}>
              <GlassButton 
                onPress={() => disconnect()} 
                variant="secondary"
                style={styles.button}
              >
                Disconnect Wallet
              </GlassButton>
            </View>
          </GlassCard>
        ) : (
          <GlassCard style={styles.profileCard}>
            <Text style={styles.sectionTitle}>Wallet Connection</Text>
            <Text style={styles.infoText}>Please connect your wallet to view profile information.</Text>
          </GlassCard>
        )}
        
        <GlassCard style={styles.infoCard}>
          <Text style={styles.sectionTitle}>App Information</Text>
          <Text style={styles.infoText}>Liquid Glass Crypto Fantasy Trading App</Text>
          <Text style={styles.infoText}>Version 1.0.0</Text>
        </GlassCard>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  profileCard: {
    marginBottom: 16,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  walletLabel: {
    fontSize: 16,
    color: '#CCCCCC',
    marginBottom: 8,
  },
  walletAddress: {
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 20,
    fontFamily: 'monospace',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    minWidth: 200,
  },
  infoCard: {
    padding: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#CCCCCC',
    marginBottom: 8,
  },
});