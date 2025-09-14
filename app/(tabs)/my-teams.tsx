import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAccount } from 'wagmi';
import { GlassView } from '@/components/ui/GlassView';
import { GlassCard } from '@/components/ui/GlassCard';
import { getUserTeams } from '@/lib/api/supabase';

export default function MyTeamsScreen() {
  const { address, isConnected } = useAccount();
  const [teams, setTeams] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isConnected && address) {
      fetchUserTeams();
    }
  }, [isConnected, address]);

  const fetchUserTeams = async () => {
    if (!address) return;
    
    setLoading(true);
    try {
      const { data, error } = await getUserTeams(address);
      if (data && !error) {
        setTeams(data);
      }
    } catch (error) {
      console.error('Error fetching teams:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isConnected) {
    return (
      <SafeAreaView style={styles.container}>
        <GlassView style={styles.glassContainer}>
          <Text style={styles.title}>My Teams</Text>
          <Text style={styles.subtitle}>Please connect your wallet to view your teams.</Text>
        </GlassView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <GlassView style={styles.glassContainer}>
        <Text style={styles.title}>My Teams</Text>
        {loading ? (
          <Text style={styles.loadingText}>Loading teams...</Text>
        ) : teams.length === 0 ? (
          <Text style={styles.subtitle}>You haven't created any teams yet.</Text>
        ) : (
          <ScrollView>
            {teams.map((team) => (
              <GlassCard key={team.id} style={styles.teamCard}>
                <Text style={styles.teamName}>{team.team_name}</Text>
                <Text style={styles.teamInfo}>Contest ID: {team.contest_id}</Text>
                <Text style={styles.teamInfo}>Created: {new Date(team.created_at).toLocaleDateString()}</Text>
                <Text style={styles.teamInfo}>Captain: {team.captain_token_symbol}</Text>
                <Text style={styles.teamInfo}>Vice Captain: {team.vice_captain_token_symbol}</Text>
                <View style={styles.tokensContainer}>
                  <Text style={styles.sectionTitle}>Team Tokens:</Text>
                  {team.team_tokens.map((token: any, index: number) => (
                    <View key={index} style={styles.tokenRow}>
                      <Text style={styles.tokenSymbol}>{token.token_symbol}</Text>
                      <Text style={styles.tokenPrediction}>
                        ({token.prediction === 'positive' ? '↑' : '↓'})
                      </Text>
                    </View>
                  ))}
                </View>
              </GlassCard>
            ))}
          </ScrollView>
        )}
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
  subtitle: {
    fontSize: 16,
    color: '#CCCCCC',
    textAlign: 'center',
    marginTop: 40,
  },
  loadingText: {
    fontSize: 16,
    color: '#CCCCCC',
    textAlign: 'center',
    marginTop: 40,
  },
  teamCard: {
    marginBottom: 16,
    padding: 16,
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  teamInfo: {
    fontSize: 14,
    color: '#CCCCCC',
    marginBottom: 4,
  },
  tokensContainer: {
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  tokenRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  tokenSymbol: {
    fontSize: 14,
    color: '#FFFFFF',
    marginRight: 8,
  },
  tokenPrediction: {
    fontSize: 14,
    color: '#10B981',
  },
});