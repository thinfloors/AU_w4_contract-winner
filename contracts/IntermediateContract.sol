// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

/*
Intermediate contract to call contract's 'winner' function, cannot call it
straight away as it checks that msg.sender != tx.origin

Using interface here (for practice) even though we have a contract with the 
full code under Contract.sol - that is for testing purposes, want to deploy 
the contract to a test environment and listen for the emitted Event
*/

interface AUContract {
    function attempt() external;
}

contract IntermediateContract {
    address public owner;

    constructor() payable {
        owner = msg.sender;
    }

    function callWinner(address addr) public onlyOwner {
        AUContract(addr).attempt();
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
}
