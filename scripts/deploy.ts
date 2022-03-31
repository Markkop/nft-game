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
};

const runMain = async () => {
  try {
    await main();
  } catch (error) {
    console.log(error);
  }
};

runMain();
