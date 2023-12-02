require('@nomiclabs/hardhat-waffle')
require('dotenv').config()

module.exports = {
  defaultNetwork: 'localhost',
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    goreli: {
      url: `https://goerli.infura.io/v3/4605da77a0c34a7eb7bda26c5c7338aa`,
      accounts: [`0xa1bbc290c128841601ff8bc23e9acb74bd4a913765c6a7901d67132a15c1f675`]
    }
  },
  solidity: {
    version: '0.8.11',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: './src/contracts',
    artifacts: './src/abis',
  },
  mocha: {
    timeout: 40000,
  },
}
