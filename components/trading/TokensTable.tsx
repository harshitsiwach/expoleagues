import React, { useState, useMemo } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { GlassView } from '../ui/GlassView';
import { GlassCard } from '../ui/GlassCard';

interface Token {
  id: string;
  name: string;
  symbol: string;
  price: string;
  change: string;
  logo?: string;
}

interface TokensTableProps {
  tokens: Token[];
  onAddToTeam: (token: Token, trade: 'positive' | 'negative') => void;
  selectedTokens: Token[];
}

export const TokensTable: React.FC<TokensTableProps> = ({
  tokens,
  onAddToTeam,
  selectedTokens,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('View All');

  const filters = ['View All', 'Metaverse', 'Entertainment', 'Energy', 'NFT', 'Gaming', 'Music'];

  const filteredTokens = useMemo(() => {
    return tokens.filter(token =>
      token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [tokens, searchQuery]);

  const isTokenSelected = (token: Token) => {
    return selectedTokens.some(selected => selected.symbol === token.symbol);
  };

  const renderToken = ({ item, index }: { item: Token; index: number }) => (
    <GlassCard style={styles.tokenCard}>
      <View style={styles.tokenRow}>
        <Text style={styles.tokenIndex}>{index + 1}</Text>
        
        <View style={styles.tokenInfo}>
          {item.logo && (
            <Image source={{ uri: item.logo }} style={styles.tokenLogo} />
          )}
          <View>
            <Text style={styles.tokenName}>{item.name}</Text>
            <Text style={styles.tokenSymbol}>{item.symbol}</Text>
          </View>
        </View>

        <View style={styles.priceInfo}>
          <Text style={styles.tokenPrice}>{item.price}</Text>
          <Text style={[
            styles.tokenChange,
            parseFloat(item.change.replace('%', '')) >= 0 ? styles.positive : styles.negative
          ]}>
            {item.change}
          </Text>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={[styles.actionButton, styles.positiveButton]}
            onPress={() => onAddToTeam(item, 'positive')}
            disabled={isTokenSelected(item)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.actionButton, styles.negativeButton]}
            onPress={() => onAddToTeam(item, 'negative')}
            disabled={isTokenSelected(item)}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    </GlassCard>
  );

  return (
    <GlassView style={styles.container} variant="clear">
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Choose Your Tokens</Text>
        <Text style={styles.subtitle}>
          Captain gets 2x points. Vice Captain gets 1.5x points
        </Text>
      </View>

      {/* Filters */}
      <View style={styles.filtersContainer}>
        <FlatList
          data={filters}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.filterButton,
                selectedFilter === item && styles.activeFilter
              ]}
              onPress={() => setSelectedFilter(item)}
            >
              <Text style={[
                styles.filterText,
                selectedFilter === item && styles.activeFilterText
              ]}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Search */}
      <GlassView style={styles.searchContainer} variant="tinted" tintColor="#1a1a1a">
        <TextInput
          style={styles.searchInput}
          placeholder="Search tokens..."
          placeholderTextColor="#666"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </GlassView>

      {/* Tokens List */}
      <FlatList
        data={filteredTokens}
        renderItem={renderToken}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={styles.tokensList}
      />
    </GlassView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#CCCCCC',
  },
  filtersContainer: {
    marginBottom: 16,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
  },
  activeFilter: {
    backgroundColor: '#3B82F6',
  },
  filterText: {
    color: '#CCCCCC',
    fontSize: 14,
  },
  activeFilterText: {
    color: '#FFFFFF',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    borderRadius: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#FFFFFF',
  },
  tokensList: {
    flex: 1,
  },
  tokenCard: {
    marginBottom: 8,
  },
  tokenRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  tokenIndex: {
    fontSize: 16,
    color: '#666',
    width: 30,
  },
  tokenInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  tokenLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  tokenName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  tokenSymbol: {
    fontSize: 14,
    color: '#CCCCCC',
  },
  priceInfo: {
    alignItems: 'flex-end',
    marginRight: 16,
  },
  tokenPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  tokenChange: {
    fontSize: 14,
    fontWeight: '500',
  },
  positive: {
    color: '#10B981',
  },
  negative: {
    color: '#EF4444',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  positiveButton: {
    backgroundColor: '#10B981',
  },
  negativeButton: {
    backgroundColor: '#EF4444',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});