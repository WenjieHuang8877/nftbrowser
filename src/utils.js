const origin = "https://deep-index.moralis.io";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjlkYmYyNTVjLTFmYjYtNGM0Yi1hMDRiLTIwYjgzYTI2OGM1NyIsIm9yZ0lkIjoiMzQ3MzcwIiwidXNlcklkIjoiMzU3MDY0IiwidHlwZUlkIjoiZGZjM2M3OTctZTg0Yi00MTZlLTlmNGItM2YzMjYxNjY0YjM2IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2ODg4NTQyNjAsImV4cCI6NDg0NDYxNDI2MH0.dwGmBcc_qbOuu8kJI2PepdLwB4OrAuiHOvkS8_G0GmA";


// https://docs.moralis.io/reference/nft-api
export const searchNFTs = async (searchText) => {
  const url = new URL(`${origin}/api/v2/nft/search`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("q", searchText);
  url.searchParams.append("filter", "name");
  url.searchParams.append("limit", "12");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

export const getNFTTrades = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}/trades`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("marketplace", "opensea");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

export const getContractNFTs = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};


