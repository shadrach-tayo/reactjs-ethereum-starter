import { ethers, config } from "hardhat";
import fs from "fs";

async function main() {
  // update contract addresses export file for frontend use
  try {
    fs.unlinkSync(`${config.paths.artifacts}/contracts/address.ts`);
  } catch (e) {
  }

  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = ethers.utils.parseEther("1");

  const Lock = await ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  await lock.deployed();
  savedAddressExport(lock.address, "Lock");

  console.log(`Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`);
}

function savedAddressExport(address: string, contractName: string) {
  fs.appendFileSync(`${config.paths.artifacts}/contracts/address.ts`, `export const ${contractName} = '${address}'`)
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
