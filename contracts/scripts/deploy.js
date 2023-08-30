// deploy.js
const { ethers } = require('hardhat');

async function main() {
  // Deploy MenovaV3 contract
  const MenovaV3 = await ethers.getContractFactory('MenovaV3');
  const menovaV3 = await MenovaV3.deploy(
    '0xd8253782c45a12053594b9deB72d8e8aB2Fca54c',
    'MenovaV3',
    'MVL3'
  );
  await menovaV3.deployed();

  console.log('MenovaV3 deployed to:', menovaV3.address);
}

// MenovaV3 deployed to: 0xf805d76E14a8E37D6614634924BdFE33771D283b

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
