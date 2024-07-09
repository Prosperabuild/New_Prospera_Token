const { ethers } = require("hardhat");

async function main() {
  const PROSPERA = await ethers.getContractFactory("PROSPERA");
  const prospera = await PROSPERA.deploy();

  await prospera.waitForDeployment();
  console.log("PROSPERA deployed to:", prospera.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

