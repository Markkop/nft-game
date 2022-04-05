import hre from "hardhat";
import { replaceEnvContractAddresses } from "./replaceEnvAddresses";
const constructorArgs = require("./constructorArgs.ts");

const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy.apply(
    gameContractFactory,
    constructorArgs
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  replaceEnvContractAddresses(
    [
      {
        envName: "MYEPICGAME_CONTRACT_ADDRESS",
        envValue: gameContract.address,
      },
    ],
    hre.network.name
  );

  let txn;
  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();
  console.log("Minted NFT #1");

  txn = await gameContract.attackBoss();
  await txn.wait();

  console.log("Done deploying, minting and attacking!");

  // Get the value of the NFT's URI.
  const returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);
};

const runMain = async () => {
  try {
    await main();
  } catch (error) {
    console.log(error);
  }
};

runMain();
