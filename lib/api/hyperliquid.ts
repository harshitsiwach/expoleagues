// Mock Hyperliquid API implementation
export const hyperliquidAPI = {
  getAllMids: async () => {
    // Mock data
    const mockMids = {
      "BTC": "25000",
      "ETH": "1800",
      "SOL": "25",
      "AVAX": "12",
      "MATIC": "0.5",
      "DOT": "4.2",
      "LINK": "7.8",
      "UNI": "3.5",
      "AAVE": "65",
      "ATOM": "8.9"
    };

    return { data: mockMids, error: null };
  },

  getMeta: async () => {
    // Mock metadata
    const mockMeta = {
      universe: [
        { name: "BTC", szDecimals: 4 },
        { name: "ETH", szDecimals: 4 },
        { name: "SOL", szDecimals: 2 },
        // ... more assets
      ]
    };

    return { data: mockMeta, error: null };
  },

  getL2Orderbook: async (symbol: string) => {
    // Mock orderbook data
    const mockOrderbook = {
      levels: [
        // Bids
        Array.from({ length: 15 }, (_, i) => ({
          px: (25000 - i * 100).toString(),
          sz: (10 - i).toString()
        })),
        // Asks
        Array.from({ length: 15 }, (_, i) => ({
          px: (25000 + i * 100).toString(),
          sz: (10 - i).toString()
        }))
      ]
    };

    return { data: mockOrderbook, error: null };
  },

  getCandles: async (symbol: string, interval: string, startTime: number, endTime: number) => {
    // Mock candle data
    const mockCandles = Array.from({ length: 50 }, (_, i) => ({
      t: startTime + i * 300000, // 5-minute intervals
      o: (25000 - i * 50).toString(),
      h: (25050 - i * 40).toString(),
      l: (24950 - i * 60).toString(),
      c: (25000 - i * 50).toString(),
      v: (100 + i * 10).toString()
    }));

    return { data: mockCandles, error: null };
  }
};