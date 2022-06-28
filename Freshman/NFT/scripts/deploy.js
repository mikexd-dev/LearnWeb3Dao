const { ethers } = require("hardhat");

async function main() {
  const nftContract = await ethers.getContractFactory("GameItem");
  const deployedNFTContract = await nftContract.deploy();
  console.log("NFT contract address:", deployedNFTContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
