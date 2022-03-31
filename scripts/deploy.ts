import hre from "hardhat";

const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Mage", "Warrior", "Hunter"],
    [
      "https://i.imgur.com/5NN9BoZ.png",
      "https://i.imgur.com/SvxBOn8.png",
      "https://i.imgur.com/yoWSYY3.png",
    ],
    [100, 300, 200],
    [100, 25, 50]
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  const txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

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
