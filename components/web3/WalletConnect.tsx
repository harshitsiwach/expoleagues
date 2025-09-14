import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { GlassButton } from '@/components/ui/GlassButton';

interface WalletConnectProps {
  style?: any;
}

export const WalletConnect: React.FC<WalletConnectProps> = ({ style }) => {
  const { address, isConnected } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
  const { disconnect } = useDisconnect();

  const handleConnect = () => {
    // Connect with the first available connector (MetaMask, WalletConnect, etc.)
    if (connectors[0]) {
      connect({ connector: connectors[0] });
    } else {
      Alert.alert('No Wallet Found', 'Please install a wallet like MetaMask to continue.');
    }
  };

  const handleDisconnect = () => {
    disconnect();
  };

  const shortenAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <View style={[styles.container, style]}>
      {isConnected ? (
        <View style={styles.connectedContainer}>
          <Text style={styles.addressText}>{shortenAddress(address || '')}</Text>
          <GlassButton 
            title="Disconnect" 
            onPress={handleDisconnect} 
            style={styles.button}
            variant="secondary"
          />
        </View>
      ) : (
        <GlassButton 
          title={isLoading ? "Connecting..." : "Connect Wallet"} 
          onPress={handleConnect} 
          style={styles.button}
          disabled={isLoading}
        />
      )}
      
      {error && (
        <Text style={styles.errorText}>Error: {error.message}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  connectedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  addressText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  button: {
    minWidth: 150,
  },
  errorText: {
    color: '#EF4444',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
});