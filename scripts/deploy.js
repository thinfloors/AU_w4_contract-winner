const hre = require("hardhat");
require("dotenv").config();

async function main() {
    /*
    const Contract = await hre.ethers.getContractFactory("Contract");
    const au = await Contract.deploy();
    await au.deployed();

    console.log(`AU Contract was deployed to: ${au.address}`);
    */

    const IntermediateContract = await hre.ethers.getContractFactory(
        "IntermediateContract"
    );
    const intermediate = await IntermediateContract.deploy();
    await intermediate.deployed();

    console.log(
        `Intermediate contract was deployed to: ${intermediate.address}`
    );
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
