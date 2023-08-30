// deploy.js
const { ethers } = require('hardhat');

async function main() {
  // Deploying the NFTMarketplace contract
  const MenovaPromptMarketplace = await ethers.getContractFactory(
    'MenovaPromptMarketplace'
  );
  const menovaPromptMarketplace = await MenovaPromptMarketplace.deploy('');

  await menovaPromptMarketplace.deployed();

  console.log(
    'MenovaPromptMarketplace contract deployed to:',
    menovaPromptMarketplace.address
  );
}

// 0x647B24DFDbbD41A9FBe96fdC8f4C9c985b1Ea252

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
