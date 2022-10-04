//https://eth-goerli.g.alchemy.com/v2/UFtuXdWQ2XLNb8CwJofM1Hzu5KX9IUTb

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/UFtuXdWQ2XLNb8CwJofM1Hzu5KX9IUTb",
      accounts: [
        "9d0d171b46c6b37a72e29170ae9f4611a11254d7a1a4ee300ab6118e5a53c8ea",
      ],
    },
  },
};
