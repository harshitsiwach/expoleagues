// Mock CoinGecko API implementation
export const coinGeckoAPI = {
  getMarkets: async () => {
    // Mock data
    const mockData = [
      {
        id: "bitcoin",
        name: "Bitcoin",
        symbol: "btc",
        current_price: 25000,
        price_change_percentage_24h: 2.5,
        image: "https://example.com/btc.png"
      },
      {
        id: "ethereum",
        name: "Ethereum",
        symbol: "eth",
        current_price: 1800,
        price_change_percentage_24h: -1.2,
        image: "https://example.com/eth.png"
      },
      {
        id: "solana",
        name: "Solana",
        symbol: "sol",
        current_price: 25,
        price_change_percentage_24h: 5.7,
        image: "https://example.com/sol.png"
      },
      {
        id: "cardano",
        name: "Cardano",
        symbol: "ada",
        current_price: 0.25,
        price_change_percentage_24h: 0.8,
        image: "https://example.com/ada.png"
      },
      {
        id: "ripple",
        name: "Ripple",
        symbol: "xrp",
        current_price: 0.5,
        price_change_percentage_24h: -0.3,
        image: "https://example.com/xrp.png"
      },
      {
        id: "polkadot",
        name: "Polkadot",
        symbol: "dot",
        current_price: 4.2,
        price_change_percentage_24h: 3.1,
        image: "https://example.com/dot.png"
      },
      {
        id: "dogecoin",
        name: "Dogecoin",
        symbol: "doge",
        current_price: 0.08,
        price_change_percentage_24h: 1.2,
        image: "https://example.com/doge.png"
      },
      {
        id: "matic",
        name: "Polygon",
        symbol: "matic",
        current_price: 0.5,
        price_change_percentage_24h: -2.1,
        image: "https://example.com/matic.png"
      }
    ];

    return { data: mockData, error: null };
  }
};