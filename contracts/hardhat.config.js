const { task } = require('hardhat/config');

require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');
require('@openzeppelin/hardhat-upgrades');

const dotenv = require('dotenv').config();
const privateKey =
  '0x3d18f1c0cf830d673ab31b23347c52c71001221be614578a5d841b52b75aa772';

task('accounts', 'Prints The List Of Accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    hardhat: {
      // See its defaults
    },
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/dr5vLsOXr4NfxpbG12n_xWHIoDQbf_ZD',
      accounts: [privateKey],
      chainId: 80001,
      // gasPrice: 8000000000, // 8 Gwei
    },
  },
  solidity: {
    version: '0.8.10',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  etherscan: {
    apiKey: {
      mumbai: 'abc',
    },
    customChains: [
      {
        network: 'mumbai',
        chainId: 80001,
        urls: {
          apiURL: '',
          browserURL: '',
        },
      },
    ],
  },
};
