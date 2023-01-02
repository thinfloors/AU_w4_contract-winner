const hre = require("hardhat");

const INTERMEDIATE_ADDR = "0x5d901B41DB7FC269063f7811cf5a8e16C3E7AB37";
const CONTRACT_ADDR = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";

/*
Uses intermediate contract we deployed in deploy.js to call the callWinner function
*/

async function main() {
    const contract = await hre.ethers.getContractAt(
        "IntermediateContract",
        INTERMEDIATE_ADDR
    );

    const tx = await contract.callWinner(CONTRACT_ADDR);
    await tx.wait();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
