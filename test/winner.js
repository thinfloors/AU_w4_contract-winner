const { expect } = require("chai");

// the `describe` scope encapsulates an entire test called `TestModifyVariable`
// the `it` says the behavior that should be expected from the test
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

        /*
        tx = await intermediate.callWinner(auAddress);
        const receipt = await tx.wait();
        console.log(receipt);
        */

        await expect(intermediate.callWinner(auAddress)).to.emit(au, "Winner");

        /*
        // we then use the ContractFactory object to deploy an instance of the contract
        const contract = await ModifyVariable.deploy(10, "");

        // wait for contract to be deployed and validated!
        await contract.deployed();

        // modify x from 10 to 1337 via this function!
        await contract.modifyToLeet();
        // getter for state variable x
        const newX = await contract.x();
        assert.equal(newX.toNumber(), 1337);

        await contract.modifyXToAnything(7);
        const newerX = await contract.x();
        assert.equal(newerX.toNumber(), 7);
        */
    });
});
