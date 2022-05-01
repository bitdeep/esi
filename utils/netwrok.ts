// DEV_NOTE : This import saves us the need to call dotenv.config() manually
import "dotenv/config";

// DEV_NOTE : Taken from https://github.com/wighawag/template-ethereum-contracts/blob/main/utils/network.ts

export function node_url(networkName: string): string {
  if (networkName) {
    const uri = process.env["ETH_NODE_URI_" + networkName.toUpperCase()];
    if (uri && uri !== "") {
      return uri;
    }
  }

  let uri = process.env.ETH_NODE_URI;
  if (uri) {
    uri = uri.replace("{{networkName}}", networkName);
  }
  if (!uri || uri === "") {
    // throw new Error(`environment variable "ETH_NODE_URI" not configured `);
    return "";
  }
  if (uri.indexOf("{{") >= 0) {
    throw new Error(
      `invalid uri or network not supported by nod eprovider : ${uri}`
    );
  }
  return uri;
}

export function getInfuraReadonlyUrl(): string {
  const infuraReadOnlyUrl = process.env["INFURA_READ_ONLY"] as string;

  return infuraReadOnlyUrl;
}

export function getMnemonic(networkName?: string): string {
  if (networkName) {
    const mnemonic = process.env["MNEMONIC_" + networkName.toUpperCase()];
    if (mnemonic && mnemonic !== "") {
      return mnemonic;
    }
  }

  const mnemonic = process.env.MNEMONIC;
  if (!mnemonic || mnemonic === "") {
    return "test test test test test test test test test test test junk";
  }
  return mnemonic;
}

export function accounts(networkName?: string): { mnemonic: string } {
  return { mnemonic: getMnemonic(networkName) };
}

export function scannerAPI(networkName?: string): string {
  console.log(`scannerAPI :: networkName: ${networkName}`);
  let apiKey = "";

  if (networkName) {
    apiKey = process.env["SCANNER_API_KEY" + networkName.toUpperCase()] || "";
  }

  return apiKey;
}
