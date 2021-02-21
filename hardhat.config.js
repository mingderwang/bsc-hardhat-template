const { mnemonic, privateKey, infuraProjectId, etherscanApiKey } = require('./secrets.json');

require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "👩🕵👨🙋👷 Prints the list of accounts (only for localhost)", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
  console.log("👩🕵 👨🙋👷 these accounts only for localhost network.");
  console.log('To see their private keys🔑🗝 when you run "npx hardhat node."');
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: etherscanApiKey
  },
  defaultNetwork: "bsctestnet", // <-- change here for other network, default use hardhat network.
  networks: {
  	localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/" + infuraProjectId,
      chainId: 3,
      gasPrice: 20000000000,
      // accounts: {mnemonic: mnemonic}
      accounts: [privateKey]
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/" + infuraProjectId,
      chainId: 4,
      gasPrice: 20000000000,
      accounts: [privateKey]
    },
    goerli: {
      url: "https://goerli.infura.io/v3/" + infuraProjectId,
      chainId: 5,
      gasPrice: 20000000000,
      accounts: [privateKey]
    },
    kovan: {
      url: "https://kovan.infura.io/v3/" + infuraProjectId,
      chainId: 42,
      gasPrice: 20000000000,
      accounts: [privateKey]
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 1000000000,
      accounts: [privateKey]
    },
    bsctestnet: {
      url: "https://data-seed-prebsc-2-s3.binance.org:8545/",
      chainId: 97,
      accounts: [privateKey]
    },
    poa: {
      url: "https://core.poanetwork.dev",
      chainId: 99,
      gasPrice: 1000000000,
      accounts: [privateKey]
    },
    poasokol: {
      url: "https://sokol.poa.network",
      chainId: 77,
      gasPrice: 20000000000,
      accounts: [privateKey]
    },
    xdai: {
      url: "https://dai.poa.network/",
      chainId: 100,
      gasPrice: 1000000000,
      accounts: [privateKey]
    }
  },
  solidity: {
  version: "0.7.0",
  settings: {
    optimizer: {
      enabled: true
    }
   }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
};

