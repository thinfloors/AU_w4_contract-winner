# Contract Winner Challenge

This is one of the AU Week 4 Challenges to emit an event in a contract that won't allow msg.sender to equal tx.origin

An intermediate contract was created to call the contract, and a testing file was included to make sure that the original contract (when deployed to a local hardhat network) emitted the correct event.
