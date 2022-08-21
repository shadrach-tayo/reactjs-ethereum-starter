import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  paths: {
    artifacts: "../frontend/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 1337,
    }
  },
  typechain: {
    outDir: "../frontend/types/typechain"
  }
};

export default config;
