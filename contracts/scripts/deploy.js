// deploy.js
const { ethers } = require('hardhat');

async function main() {
  // Deploy MenovaV3 contract
  const MenovaV3 = await ethers.getContractFactory('MenovaV3');
  const menovaV3 = await MenovaV3.deploy('MenovaV3', 'MVL3');
  await menovaV3.deployed();

  console.log('MenovaV3 deployed to:', menovaV3.address);
}

// MenovaV3 deployed to: 0x68FD7A467B130C1f7a64e14E66A20F36aD892314

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
