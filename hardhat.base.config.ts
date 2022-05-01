import "dotenv";
import "dotenv/config";

// DEV_NOTE : Using '@typechain/hardhat' instead of 'hardhat-typechain' because the latter did not work wellk
//            with new versions of typechain and typechain/etheres5 (peer dependencies problem)
// import "hardhat-typechain";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "hardhat-gas-reporter";
import "hardhat-contract-sizer";
import "hardhat-storage-layout";
import "@nomiclabs/hardhat-etherscan";
import { HardhatUserConfig } from "hardhat/config";
import { removeConsoleLog } from "hardhat-preprocessor";

console.log(`omry ${process.env.FORKING_URL}`)
export const hardHatConfig: HardhatUserConfig = {
  defaultNetwork: process.env.HARDHAT_NETWORK || "hardhat", // use HARDHAT_NETWORK only when running outside of a task or a script (advanced)
  networks: {
    hardhat: {
      // all defaults
      // forking: {
      //   url: process.env.MAINNET_FORKING_URL!,
      //   blockNumber: 12035949, // One before 12035950
      // },
    },
    localhost: {

      // all defaults

    },
    mainnet: {
      url: process.env.FORKING_URL || "", // keep empty default to allow loading with hardhat network
      accounts: {
        mnemonic:
          process.env.MNEMONIC ||
          "test test test test test test test test test test test junk",
      },
    },

  },

  preprocess: {
    eachLine: removeConsoleLog(
      (hre) =>
        hre.network.name !== "hardhat" && hre.network.name !== "localhost"
    ),
  },
  contractSizer: {
    disambiguatePaths: false,
    runOnCompile: true,
  },
  solidity: {
    compilers: [
      {
        version: "0.8.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          outputSelection: {
            "*": {
              "*": ["storageLayout"],
            },
          },
        },
      },
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          outputSelection: {
            "*": {
              "*": ["storageLayout"],
            },
          },
        },
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          outputSelection: {
            "*": {
              "*": ["evm.bytecode", "evm.deployedBytecode", "abi"],
            },
          },
          metadata: {
            useLiteralContent: true,
          },
          libraries: {},
        },
      },
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          outputSelection: {
            "*": {
              "*": ["storageLayout"],
            },
          },
        },
      },
      {
        version: "0.4.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          outputSelection: {
            "*": {
              "*": ["storageLayout"],
            },
          },
        },
      },
    ],
    // DEV_NOTE : IMPORTANT : The paths here are hard coded and will not through
    //                        a warning if they match no file. BE SURE that they point to an actual contract.

  },
  gasReporter: {
    // enabled: (process.env.REPORT_GAS) ? true : false
  },
  etherscan: {
    apiKey: {
      ropsten: process.env.SCANNER_API_KEY_ROPSTEN,
      opera: process.env.SCANNER_API_KEY_FANTOM_OPERA,
      bsc: process.env.SCANNER_API_KEY_BSC,
      moonbeam: process.env.SCANNER_API_KEY_MOONBEAM,
      polygon: process.env.SCANNER_API_KEY_MATIC_MAINNET,
    },
  },
  typechain: {
    outDir: "typechain",
  },
};

export default hardHatConfig;
