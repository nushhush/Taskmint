import { NFTStorage } from "nft.storage";

export function initializeNFTStorage() {
  const apiKey = "your api key";
  return new NFTStorage({ token: apiKey });
}

// export async function storeNFT(file, metadata) {
//   try {
//     // Store the NFT using the NFTStorage client
//     const metadataURI = await client.store({
//       ...metadata,
//       image: file
//     });
//     console.log("NFT stored successfully!");
//     console.log("Metadata URI:", metadataURI);
//     return metadataURI; // Return the metadata URI
//   } catch (error) {
//     console.error("Error storing NFT:", error);
//     throw error; // Throw the error for handling in the calling code
//   }
// }
//  to create the nft import this file and exprot in the create page 
