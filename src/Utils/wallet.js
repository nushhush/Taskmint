import { BeaconWallet } from "@taquito/beacon-wallet";

// Create a BeaconWallet instance with Ghostnet configuration
export const wallet = new BeaconWallet({
    name: "marketplace-dapp",
    preferredNetwork: "ghostnet", // Set preferred network to Ghostnet
});

// Function to connect the wallet
export const connectWallet = async () => {
    try {
        // Request permissions for Ghostnet network
        await wallet.requestPermissions({ network: { type: "ghostnet" } });
        console.log("Wallet connected successfully to Ghostnet.");
    } catch (error) {
        console.error("Error connecting wallet to Ghostnet:", error);
        // Handle error connecting to Ghostnet
        throw error; // Rethrow the error to propagate it to the caller
    }
};

// Function to get the active account
export const getAccount = async () => {
    try {
        // Retrieve the active account on Ghostnet
        const activeAccount = await wallet.client.getActiveAccount();
        if (activeAccount) {
            console.log("Active account retrieved:", activeAccount.address);
            return activeAccount.address;
        } else {
            console.warn("No active account found on Ghostnet.");
            return "";
        }
    } catch (error) {
        console.error("Error retrieving active account:", error);
        // Handle error retrieving active account
        throw error; // Rethrow the error to propagate it to the caller
    }
};
