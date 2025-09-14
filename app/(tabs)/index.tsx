import React, { useState, useEffect } from 'react';
import { ScrollView, View, Alert, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAccount } from 'wagmi';
import { GlassView } from '@/components/ui/GlassView';
import { GlassCard } from '@/components/ui/GlassCard';
import { TokensTable } from '@/components/trading/TokensTable';
import { HyperliquidData } from '@/components/trading/HyperliquidData';
import { useFantasyContract } from '@/lib/web3/contracts';
import { coinGeckoAPI } from '@/lib/api/coingecko';
import { saveTeamToDatabase } from '@/lib/api/supabase';

interface Token {
  id: string;
  name: string;
  symbol: string;
  price: string;
  change: string;
  logo?: string;
}

interface Contest {
  id: number;
  name: string;
  sport: string;
  prizePool: string;
  winners: number;
  progress: number;
  teamsLeft: number;
  totalTeams: number;
  currentParticipants: number;
  maxParticipants: number;
}

export default function HomePage() {
  const { address, isConnected } = useAccount();
  const { submitTeam, getActiveContests } = useFantasyContract();
  
  const [selectedTokens, setSelectedTokens] = useState<any[]>([]);
  const [teamName, setTeamName] = useState('');
  const [tokens, setTokens] = useState<Token[]>([]);
  const [contests, setContests] = useState<Contest[]>([]);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isContestModalOpen, setIsContestModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch crypto prices from CoinGecko (matching original API)
  const fetchTokenPrices = async () => {
    try {
      const { data, error } = await coinGeckoAPI.getMarkets();
      
      if (data) {
        const formattedTokens = data.map(token => ({
          id: token.id,
          name: token.name,
          symbol: token.symbol.toUpperCase(),
          price: `$${token.current_price.toFixed(2)}`,
          change: `${token.price_change_percentage_24h?.toFixed(2) || '0.00'}%`,
          logo: token.image,
        }));
        setTokens(formattedTokens);
      } else {
        console.error('Error fetching token prices:', error);
      }
    } catch (error) {
      console.error('Failed to fetch token prices:', error);
    }
  };

  // Fetch active contests from blockchain (matching original)
  const fetchContests = async () => {
    try {
      const contestsData = await getActiveContests();
      setContests(contestsData);
    } catch (error) {
      console.error('Error fetching contests:', error);
    }
  };

  useEffect(() => {
    fetchTokenPrices();
    fetchContests();
  }, []);

  // Add token to team (matching original logic)
  const handleAddToTeam = (token: any, trade: 'positive' | 'negative') => {
    if (selectedTokens.length >= 5) {
      Alert.alert("Team Full", "You can only add up to 5 players in your team.");
      return;
    }

    const newToken = { ...token, trade };
    setSelectedTokens(prevTokens => {
      const existingIndex = prevTokens.findIndex(t => 
        t.name === newToken.name && t.symbol === newToken.symbol
      );

      if (existingIndex !== -1) {
        const updatedTokens = [...prevTokens];
        updatedTokens[existingIndex] = newToken;
        return updatedTokens;
      } else {
        return [...prevTokens, newToken];
      }
    });
    
    setIsPanelOpen(true);
  };

  // Submit team to blockchain and database (matching original)
  const handleSubmitTeam = async (contestId: number) => {
    if (!isConnected || !address) {
      Alert.alert("Wallet Required", "Please connect your wallet first.");
      return;
    }

    if (selectedTokens.length !== 5) {
      Alert.alert("Invalid Team", "Please select exactly 5 players for your team.");
      return;
    }

    const captainToken = selectedTokens.find((t: any) => t.isCaptain);
    const viceCaptainToken = selectedTokens.find((t: any) => t.isViceCaptain);

    if (!captainToken || !viceCaptainToken) {
      Alert.alert("Captain Required", "Please select a captain and vice captain.");
      return;
    }

    if (captainToken.name === viceCaptainToken.name) {
      Alert.alert("Invalid Selection", "Captain and Vice-Captain cannot be the same.");
      return;
    }

    setLoading(true);

    try {
      // Submit to blockchain
      const playerIds = selectedTokens.map((t: any) => t.name);
      const predictions = selectedTokens.map((t: any) => t.trade === 'positive');
      
      const result = await submitTeam(
        contestId,
        playerIds,
        predictions,
        captainToken.name,
        viceCaptainToken.name
      );

      if (result.success) {
        // Save to database
        await saveTeamToDatabase(
          address,
          teamName,
          contestId,
          result.transactionHash,
          selectedTokens,
          captainToken,
          viceCaptainToken,
          result.teamIdFromContract
        );

        Alert.alert(
          "Success!", 
          `Team "${teamName || 'Team'}" submitted successfully!
Transaction: ${result.transactionHash}`
        );

        // Reset form
        setSelectedTokens([]);
        setTeamName('');
        setIsContestModalOpen(false);
        setIsPanelOpen(false);
      }
    } catch (error: any) {
      console.error('Error submitting team:', error);
      Alert.alert("Error", error.message || "Failed to submit team. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <GlassView style={styles.glassContainer}>
          {/* Hero Section */}
          <View style={styles.heroSection}>
            <Text style={styles.heroTitle}>Make your Dream Team</Text>
            <Text style={styles.heroSubtitle}>and Join Contests</Text>
            <Text style={styles.heroDescription}>
              Bet on cryptocurrencies with ease, security, and advanced features on our cutting-edge platform.
            </Text>
          </View>

          {/* Tokens Selection Table */}
          <TokensTable
            tokens={tokens}
            onAddToTeam={handleAddToTeam}
            selectedTokens={selectedTokens}
          />

          {/* Team Selection Panel Placeholder */}
          {isPanelOpen && (
            <GlassCard style={styles.panel}>
              <Text style={styles.panelTitle}>Team Selection Panel</Text>
              <Text style={styles.panelText}>Selected tokens: {selectedTokens.length}/5</Text>
              {selectedTokens.map((token, index) => (
                <View key={index} style={styles.tokenItem}>
                  <Text style={styles.tokenText}>{token.name} ({token.trade})</Text>
                </View>
              ))}
              <View style={styles.buttonContainer}>
                <Text style={styles.button} onPress={() => setIsPanelOpen(false)}>
                  Close
                </Text>
                <Text 
                  style={[styles.button, styles.primaryButton]} 
                  onPress={() => setIsContestModalOpen(true)}
                  disabled={selectedTokens.length !== 5}
                >
                  Save Team
                </Text>
              </View>
            </GlassCard>
          )}

          {/* Contest Selection Modal Placeholder */}
          {isContestModalOpen && (
            <GlassCard style={styles.modal}>
              <Text style={styles.modalTitle}>Select Contest</Text>
              {contests.map(contest => (
                <GlassCard key={contest.id} style={styles.contestItem}>
                  <Text style={styles.contestName}>{contest.name}</Text>
                  <Text style={styles.contestPrize}>Prize: ${contest.prizePool}</Text>
                  <Text style={styles.contestProgress}>
                    {contest.currentParticipants}/{contest.maxParticipants} teams
                  </Text>
                  <Text 
                    style={[styles.button, styles.primaryButton, styles.contestButton]}
                    onPress={() => handleSubmitTeam(contest.id)}
                  >
                    Join Contest
                  </Text>
                </GlassCard>
              ))}
              <Text 
                style={[styles.button, styles.secondaryButton]} 
                onPress={() => setIsContestModalOpen(false)}
              >
                Cancel
              </Text>
            </GlassCard>
          )}
        </GlassView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContainer: {
    flex: 1,
  },
  glassContainer: {
    flex: 1,
    padding: 16,
  },
  heroSection: {
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3B82F6',
    textAlign: 'center',
    marginBottom: 12,
  },
  heroDescription: {
    fontSize: 16,
    color: '#CCCCCC',
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  panel: {
    marginTop: 20,
    padding: 20,
  },
  panelTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  panelText: {
    fontSize: 16,
    color: '#CCCCCC',
    marginBottom: 12,
  },
  tokenItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  tokenText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    fontSize: 16,
    padding: 12,
    textAlign: 'center',
    borderRadius: 8,
    color: '#FFFFFF',
    backgroundColor: 'rgba(107, 114, 128, 0.2)',
    overflow: 'hidden',
  },
  primaryButton: {
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
  },
  secondaryButton: {
    backgroundColor: 'rgba(107, 114, 128, 0.2)',
    marginTop: 10,
  },
  modal: {
    marginTop: 20,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
    textAlign: 'center',
  },
  contestItem: {
    marginBottom: 16,
    padding: 16,
  },
  contestName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  contestPrize: {
    fontSize: 16,
    color: '#10B981',
    marginBottom: 4,
  },
  contestProgress: {
    fontSize: 14,
    color: '#CCCCCC',
    marginBottom: 12,
  },
  contestButton: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});