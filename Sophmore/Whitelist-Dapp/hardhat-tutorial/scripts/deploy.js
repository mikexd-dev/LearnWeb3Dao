const { ethers } = require("hardhat");

async function main() {
  /**
   * A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts, so whitelistContract here is a factory for instances of our whitelist contract.
   */

  const whitelistContract = await ethers.getContractFactory("Whitelist");

  // deploy the contract, with 10 as max num of whitelisted addresses allowed
  const deployedWhitelistContract = await whitelistContract.deploy(10);

  // wait for it to finish deploying
  await deployedWhitelistContract.deployed();

  console.log(
    "Whitelist Contract Address: ",
    deployedWhitelistContract.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
