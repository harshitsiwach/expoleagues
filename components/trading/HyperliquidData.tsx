import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { GlassView } from '../ui/GlassView';
import { GlassCard } from '../ui/GlassCard';

// Mock data for demonstration
const mockMarkets = [
  { symbol: 'BTC', name: 'Bitcoin', price: 25000 },
  { symbol: 'ETH', name: 'Ethereum', price: 1800 },
  { symbol: 'SOL', name: 'Solana', price: 25 },
  { symbol: 'AVAX', name: 'Avalanche', price: 12 },
  { symbol: 'MATIC', name: 'Polygon', price: 0.5 },
  { symbol: 'DOT', name: 'Polkadot', price: 4.2 },
  { symbol: 'LINK', name: 'Chainlink', price: 7.8 },
  { symbol: 'UNI', name: 'Uniswap', price: 3.5 },
  { symbol: 'AAVE', name: 'Aave', price: 65 },
  { symbol: 'ATOM', name: 'Cosmos', price: 8.9 },
];

interface Market {
  symbol: string;
  name: string;
  price: number;
}

interface MarketDetails {
  symbol: string;
  orderbook: any;
  candles: any[];
  meta: any;
  assetCtx: any;
}

export const HyperliquidData: React.FC = () => {
  const [markets, setMarkets] = useState<Market[]>(mockMarkets);
  const [selectedMarket, setSelectedMarket] = useState<Market | null>(null);
  const [marketDetails, setMarketDetails] = useState<MarketDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingDetails, setLoadingDetails] = useState(false);

  // Mock fetch markets
  const fetchMarkets = async () => {
    setLoading(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    setMarkets(mockMarkets);
    setLoading(false);
  };

  // Mock fetch market details
  const fetchMarketDetails = async (symbol: string) => {
    setLoadingDetails(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock data for market details
    const mockOrderbook = {
      levels: [
        // Bids
        Array.from({ length: 10 }, (_, i) => ({
          px: (25000 - i * 100).toString(),
          sz: (10 - i).toString()
        })),
        // Asks
        Array.from({ length: 10 }, (_, i) => ({
          px: (25000 + i * 100).toString(),
          sz: (10 - i).toString()
        }))
      ]
    };

    const mockCandles = Array.from({ length: 10 }, (_, i) => ({
      t: Date.now() - i * 300000,
      o: (25000 - i * 50).toString(),
      h: (25050 - i * 40).toString(),
      l: (24950 - i * 60).toString(),
      c: (25000 - i * 50).toString(),
      v: (100 + i * 10).toString()
    }));

    setMarketDetails({
      symbol,
      orderbook: mockOrderbook,
      candles: mockCandles,
      meta: {},
      assetCtx: { funding: '0.0001', openInterest: '1000000' },
    });
    
    setLoadingDetails(false);
  };

  useEffect(() => {
    fetchMarkets();
  }, []);

  const handleMarketSelect = (market: Market) => {
    setSelectedMarket(market);
    fetchMarketDetails(market.symbol);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  const renderMarketCard = ({ item }: { item: Market }) => (
    <TouchableOpacity onPress={() => handleMarketSelect(item)}>
      <GlassCard style={styles.marketCard}>
        <View style={styles.marketInfo}>
          <Text style={styles.marketName}>{item.name}</Text>
          <Text style={styles.marketType}>Perp</Text>
        </View>
        <Text style={styles.marketPrice}>{formatPrice(item.price)}</Text>
      </GlassCard>
    </TouchableOpacity>
  );

  if (!selectedMarket) {
    return (
      <GlassView style={styles.container} variant="clear">
        <View style={styles.header}>
          <Text style={styles.title}>Hyperliquid Markets</Text>
          <Text style={styles.subtitle}>Top 10 markets by price</Text>
        </View>

        {loading ? (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Loading markets...</Text>
          </View>
        ) : (
          <FlatList
            data={markets}
            renderItem={renderMarketCard}
            keyExtractor={(item) => item.symbol}
            showsVerticalScrollIndicator={false}
          />
        )}
      </GlassView>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <GlassView style={styles.detailsContainer} variant="clear">
        {/* Header */}
        <View style={styles.detailsHeader}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setSelectedMarket(null)}
          >
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
          
          <View style={styles.marketTitle}>
            <Text style={styles.marketSymbol}>{selectedMarket.symbol}/USD</Text>
            <Text style={styles.currentPrice}>{formatPrice(selectedMarket.price)}</Text>
          </View>
        </View>

        {loadingDetails ? (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Loading market details...</Text>
          </View>
        ) : marketDetails ? (
          <>
            {/* Market Stats */}
            <GlassCard style={styles.statsCard}>
              <Text style={styles.sectionTitle}>Market Statistics</Text>
              <View style={styles.statsGrid}>
                <View style={styles.statItem}>
                  <Text style={styles.statLabel}>24h High</Text>
                  <Text style={styles.statValue}>{formatPrice(selectedMarket.price * 1.05)}</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statLabel}>24h Low</Text>
                  <Text style={styles.statValue}>{formatPrice(selectedMarket.price * 0.95)}</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statLabel}>Funding Rate</Text>
                  <Text style={styles.statValue}>
                    {marketDetails.assetCtx?.funding ? 
                      `${(parseFloat(marketDetails.assetCtx.funding) * 100).toFixed(4)}%` : 
                      'N/A'}
                  </Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statLabel}>Open Interest</Text>
                  <Text style={styles.statValue}>
                    {marketDetails.assetCtx?.openInterest || 'N/A'}
                  </Text>
                </View>
              </View>
            </GlassCard>

            {/* Orderbook */}
            <GlassCard style={styles.orderbookCard}>
              <Text style={styles.sectionTitle}>Orderbook</Text>
              <View style={styles.orderbookContainer}>
                {/* Asks */}
                <View style={styles.orderbookSide}>
                  <Text style={styles.orderbookHeader}>Asks</Text>
                  {marketDetails.orderbook.levels?.[1]?.slice(0, 10).map((ask: any, index: number) => (
                    <View key={index} style={styles.orderbookRow}>
                      <Text style={[styles.orderbookPrice, styles.askPrice]}>
                        {parseFloat(ask.px).toFixed(2)}
                      </Text>
                      <Text style={styles.orderbookSize}>
                        {parseFloat(ask.sz).toFixed(4)}
                      </Text>
                    </View>
                  ))}
                </View>

                {/* Bids */}
                <View style={styles.orderbookSide}>
                  <Text style={styles.orderbookHeader}>Bids</Text>
                  {marketDetails.orderbook.levels?.[0]?.slice(0, 10).map((bid: any, index: number) => (
                    <View key={index} style={styles.orderbookRow}>
                      <Text style={[styles.orderbookPrice, styles.bidPrice]}>
                        {parseFloat(bid.px).toFixed(2)}
                      </Text>
                      <Text style={styles.orderbookSize}>
                        {parseFloat(bid.sz).toFixed(4)}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </GlassCard>

            {/* Recent Candles */}
            <GlassCard style={styles.candlesCard}>
              <Text style={styles.sectionTitle}>Recent Candles (5m)</Text>
              <View style={styles.candlesHeader}>
                <Text style={styles.candleHeaderText}>Time</Text>
                <Text style={styles.candleHeaderText}>Open</Text>
                <Text style={styles.candleHeaderText}>High</Text>
                <Text style={styles.candleHeaderText}>Low</Text>
                <Text style={styles.candleHeaderText}>Close</Text>
                <Text style={styles.candleHeaderText}>Volume</Text>
              </View>
              {marketDetails.candles.slice(0, 10).map((candle: any, index: number) => {
                const open = parseFloat(candle.o);
                const close = parseFloat(candle.c);
                const change = ((close - open) / open) * 100;
                const isPositive = change >= 0;

                return (
                  <View key={index} style={styles.candleRow}>
                    <Text style={styles.candleText}>
                      {new Date(candle.t).toLocaleTimeString().slice(0, 5)}
                    </Text>
                    <Text style={styles.candleText}>{open.toFixed(2)}</Text>
                    <Text style={styles.candleText}>{parseFloat(candle.h).toFixed(2)}</Text>
                    <Text style={styles.candleText}>{parseFloat(candle.l).toFixed(2)}</Text>
                    <Text style={[
                      styles.candleText,
                      isPositive ? styles.positive : styles.negative
                    ]}>
                      {close.toFixed(2)}
                    </Text>
                    <Text style={styles.candleText}>{parseFloat(candle.v).toFixed(2)}</Text>
                  </View>
                );
              })}
            </GlassCard>
          </>
        ) : null}
      </GlassView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#CCCCCC',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  loadingText: {
    fontSize: 16,
    color: '#CCCCCC',
  },
  marketCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    padding: 16,
  },
  marketInfo: {
    flex: 1,
  },
  marketName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  marketType: {
    fontSize: 14,
    color: '#CCCCCC',
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  marketPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: '#10B981',
  },
  detailsContainer: {
    flex: 1,
    padding: 16,
  },
  detailsHeader: {
    marginBottom: 20,
  },
  backButton: {
    marginBottom: 16,
  },
  backButtonText: {
    fontSize: 16,
    color: '#3B82F6',
  },
  marketTitle: {
    alignItems: 'center',
  },
  marketSymbol: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  currentPrice: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#10B981',
  },
  statsCard: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statItem: {
    width: '48%',
    marginBottom: 16,
  },
  statLabel: {
    fontSize: 14,
    color: '#CCCCCC',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  orderbookCard: {
    marginBottom: 20,
  },
  orderbookContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderbookSide: {
    flex: 1,
  },
  orderbookHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 12,
    textAlign: 'center',
  },
  orderbookRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  orderbookPrice: {
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
    textAlign: 'left',
  },
  orderbookSize: {
    fontSize: 14,
    color: '#CCCCCC',
    flex: 1,
    textAlign: 'right',
  },
  askPrice: {
    color: '#EF4444',
  },
  bidPrice: {
    color: '#10B981',
  },
  candlesCard: {
    marginBottom: 20,
  },
  candlesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    marginBottom: 8,
  },
  candleHeaderText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#CCCCCC',
    flex: 1,
    textAlign: 'center',
  },
  candleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  candleText: {
    fontSize: 12,
    color: '#FFFFFF',
    flex: 1,
    textAlign: 'center',
  },
  positive: {
    color: '#10B981',
  },
  negative: {
    color: '#EF4444',
  },
});