# ⚔️ NFT Battle

This is a project based on Buildspace's [Create your own mini turn-based NFT browser game](https://app.buildspace.so/projects/CO5cc2751b-e878-41c4-99fa-a614dc910ee9) tutorial.

# Develop

## 🔎 Etherscan verification

Deploy the contract with `npm run deploy:rinkeby` and copy the deployed contract address.  
Run `npm run verify -- CONTRACT_ADDRESS`, but change `CONTRACT_ADDRESS` with the contract address you've copied.

## ⚙️ Enable custom TSCONFIG for Hardhat

This project is using `react-scripts` bundle and it requires `"module": "esnext"` typescript configuration.  
Hardhat in the other hand must use `"module": "commonjs"` to work.  
To avoid having to eject this React project and customizing its babel settings, I'm using two `tsconfig.json` files.  
Run `. scripts/exportTsConfigEnv.sh` or `export HARDHAT_TSCONFIG='tsconfig.hardhat.json'` in your terminal before running hardhat.  
You must do this for each new/restarted terminal you're going to use.  
