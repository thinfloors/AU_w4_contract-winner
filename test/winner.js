const { expect } = require("chai");

describe("TestWinner", function () {
    it("should trigger Winner event and assign winner to the address of IntermediateContract", async function () {
        // Origin contract and variables
        const Contract = await hre.ethers.getContractFactory("Contract");
        const au = await Contract.deploy();
        await au.deployed();

        const auAddress = au.address;
        console.log(`AU Contract deployed to: ${auAddress}`);

        // Intermediate contract and variables
        const Intermediate = await hre.ethers.getContractFactory(
            "IntermediateContract"
        );
        const intermediate = await Intermediate.deploy();
        await intermediate.deployed();
        const intermediateAddress = intermediate.address;
        console.log(`Intermediate address deployed to: ${intermediateAddress}`);

        // Test that Winner event was emitted
        await expect(intermediate.callWinner(auAddress)).to.emit(au, "Winner");
    });
});
