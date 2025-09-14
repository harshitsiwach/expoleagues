import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

// Note: In a real implementation, you would use environment variables
const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseAnonKey = 'your-supabase-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// Mock database helper functions
export const saveTeamToDatabase = async (
  walletAddress: string,
  teamName: string,
  contestId: number,
  transactionHash: string,
  selectedTokens: any[],
  captainToken: any,
  viceCaptainToken: any,
  teamIdFromContract?: number
) => {
  // Helper functions for parsing (same as original)
  const parsePrice = (priceStr: any) => {
    if (!priceStr) return null;
    if (typeof priceStr === 'number') return priceStr;
    const cleanPrice = priceStr.toString().replace(/[$,]/g, '');
    const parsed = parseFloat(cleanPrice);
    return isNaN(parsed) ? null : parsed;
  };

  const parsePercentage = (percentStr: any) => {
    if (!percentStr) return null;
    if (typeof percentStr === 'number') return percentStr;
    const cleanPercent = percentStr.toString().replace(/%/g, '');
    const parsed = parseFloat(cleanPercent);
    return isNaN(parsed) ? null : parsed;
  };

  // Team data (matching original structure)
  const teamData = {
    wallet_address: walletAddress,
    team_name: teamName || `Team-${Date.now()}`,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    contest_id: contestId,
    transaction_hash: transactionHash,
    blockchain_confirmed: true,
    submission_type: 'BLOCKCHAIN',
    entry_fee_paid: true,
    captain_token_symbol: captainToken.symbol,
    vice_captain_token_symbol: viceCaptainToken.symbol,
    team_id_from_contract: teamIdFromContract || null
  };

  console.log('Team data being sent to Supabase:', teamData);

  // Mock successful insertion
  const newTeam = {
    id: 'mock-team-id-' + Date.now(),
    ...teamData
  };

  console.log('Team inserted successfully:', newTeam);

  // Team tokens data (matching original structure)
  const teamTokensData = selectedTokens.map((token, index) => ({
    team_id: newTeam.id,
    contest_id: contestId,
    token_symbol: token.symbol,
    token_name: token.name,
    token_price: parsePrice(token.price),
    price_change_percent: parsePercentage(token.change),
    position: index + 1,
    prediction: token.trade,
    created_at: new Date().toISOString(),
    logo_url: token.logo || null,
    team_id_from_contract: teamIdFromContract || null
  }));

  console.log('Team tokens data being sent to Supabase:', teamTokensData);

  // Mock successful insertion
  const insertedTokens = teamTokensData.map((token, index) => ({
    id: 'mock-token-id-' + index,
    ...token
  }));

  console.log('Team tokens inserted successfully:', insertedTokens);

  return {
    team: newTeam,
    tokens: insertedTokens
  };
};

// Mock get user's teams
export const getUserTeams = async (walletAddress: string) => {
  // Mock data
  return {
    data: [
      {
        id: 'mock-team-id-1',
        wallet_address: walletAddress,
        team_name: 'My Awesome Team',
        created_at: new Date().toISOString(),
        contest_id: 1,
        transaction_hash: '0x' + 'a'.repeat(64),
        blockchain_confirmed: true,
        submission_type: 'BLOCKCHAIN',
        entry_fee_paid: true,
        captain_token_symbol: 'BTC',
        vice_captain_token_symbol: 'ETH',
        team_id_from_contract: 12345,
        team_tokens: [
          {
            id: 'mock-token-1',
            team_id: 'mock-team-id-1',
            contest_id: 1,
            token_symbol: 'BTC',
            token_name: 'Bitcoin',
            token_price: 25000,
            price_change_percent: 2.5,
            position: 1,
            prediction: 'positive',
            created_at: new Date().toISOString(),
            logo_url: 'https://example.com/btc.png'
          },
          {
            id: 'mock-token-2',
            team_id: 'mock-team-id-1',
            contest_id: 1,
            token_symbol: 'ETH',
            token_name: 'Ethereum',
            token_price: 1800,
            price_change_percent: -1.2,
            position: 2,
            prediction: 'negative',
            created_at: new Date().toISOString(),
            logo_url: 'https://example.com/eth.png'
          }
        ]
      }
    ],
    error: null
  };
};