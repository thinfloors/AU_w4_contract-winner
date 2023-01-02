require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.0",
    networks: {
        goerli: {
            url: process.env.TEST_URL,
            accounts: [process.env.TEST_PK],
        },
    },
};
